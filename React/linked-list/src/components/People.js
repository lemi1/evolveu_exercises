class People extends Object {
  constructor(name, age, dollars) {
    super();
      this.name = name;
      this.age = age;
      this.dollars = dollars;
  };

  birthday() {
    this.age = this.age + 1;
  };

  show() {
    return this.name + ' ' +
      this.age.toString() + ' ' +
      this.dollars.toString()
  };

};

class Family extends Object {
  constructor() {
    super();
    this.myList = [];
    //this.index = 0;
    //Family.prototype = Object.create(People.prototype);
  };

  addPeople(name, age, dollars) {

    //let mylength = this.myList.length;
    let myPeople = new People(name, age, dollars);
    this.myList.push(myPeople);

  };

  sumPeople() {
    let total = 0
    for (var index = 0; index < this.myList.length; index++) {
      //console.log(myPeople);
      total = total + this.myList[index].age;
    }
    return total;
  };
  callBirthday() {
    //let a = this.myList
    for (var index = 0; index < this.myList.length; index++) {
        this.myList[index].birthday();
    }
  };

  showAll(){
    let x;
    let showall="";
    for (x=0; x < this.myList.length; x++){
      showall += `name:${this.myList[x].name} age:${this.myList[x].age} dollars:${this.myList[x].dollars}
      \n`;
    }
    return showall;

  };






};
export default {
  People,
  Family
};
