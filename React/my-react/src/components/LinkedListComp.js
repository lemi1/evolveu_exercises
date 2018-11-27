 
import React, { Component } from 'react';
import lm from "./linkList"

class LinkedListComp extends Component {
    onNew(lemi){
        console.log('onNew', lemi);
        let val = document.getElementById('newNodeTxt').value;
        console.log('Value', val);

        let ll = new lm.LinkList(val);
        console.log(ll);
        console.log('LinkedList', ll.show());
        ll.add('second');
        console.log('LinkedList2', ll.show());
    }




    render() {
    return (
      <div className="LinkedList">
      hello world from LinkedListComp
     <br/>
     <button onClick={this.onNew}>New</button>
     <br/>
     <input id="newNodeTxt"></input>
      </div>

      )
  }
}
export default LinkedListComp;
