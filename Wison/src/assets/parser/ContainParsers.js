

export default class ContainParsers {

    constructor(){
        this.nameParsers = new Array()
        this.parsers = new Array()
    }

    setParser(parser, parserName){
        this.parsers.push(parser)
        this.nameParsers.push(parserName)
    }

    parse(entryText, parserName){
        var answer = "";
        try {
            for(var indexParser=0; indexParser<this.parsers.length; indexParser++){
                var localName = this.nameParsers[indexParser].toString()
                if(localName.localeCompare(parserName)==0){
                    var parser = this.parsers[indexParser]
                    //Parse the entry text
                    if(parser.parse(entryText.toString())){
                        answer="Parser "+parserName+", resultado: verdadero cadena valida"
                        break;
                    }else{
                        answer = "Parser "+parserName+", resultado: falso cadena no valida"
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
