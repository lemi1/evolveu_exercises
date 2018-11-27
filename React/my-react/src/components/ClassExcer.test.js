import ll from "./ClassExcer";
test('What does the following do?', () => {
    //let head = ll.getMyll();
    console.log('hello world');
});


test('lets test some link lists', () => {
// place code below to print every value in the node
    console.log('The value of each node' );
    let head = ll.getMyLL();
    console.log('here i am ', head);
    let x = head;
    while(x){
        console.log(x.value);
        x = x.nextNode;
        
    }
    

// place the code below to print the number of nodes
console.log('the number of nodes');
    
    let b = head;
    let counter = 0;
    while(b){
        counter = counter + 1
        

        
  
    



//place the code below to add an attribute 'order' with the
// count to each node

    console.log('------ add attribute order ----');

// place the code below to print the value and order for each node
    
    console.log('-- the value and order each node---');


// place the code below to sum the order and print the sum
    //     let d = head;
    //     let sum = 0 ;
    //     while(d){
    //         sum = sum + x.order;
    //     }
    //     return sum
    // console.log('---the sum of order---' , sum);

    // console.log('1')
})
