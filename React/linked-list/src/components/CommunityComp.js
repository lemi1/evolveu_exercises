import React, { Component } from 'react';
import lm from './Community';
let myHood = new lm.Community();
class CommunityComp extends Component{

    addCity = () => {
      // let myHood = new lm.Community();
      let name = document.getElementById("name").value;
      let lat = document.getElementById("lat").value;
      let long = document.getElementById("long").value;
      let pop = document.getElementById("pop").value;
      let display = document.getElementById("display");
      display.value = myHood.addCity(name, parseFloat(lat),parseFloat(long),parseInt(pop));
      // document.getElementById("display").value=myHood.addCity();
    };






    render() {
        return (
            <div>
                <h1>City</h1>
                City Name:<input id="name" type="text"></input>
                Latitude:<input id="lat"  type="text"></input>
                Longitude:<input id="long"  type="text"></input>
                Population:<input id='pop'  type="text"></input>
                <button onClick={this.reset}>Clear All</button>
                <br/>
                <br/>
                <button onClick={this.addCity}>add a City</button>
                <button onClick={this.addPop}>Get the sum Population</button>
                <button onClick={this.getNorth}>Most Northern City</button>
                <button onClick={this.getSouth}>Most Southern City</button>
                <br/>
                <br/>
                <textarea id="display" rows="4" cols="50"></textarea>
                <br/>
                <br/>
                <button onClick={this.getFirst}>First</button>
                <button onClick={this.getLast}>Last</button>
                <button onClick={this.getNext}>Next</button>
                <button onClick={this.getprevious}>Previous</button>


            </div>
        );


    }
}





export default CommunityComp;
