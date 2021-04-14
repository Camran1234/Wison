export default class Terminal{

    constructor (){
        this.token = "";
        this.lexeme = "";
    }

    setToken(newToken){
        this.token = newToken
    }

    setLexeme(newLexeme){
        this.lexeme = newLexeme
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