
export default class Error {

    constructor(descripcion, linea, columna){
        this.descripcion = descripcion
        this.linea = linea
        this.columna = columna
    }

    getMessage(){
        var message = this.descripcion+", linea: "+this.linea+", columna: "+this.columna+"\n"
        return message
    }



}
