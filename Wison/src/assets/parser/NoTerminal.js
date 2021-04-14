class NoTerminal {
    production = ""
    rules = new Array()

    //production es el nombre de la produccion
    //rules es el conjunto de reglas un array de string
    constructor (){
        this.production = "";
        this.rules = new Array();
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
    checkLeftRecursion(production, rules){
        if(rules.length>1){
            var size;
            for(size=0; size<rules.length; size++){
                var rule = rules[size]
                var res = rule.split(" ")
                if(res[0].localCompare(production)){
                    return true
                }
            }
        }
        return false
    }

    //retorna verdadero si se puede factorizar 
    factorize(production, rules){
        if(rules.length>1){
            var size;
            var rule = rules[0]
            var res = rule.split("")
            var terminal = res[0];
            var compareterminal = "";
            for(size=1; size<rules.length; size++){
                rule = rules[size]
                res = rules[size]
                compareterminal = res[0]
                if(terminal.localCompare(compareterminal)==0){
                    return true
                }
            }
        }
        return false
    }

    getProduction(){
        return this.production;
    }

    getRules(){
        return this.rules;
    }
}