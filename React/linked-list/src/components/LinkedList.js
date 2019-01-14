 class Node {
    constructor( subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }
 }


 class LinkedList{
    constructor(subject, amount){
        this.head = new Node(subject, amount);
    }

        show(){
            let x = this.head;
            while (x) {
                console.log(x);
                x = x.subject;

            }
            return x;

        }
        add(){
            let a = this.head;
            while(x){
                console.log
            }
        }




    }

export default {Node,LinkedList};
