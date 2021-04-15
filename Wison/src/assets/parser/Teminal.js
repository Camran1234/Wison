
export default class Terminal{

    constructor (){
        this.token = "";
        this.lexeme = "";
        this.message="";
    }

    setToken(newToken){
        this.token = newToken
    }

    setLexeme(newLexeme){
        this.lexeme = newLexeme.replace("undefined","");
    }

    getToken(){
        return this.token;
    }

    getLexeme(){
        return this.lexeme;
    }


    checkLexeme(terminales){
        var result = false
        var separatedLexeme = this.lexeme.split(" ");
        for(var index=0; index<separatedLexeme.length; index++){
            var flag = false;
            var inserted=false
            for(var indexTerminales=0; indexTerminales<terminales.length; indexTerminales++){
                var tokenTerminal
                //The [index] lexeme check if its a Terminal
                //If its a terminal then check if exists and if it do exists replace the terminal by the lexeme of the terminal referenced 
                var aux = separatedLexeme[index].toString()
                if(aux.includes("$_") && aux!=null){
                    inserted=true
                    tokenTerminal = separatedLexeme[index];
                    if(tokenTerminal.toString().localeCompare(terminales[indexTerminales].getToken().toString())==0){
                        console.log("Entro");
                        flag = true
                        var nameTerminal = terminales[indexTerminales].getToken().toString()
                        var lexemeChange = terminales[indexTerminales].getLexeme().toString()
                        //Change the lexeme
                        this.lexeme.replace(nameTerminal, lexemeChange);
                        console.log("SE CAMBIO EL LEXEMA")
                    }
                }
            }
            if(!flag && inserted == true){
                this.message += "El terminal "+separatedLexeme[index]+" no se ha declarado, no se puede extraer el lexema\n";
                result=true
            }
        }
        return result;
    }

    getMessage(){
        return this.message
    }

    foesExist(production){
        var result = this.token.localeCompare(production);
        if(result==0){
            return true
        }else{
            return false
        }
    }

   
}