import React, { Component } from 'react';
import lm from './Community';
class CommunityComp extends Component{
    addCity = () => {

    }

    
    
    
    
    
    render() {
        return (
            <div>
                <h1>City</h1>
                City Name:<input  type="text"></input>
                Population:<input  type="text"></input>
                Latitude:<input  type="text"></input>
                Longitude:<input  type="text"></input>
                <button>Clear All</button>
                <br/>
                <br/>
                
                <button onClick={this.addCity}>add a City</button>
                <button onClick={this.addPop}>Get the sum Population</button>
                <button onClick={this.getNorth}>Most Northern City</button>
                <button onClick={this.getSouth}>Most Southern City</button> 
                <br/>
                <br/>
                <textarea rows="4" cols="50"></textarea>
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
