import React from 'react';
import lm from './LinkedList';
class LinkedListComp extends React.Component {
  constructor(){
    super();
    this.state = {myLink:new lm.LinkedList()};
  };

  addNode = () => {
    let sub = document.getElementById("sub").value;
    let amount = document.getElementById("amount").value;

    this.state.myLink.addNode(sub, amount);
    document.getElementById('display').innerHTML =

    this.state.myLink.showAll();


  };

    showAll = () => {
      document.getElementById('display').innerHTML
      =
      this.state.myLink.showAll();
    };











    render() {
      return (
        <div className = " LinkedList">
            <h1>Linked List</h1>
              Subject:<textarea id="sub" rows= "1" cols="10"></textarea>
              Amount:<textarea id="amount"  rows= "1" cols="10"></textarea>
              <br/>
              <button onClick={this.showAll}>show</button>
              <br/>
              <button onClick={this.addNode}>add</button>
         <br/>

         <div id ="display"></div>
        </div>

      );
    }
  }


  export default LinkedListComp;
