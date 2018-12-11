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









export default {
  People
};
