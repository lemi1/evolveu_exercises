 
import lm from './linkList';


test('testing link', () => {
    let ll = new lm.LinkList();
    expect(ll.play(3)).toBe(3);
})

// //test('testing show', () => {
//     //let a = new lm.LinkList();
//     expect(a.show()).toBe('first');
// })

test('test node', () => {
  // let a = new lm.LinkList('first');
  //  expect(a.show()).toBe('first'); 
   
  //  let b = new lm.LinkList('another');
  //  expect(b.show()).toBe('another'); 

    let c = new lm.LinkList('first');
    //console.log(c);
    expect(c.show()).toBe('first'); 
    c.add('second');
    //console.log(c)
    expect(c.show()).toBe('first, second');
   c.add('third');
    expect(c.show()).toBe('first, second, third');


 


})


