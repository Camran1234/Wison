import Terminal from './Teminal'
import NoTerminal from './NoTerminal'

export default class SymbolTable{

    constructor(){
        this.terminales = new Array()
        this.noterminales = new Array()
        this.declaredNoterminales = new Array()
        this.terminalAux = new Terminal()
        this.noTerminalAux = new NoTerminal()
    }

    customer(){
        return new Customer();
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
