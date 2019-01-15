class Node {
  constructor(value){
    this.value = value;
    //this.next = null
    }
}

let head = new Node("a");

head.next = new Node ("b");

head.next.next = new Node("c");
console.log(head);

let x = head;
//console.log(x.value);
while (x){
 console.log(x.value);
  x = x.next;
}
//console.log(x);












it('fake test',()=>{
  let n = new Node()
  n.value = "a"


});
