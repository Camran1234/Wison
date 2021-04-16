
export default class Grammar {
    constructor(){
        //Here gies de lexical Rules
        this.rules = new Array()
        this.productions = new Array()
        // this.lex = new Array()
        // this.bnf = new Array()
    }

    setRules(terminales){
        for(var index=0; index<terminales.length; index++){
            var rule = new Array()
            
            var lexemeAux = terminales[index].getLexeme().toString().replace(/\'/g,'"')
            lexemeAux = lexemeAux.replace(/\s/g,"")

            
            rule.push(lexemeAux)
            rule.push(" return '"+terminales[index].getToken().toString()+"'")
            this.rules.push(rule)
        }
        var data ={}
        data["rules"] = this.rules
        this.rules = data
    }

    setProductions(noterminales){
        for(var index=0; index<noterminales.length; index++){
            var production = new Array()
            var auxProductions = noterminales[index].getRules()
            for(var aa=0; aa<auxProductions.length; aa++){
                production.push(auxProductions[aa].toString().replace("|",""))
            }
            var nameNo = noterminales[index].getProduction().toString()
            var data = {}
            data[nameNo] = production
            this.productions.push(data)
        }
        
    }

    getRules(){
     return this.rules
    }

    getProductions(){
        return this.productions
    }

}