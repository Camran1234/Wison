import Node from './Node'
export default class Tree {

    constructor(){
        //Value is the name of this node
        this.nodeFather = null
    } 

    /**
     * Add a new node to the father, renember how to build the tree first setfather then left productions to right productions
     * @param {*} value 
     */
    addNode(value){
        if(this.nodeFather == null){
            this.nodeFather = new Node(value)
        }else{
            this.nodeFather.addChild(new Node(value))
        }
    }

    /**
     * We stablish the grand father of the actual node or the father node
     * @param {*} value 
     */
    setFather(value){
        if(this.nodeFather == null){
            this.nodeFather = new Node(value)
        }else{
            //The grand father become the father of his son who is a father
            nodeGrandFather = new Node(value)
            nodeGrandFather.addChild(this.nodeFather)
            this.nodeFather = nodeGrandFather
        }
    }
}
