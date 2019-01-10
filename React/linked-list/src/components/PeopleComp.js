import React  from 'react';
import lm from './People';
class PeopleComp extends React.Component {
  constructor(){
    super();
    this.state = {myTribe: new lm.Family()};
  };
  addPeople = () =>{
    let name = document.getElementById("name").value;
    let age = parseFloat(document.getElementById("age").value);
    let dollars = parseFloat(document.getElementById("dollars").value);
    //let display = document.getElementById("display");
    this.state.myTribe.addPeople(name,age,dollars);
    //console.log(this.state.myTribe.show());
    // console.log(this.state.myTribe.getPeople());
    //display.value = this.state.myTribe.show();
    document.getElementById("display").innerHTML = `${this.state.myTribe.showAll()}`;

  };

  sumPeople = () => {

    document.getElementById('display').innerHTML
     =
    this.state.myTribe.sumPeople();
  };

  callBirthday = () => {
    document.getElementById('display').innerHTML
    =
    this.state.myTribe.callBirthday();
  };

  showAll = () => {
    document.getElementById('display').innerHTML
    =
    this.state.myTribe.showAll();

  };






  render = () => {
      return (
          <div className="bg">
          <div className="people">
          <h1>People</h1>
          Name:<textarea id="name" rows= "1" cols="10"></textarea>
          Age:<textarea id="age"  rows= "1" cols="10"></textarea>

          <br/>
          <br/>
          <button onClick={this.addPeople}>add to the list</button>
          <button onClick={this.sumPeople}>sum up thier ages</button>
          <button onClick={this.callBirthday}>add a year to their age</button>
          <button onClick={this.showAll}>show all</button>
          <br/>
          <br/>
          <div id="display"></div>


          </div>
          </div>
      );
  };
};






export default PeopleComp;
