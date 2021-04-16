import Terminal from './Teminal'
import NoTerminal from './NoTerminal'
import Error from './Error'
import ContainParsers from './ContainParsers'
import Grammar from './Grammar'
export default class SymbolTable{

    constructor(){
        this.terminales = new Array()
        this.noterminales = new Array()
        this.declaredNoterminales = new Array()
        this.iniciador = ""
        this.terminalAux = new Terminal()
        this.noTerminalAux = new NoTerminal()
        this.answer = "Leyendo Archivo\n"
        this.erroresLexicos = new Array()
        this.erroresSintacticos = new Array()
        this.leftRecursed = new Array()
        this.parsers = new ContainParsers()
    }

    /**
     * Function to verify the entry text with the parser selected
     * @param {*} entry 
     * @param {*} parserName 
     * @returns 
     */
    async parseEntry(entry, parserName){
        var answer = await this.parsers.parse(entry,parserName)
        return answer
    }

    /**
     * Get the name of the parsers
     * @returns 
     */
    getParsers(){
        return this.parsers.getNameParsers()
    }

    
    getTree(){
        return this.parsers.getGraphCode()
    }
    
    /**
     * Create a Jison Code with the actual parameters of thisobject
     * @returns 
     */
    createCode(){
        var code = "";
        code += "%{\n"
        //Here we add our code
        code += "%}\n"
        code += "%lex\n"
        code += "%%\n"
        code += "\\s+    /*skip*/\n"
        for(var index=0; index<this.terminales.length; index++){
            code += this.terminales[index].getLexeme().replace(/\'/g,'"').replace(/\s/g,"") + "      " + "return '"+this.terminales[index].getToken().replace(/\$_/g,"T")+"'\n"
        }
        code += ".*     /*LEXIC ERROR*/\n";
        code += "<<EOF>>    return 'EOF'\n";
        code += "/lex\n";

        code += "\t%start "+this.iniciador.replace(/%_/g," NT")+"\n";
        code+= "\t%%\n"
        for(var index=0; index<this.noterminales.length; index++){
            //Hero goes the production
            var tittleProduction = this.noterminales[index].getProduction().replace(/%_/g," NT")
            code += tittleProduction +"\n \t:"
            var helperCode = this.noterminales[index].getRules();
            for(var indexCode=0; indexCode<helperCode.length; indexCode++){
                //Hero goes the rules
                var lexeme = helperCode[indexCode].replace("|","").replace(/%_/g," NT").replace(/\$_/g," T")
                if(indexCode==0){
                    code += lexeme 
                    
                }else{
                    code += "| " + lexeme
                }
                code += "      {console.log(\""+tittleProduction.replace("NT","%_")+"\"); "
                var lexemeAux = lexeme.split(" ")
                console.log("LEXEMA: \'"+lexeme+"\' size: "+lexemeAux.length)
                var contadora = 0
                for(var indexLexeme=0; indexLexeme<lexemeAux.length; indexLexeme++){
                    if(lexemeAux[indexLexeme].localeCompare("")!=0){ 
                        if(lexemeAux[indexLexeme].charAt(0) == 'T'){
                            code += "console.log($"+(contadora+1)+"); stack.push($"+(contadora+1)+");"
                            contadora++
                        }else if(lexemeAux[indexLexeme].charAt(0) == 'N'){
                            code += "console.log(\""+lexemeAux[indexLexeme].replace("NT","%_")+"\"); stack.push(\""+lexemeAux[indexLexeme].replace("NT","%_")+"\");"
                            contadora++
                        }
                    }
                }
                code += "addCode(\""+tittleProduction.replace("NT","%_").replace(" ","")+"\");"
                code += "}\n"
            }
            code += "\t;\n"
        }
        code += "%%\n"
        code += "var contadora=0\n"
        code += "var stack = new Array()\n"
        code += "var codigo = \"\"\n"
        code += "var listaDummy = new Array()\n"
        code += "function addCode(name){\n"
        code += "for(var index=0; index<stack.length; index++){\n"
        code += "\tcodigo += (contadora+1)+\".-\"+name+\" -> \"+contadora+\".-\"+stack[index]+\";\\n\";\n"
        code += "\t console.log(\"CODIGO AGREGADO: \"+codigo)\n"
        code += "}\n"
        code += "generatedCodeFull = codigo\n"
        code += "contadora++;\n"
        code += "stack = new Array();\n"
        code += "listaDummy = new Array(); \n"
        code += "listaDummy.push(codigo)\n"
        code += "}\n"
        console.warn("CODIGO: "+code)
        return code
    }

    /**
     * Create and add a new Parser
     * @param {*} code 
     * @param {*} nameParser 
     */
    createParser(code,nameParser){
        try {
            var text = nameParser
            if(text.localeCompare("")==0){
                text = "defaultParser"+this.parsers.getSize()
            }
            console.log("Entrando createParser")
            var Parser = require("jison").Parser;
            var parser = new Parser(code);
            this.parsers.setParser(parser,text)
            alert("Se agrego tu gramatica: "+text)
        // you can also use the parser directly from memory

        // if(parser.parse("(abc+abc)FIN")){
        //     console.log("ES VERDADERO LPTM")
        // }
        // // returns true

        // parser.parse("adfe34bc zxg");
// throws lexical error   
        } catch (error) {
            console.error(error)            
        }
    }

    reset(){
        this.terminales = new Array()
        this.noterminales = new Array()
        this.declaredNoterminales = new Array()
        this.iniciador = ""
        this.terminalAux = new Terminal()
        this.noTerminalAux = new NoTerminal()
        this.answer = "Leyendo Archivo\n"
        this.erroresLexicos = new Array()
        this.erroresSintacticos = new Array()
        this.leftRecursed = new Array()
    }

    tokenInitialiaze(token){
        this.iniciador = token
    }

    checkLexicLexemes(){
        //Si es verdadero ir a parsear
        var result = true
            for(var index=0; index<this.terminales.length; index++){
                var flag = this.terminales[index].checkLexeme(this.terminales)
                if(flag){
                    this.answer+= this.terminales[index].getMessage()
                    result = false;
                }
            }
        return result
    }

    checkSyntaxRules(){
        //Si es verdadero ir a parser
        var result = true
            for(var index=0; index<this.noterminales.length; index++){
                var flag = this.noterminales[index].checkSyntax(this.noterminales, this.terminales)
                if(flag){
                    this.answer += this.noterminales[index].getMessage()
                    result = false
                }
            }
        return result
    }



    checkFactorize(){
        var result = true
        for(var index=0; index<this.noterminales.length; index++){
            var flag = this.noterminales[index].factorize()
            if(flag){
                this.answer += "Se detecto que se puede factorizar en la produccion: "+this.noterminales[index].getProduction()+"\n"
                result = false
            }
        }
        return result
    }

    checkLeftRecursion(){
        var result = true
        
        for(var index=0; index<this.noterminales.length; index++){
            var flag = this.noterminales[index].checkLeftRecursion();
            if(flag == true){
                this.answer += "Se detecto recursividad en la izquierda en la produccion: "+this.noterminales[index].getProduction()+"\n"
                result = false;
            }
        }
        return result
    }

    checkIfNotDeclareted(){
        var result = true
        var declaredNoterminales = this.declaredNoterminales
        var noTerminales = this.noterminales
        var indexDeclared =0
        var indexNoTerminales =0
        var founded = false

            
            for(indexNoTerminales=0; indexNoTerminales<noTerminales.length; indexNoTerminales++){
                founded=false
                for(indexDeclared=0; indexDeclared<declaredNoterminales.length;indexDeclared++){
                    var nameDeclared = declaredNoterminales[indexDeclared]
                    var compareProduction = noTerminales[indexNoTerminales].getProduction()
                    var result = nameDeclared.toString().localeCompare(compareProduction.toString())
                    if(result == 0){
                        if(founded==false){
                            console.log(compareProduction+indexNoTerminales)
                            founded=true
                        }else{
                            this.answer += "ERROR: La produccion: "+compareProduction+" se produjo más de una vez \n"
                            result = false;
                            break;
                        }
                    }
                    if(founded ==false && indexDeclared == (declaredNoterminales.length-1)){
                        this.answer += "ERROR: La produccion: "+compareProduction+" no existe\n"
                        founded=true
                        result = false
                    }
                }
                if(founded==false){
                    this.answer += "WARNING: El No Terminal "+noTerminales[indexNoTerminales]+" no se uso en ningun momento\n"
                }
            }
            if(noTerminales.length< declaredNoterminales.length){
                for(indexDeclared=0; indexDeclared<declaredNoterminales.length; indexDeclared++){
                    founded=false
                    for(indexNoTerminales=0; indexNoTerminales<noTerminales.length;indexNoTerminales++){
                        var nameDeclared = declaredNoterminales[indexDeclared]
                        var compareProduction = noTerminales[indexNoTerminales].getProduction()
                        var result = nameDeclared.toString().localeCompare(compareProduction.toString())
                        if(result == 0){
                            if(founded==false){
                                founded=true
                            }
                        }
                    }
                    if(founded==false){
                        this.answer += "WARNING: El No Terminal "+declaredNoterminales[indexDeclared]+" no se uso en ningun momento\n"
                    }
                }
            }

        return result
    }

    /**
     * Description of the output
     */
    getAnswer(){
        if(this.erroresLexicos.length==0 && this.erroresSintacticos.length==0){
            return this.answer
        }else{
            for(var index=0; index<this.erroresLexicos.length; index++){
                this.answer += this.erroresLexicos[index].getMessage();
            }
            for(var index=0; index<this.erroresSintacticos.length; index++){
                this.answer += this.erroresSintacticos[index].getMessage();
            }
            return this.answer
        }
        
    }

    haveErrors(){
        if(this.erroresLexicos.length==0 && this.erroresSintacticos.length==0){
            return false
        }else{
            return true
        }
    }

    /**
     * Getters for the Grammar Windigo
     * @param {*} descripcion 
     * @param {*} linea 
     * @param {*} columna 
     */
    addErrorSintactico(descripcion, linea, columna){
        let error = new Error(descripcion, linea, columna)
        this.erroresSintacticos.push(error)
    }

    addErrorLexico(descripcion, linea, columna){
        let error = new Error(descripcion, linea, columna)
        this.erroresLexicos.push(error)
    }

    addNoTerminalDeclarate(noTerminal){
        this.declaredNoterminales.push(noTerminal)
        console.log("Declarando NoTerminal: "+noTerminal);
    }

    addTokenTerminal(nameToken){
        this.terminalAux.setToken(nameToken)
        console.log("Declarando Terminal: "+nameToken);
    }

    addLexemeTerminal(lexemeToken){
        this.terminalAux.setLexeme(lexemeToken)
        console.log("Declarando Lexema: "+lexemeToken);
    }

    addProductionName(noTerminalName){
        this.noTerminalAux.setProduction(noTerminalName)
        console.log("Produccion NoTerminal: "+noTerminalName)
    }

    addNewRule(newRule){
        this.noTerminalAux.setNewRule(newRule)
        console.log("Agregando regla: "+newRule)
    }

    resetTerminal(){
        this.terminales.push(this.terminalAux)
        console.log("PUSH TERMINAL");
        this.terminalAux = new Terminal()
    }

    resetNoTerminal(){
        this.noterminales.push(this.noTerminalAux)
        console.log("PUSH NOTERMINAL")
        this.noTerminalAux = new NoTerminal()
    }

    getTerminalAux(){
        return this.terminalAux
    }

    getNoTerminalAux(){
        return this.noTerminalAux
    }

    getTerminales(){
        return terminales
    }

    getNoTerminales(){
        return this.noterminales
    }

}
