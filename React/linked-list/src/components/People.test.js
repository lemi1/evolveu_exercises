import lm from './People';

test('testing birthday', () => {
  let myPeople = new lm.People('Ariel', 21, 500);
  myPeople.birthday();
  expect(myPeople.show()).toBe('Ariel 22 500');

  myPeople = new lm.People('Simba', 38, 1000);
  myPeople.birthday();
  expect(myPeople.show()).toBe('Simba 39 1000');

  let p = new lm.People('Mister P', 29, 1200);
  let bff = p;

  p.birthday();
  expect(p.show()).toBe('Mister P 30 1200');
  expect(bff.show()).toBe('Mister P 30 1200');
  // bff also changed age since p and bff both point to the
  //same instance of the object

});

test('testing addPeople', () => {
  // let myPeople = [
  //                 new lm.People('Rafiki', 26, 100),
  //                 new lm.People('Sirabi', 34, 200),
  //                 new lm.People('Mufasa', 59, 300)
  //               ];

  let myFamily = new lm.Family();
  console.log(myFamily);
  myFamily.addPeople('Rafiki', 26, 100);
  expect(myFamily.myList[0].show()).toBe('Rafiki 26 100');
  myFamily.addPeople('Sirabi', 34, 200);
  expect(myFamily.myList[0].show()).toBe('Rafiki 26 100');
  myFamily.addPeople('Mufasa', 59, 300);
  expect(myFamily.myList[2].show()).toBe('Mufasa 59 300');
  // console.log(myFamily.myList[0]);

});

test('testing sumPeople', () => {
  let myFamily = new lm.Family();
  myFamily.addPeople('Rafiki', 26, 100);
  expect(myFamily.sumPeople()).toBe(26);
  myFamily.addPeople('Sirabi', 34, 200);
  expect(myFamily.sumPeople()).toBe(60);
  myFamily.addPeople('Mufasa', 59, 300);
  expect(myFamily.sumPeople()).toBe(119);
});

test('testing add birthday', () => {
  let myFamily = new lm.Family();
  myFamily.addPeople('Rafiki', 26, 100);
  myFamily.callBirthday();
  expect(myFamily.myList[0].age).toBe(27);
  myFamily.addPeople('Sirabi', 34, 200);
  myFamily.callBirthday();
  expect(myFamily.myList[1].age).toBe(35);
  myFamily.addPeople('Mufasa', 59, 300);
  myFamily.callBirthday();
  expect(myFamily.myList[2].age).toBe(60);

});
// test('testing showall',()=>{
//   let myFamily = new lm.Family();
//   myFamily.addPeople('Scar', 67, 300);
//   myFamily.addPeople('Timon', 23, 500);
//   myFamily.addPeople('Pumba', 22, 600);
//   expect(myFamily.showall()).toBe
//   (`name:Scar age:67 dollars:300
//
// name:Timon age:23 dollars:500
//
// name:Pumba age:22 dollars:600`);
// });

// test('getPeople', () =>{
//   let myFamily = new lm.Family();en
//   myFamily.addPeople('Scar', 67, 300);
//   myFamily.addPeople('Timon', 23, 500);
//   myFamily.addPeople('Pumba', 22, 600);
//   expect(myFamily.getPeople().show()).toBe(9);
// })




//  let total = 0
//  for(var index = 0; index < myPeople.length; index++) {
//      console.log(myPeople[index]);
//      myPeople[index].birthday();
//      total = total + myPeople[index].age
//      console.log(total);
// }

let me = new lm.People('Lemi', 25, 400);
let larry = new lm.People('Larry', 33, 500);
me.itMentor = larry;
console.log(larry);
console.log(me);
larry.birthday();
console.log(larry);
me.birthday();
console.log(me);
let zazu = new lm.People('Zazu', 56, 1000);
larry.itMentor = zazu;
console.log(larry);
console.log(zazu.age);
console.log(zazu.name);
zazu.birthday();
console.log(zazu.age);






let myCat = {
  "how many tails": 3
}
console.log(myCat["how many tails"])

myCat = {
  tails: 3
}
console.log(myCat.tails)
