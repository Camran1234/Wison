class symbolTable{
    terminales = new Array()
    noterminales = new Array()
    terminalAux = new Terminal()
    noTerminalAux = new NoTerminal()

    constructor(){
        this.terminales = new Array()
        this.noterminales = new Array()
    }

    resetTerminal(){
        this.terminalAux = new Terminal()
    }

    reseteNoTerminal(){
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