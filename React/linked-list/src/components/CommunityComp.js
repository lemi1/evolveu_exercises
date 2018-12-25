import React from 'react';
import lm from './Community';
// let myHood = new lm.Community();
class CommunityComp extends React.Component{
  constructor(){
    super();
    this.state = {myHood: new lm.Community()};
  };
  addCity = () => {
      // let myHood = new lm.Community();
      let name = document.getElementById("name").value;
      let lat = parseFloat(document.getElementById("lat").value);
      let long = parseFloat(document.getElementById("long").value);
      let pop = parseFloat(document.getElementById("pop").value);
      let display = document.getElementById("display");
      this.state.myHood.addCity(name,lat,long,pop);
      //console.log(this.state.myHood);
      display.value = this.state.myHood.getCity().show();

      // document.getElementById("display").value=lm.addCity();
    };

    showCity = () => {
      let city = this.state.myHood.getCity();
      document.getElementById("display").value =
      city.name
      +
      city.lat;
    };

    displayList = () => {
      let display =  document.getElementById("display");
    //console.log(this.state.myHood.myCities)
      display.value = this.state.myHood.showAll();
    };

    getNorth = () => {
      // let lat = document.getElementById("lat").value;
      let display = document.getElementById("display");
      display.value = this.state.myHood.getMostNorthern().show();
    };

    getSouth = () => {
      //let lat = document.getElementById("lat").value;
      let display = document.getElementById("display");
      display.value = this.state.myHood.getMostSouthern().show();
    };

    addPop = () => {
      //let pop = document.getElementById("pop").value;
      let display = document.getElementById("display");
      display.value = this.state.myHood.getPopulation();
    };

    getFirst = () => {
      this.state.myHood.first();
      this.showCity()
    };

    getLast = () => {
      this.state.myHood.last();
      this.showCity()
    };

    getNext = () => {
      this.state.myHood.next();
      this.showCity()
    };

    getPrevious = () => {
      this.state.myHood.previous();
      this.showCity()
    };

    reset = () => {
      this.state.myHood.reset();
      document.getElementById("display").value = "";
    };








    render = () => {
        return (
            <div>
                <h1>City</h1>
                City Name:<textarea id="name" rows= "1" cols="10"></textarea>
                Latitude:<textarea id="lat"  rows= "1" cols="10"></textarea>
                Longitude:<textarea id="long" rows= "1" cols="10"></textarea>
                Population:<textarea id="pop" rows= "1" cols="10"></textarea>
                <button onClick={this.reset}>Clear All</button>
                <br/>
                <br/>
                <button onClick={this.addCity}>add a City</button>
              
                <button onClick={this.displayList}>city list</button>
                <button onClick={this.getNorth}>Most Northern City</button>
                <button onClick={this.getSouth}>Most Southern City</button>
                <button onClick={this.addPop}>Get the sum Population</button>
                <br/>
                <br/>
                <button onClick={this.getFirst}>First</button>
                <button onClick={this.getLast}>Last</button>
                <button onClick={this.getNext}>Next</button>
                <button onClick={this.getPrevious}>Previous</button>
                <br/>
                <br/>
                <textarea id="display" rows="20" cols="50"></textarea>
                <br/>
            </div>
        );


    }
}





export default CommunityComp;
