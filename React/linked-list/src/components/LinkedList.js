 class Node {
    constructor( subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }
 }

class LinkedList{
    constructor(subject, amount){
        this.head = new Node(subject, amount, null);
    };

    showAll(){
      let x = this.head;
      let z = ` Subject:${x.subject} | Amount:${x.amount}<br/>`;
      while(x.forwardNode){
        z += ` Subject:${x.forwardNode.subject} | Amount:${x.forwardNode.amount}<br/>`;
        x = x.forwardNode;
      }

        return z

    };

    addNode(subject,amount){
      let y = this.head;
      while(y.forwardNode !== null){
        y = y.forwardNode
      }
      y.forwardNode = new Node(subject, amount);
      console.log(y);
      return y

      };

};










export default {Node,LinkedList};
