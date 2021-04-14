class Terminal{
    token = ""
    lexeme = ""
    constructor (){
        this.token = ""
        this.lexeme = lexeme
    }

    getToken(){
        return this.token;
    }

    getLexeme(){
        return this.lexeme;
    }

    foesExist(production){
        var result = this.token.localCompare(production);
        if(result==0){
            return true
        }else{
            return false
        }
    }

    checkLexeme(productions){
        var result = this.token.localCompare(production);

        if(result==0){

        }else{

        }
    }
}