

export default class ContainParsers {

    constructor(){
        this.nameParsers = new Array()
        this.parsers = new Array()
    }

    getParsers(){
        return this.parsers 
    }
    getNameParsers(){
        return this.nameParsers
    }
}
