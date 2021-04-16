export default class NoTerminal {

    //production es el nombre de la produccion
    //rules es el conjunto de reglas un array de string
    constructor (){
        this.production = "";
        this.rules = new Array();
        this.message ="";
    }

    setProduction(nameProduction){
        this.production = nameProduction
    }

    //Agrega una nueva regla
    setNewRule(newRule){
        this.rules.push(newRule)
    }   

    //Retorna verdadero si es recursiva por la izquierda
    //Retorna falso si no es recursiva por la izquierda
    checkLeftRecursion(){
        if(this.rules.length>1){
            var size;
            for(size=0; size<this.rules.length; size++){
                var rule = this.rules[size].toString()
                var res = rule.split(" ")
                if(res[0].localeCompare(this.production)==0){
                    
                    return true
                }
            }
        }
        return false
    }

    //retorna verdadero si se puede factorizar 
    factorize(){
        var result = false
        if(this.rules.length>1){
            var size;
            //This part is dummy
            var rule = this.rules[0]
            var res = rule.split(" ")
            var terminal = res[0];
            var compareterminal = "";
            for(size=0; size<this.rules.length; size++){
                rule = this.rules[size].toString()
                res = rule.split(" ")
                compareterminal = res[0]
                if(terminal.localeCompare(compareterminal)==0){
                    result = true
                }else{
                    return false
                }
            }
        }
        return result
    }

    checkSyntax(noterminales, terminales){
        var result = false

        for(var index=0; index<this.rules.length; index++){
            var rule = this.rules[index].split(" ")
            for(var indexRule=0; indexRule<rule.length; indexRule++){
                var auxRule = rule[indexRule]        
                var flagNoTerminal 
                var flagTerminal
                //Is Terminal
                if(auxRule.includes("$_")){
                    flagTerminal = this.helpTerminal(terminales, auxRule)
                    if(flagTerminal==true){
                        result = true
                        this.message += "No se reconocio el Terminal"+auxRule+" en la produccion "+this.production+", dentro de sus reglas\n"
                    }
                    
                }else if(auxRule.includes("%_")){
                    //Is noTerminal
                    flagNoTerminal = this.helpNoTerminal(noterminales, auxRule)
                    if(flagNoTerminal==true){
                        result = true
                        this.message += "No se reconocio el NoTerminal "+auxRule+" en la produccion "+this.production+", dentro de sus reglas\n"
                    }
                }
            }
        }

        return result
    }

    /**
     * Return false if it does exist the production and is equal to the name
     * @param {} noterminales 
     * @param {*} name 
     * @returns 
     */
    helpNoTerminal(noterminales, name){
        var result = true
        for(var index=0; index<noterminales.length; index++){

            if(noterminales[index].getProduction().toString().localeCompare(name)==0){
                return false
            }
        }
        return result
    }

    helpTerminal(terminales, name){
        var result = true
        
        for(var index=0; index<terminales.length; index++){
            if(terminales[index].getToken().toString().localeCompare(name)==0){
                return false
            }
        }

        return result
    }

    getProduction(){
        return this.production;
    }
    getMessage(){
        return this.message
    }

    getRules(){
        return this.rules;
    }
}