import { require } from "ace-builds"


export default class ContainParsers {

    constructor(){
        this.nameParsers = new Array()
        this.parsers = new Array()
        this.graphCode = ""
        this.codigo = ""
    }

    static addCodigo(code) {
        this.codigo += code
    }

    setParser(parser, parserName){
        this.parsers.push(parser)
        this.nameParsers.push(parserName)
    }

    getGraphCode(){
        return this.graphCode
    }

    async parse(entryText, parserName){
        var answer = "";
        try {
            for(var indexParser=0; indexParser<this.parsers.length; indexParser++){
                var localName = this.nameParsers[indexParser].toString()
                console.log(this.parsers)
                if(localName.localeCompare(parserName)==0){
                    var parser = this.parsers[indexParser]
                    //Parse the entry text
                    if(parser.parse(entryText.toString())){
                        answer="Parser "+parserName+", resultado: verdadero cadena valida"
                        var a = parser.generate({moduleName: "parser"})
                        a = a.replace('return new Parser;})();','return generatedCodeFull;}')
                        a = a.replace('var parser = (function(){var generatedCodeFull = \'\';','function exec(){ var generatedCodeFull = \'Prueba\';')
                        a = a.replace('if (typeof require !== \'undefined\' && typeof exports !== \'undefined\') { exports.parser = "+moduleName+"; exports.Parser = "+moduleName+".Parser; exports.parse = function () { return "+moduleName+".parse.apply("+moduleName+", arguments); }; exports.main = "+ String(opt.moduleMain || commonjsMain) + "; if (typeof module !== \'undefined\' && require.main === module) { exports.main(process.argv.slice(1));} }','')
                        a = a.replace ('var contadora=0','console.log(\'Holamundo\')\nvar contadora=0')
                        a += '\nreturn exec()'

                        console.log(a)
                        var F = new Function('entryText',a)
                        console.log("Codigo obtenido: ", await F(entryText.toString()))
                        var codigo = "digraph g{\n"
                        console.log(parser.yy)
                        codigo += parser.yy.codigo + "\n"
                        codigo += "}\n"
                        this.graphCode = codigo
                        console.warn("GRAPHVIZ CODE: "+codigo)
                        break;
                    }else{
                        answer = "Parser "+parserName+", resultado: falso cadena no valida"
                        this.graphCode = "digraph g { }"
                        break;
                    }
                }
            }    
        } catch (error) {
            answer="Error ("+error.name+"): "+error.message
        }        
        return answer
    }

    getParsers(){
        return this.parsers 
    }
    getNameParsers(){
        
        return this.nameParsers
    }

    getSize(){
        return this.parsers.length
    }
}
