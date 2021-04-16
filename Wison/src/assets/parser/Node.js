export default class Node{
    constructor(value){
        this.value = value
        this.nodes = new Array()
    }

    /**
     * Return the value of the token storage in this node
     * @returns 
     */
    getValue(){
        return this.token
    }

    /**
     * Get the son's list of this node
     */
    getNodes(){
        return this.nodes
    }

    addChild(node){
        this.nodes.push(node)
    }
}