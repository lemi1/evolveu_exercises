import React, { Component } from 'react';
import lm from './Math';
class MathComp extends Component {
    add = () => {
        let v1 = document.getElementById("v1").value;
        let v2 = document.getElementById("v2").value;
        let answer = document.getElementById("answer");
        answer.value = lm.add(parseInt(v1), parseInt(v2));
    };
    // let sum = lm.myAdd();

    subtract = () => {
        let v1 = document.getElementById("v1").value;
        let v2 = document.getElementById("v2").value;
        let answer = document.getElementById("answer");
        answer.value = lm.subtract(parseInt(v1), parseInt(v2));
    };
    multiply = () => {
        let v1 = document.getElementById("v1").value;
        let v2 = document.getElementById("v2").value;
        let answer = document.getElementById("answer");
        answer.value = lm.multiply(parseInt(v1), parseInt(v2));
    };
    even_Odd = () => {
        let v1 = document.getElementById("v1").value;
        let answer = document.getElementById("answer");
        answer.value = lm.even_Odd(v1);
    };
    myMath2 = () => {
        let v1 = document.getElementById("v1").value;
        let v2 = document.getElementById("v2").value;
        let a = document.getElementById("calc_string").value;
        let answer = document.getElementById("answer");
        answer.value = lm.math2(a,parseInt(v1), parseInt(v2));

    };


    render() {
        return (
            <div>
                <h1>Mathematics</h1>
                value1: <input id="v1" type="text"></input>
                <br />
                value2: <input id="v2" type="text"></input>
                <br />
                <button onClick={this.sum}>sum</button>
                <button onClick={this.add}>add</button>
                <button onClick={this.subtract}>subtract</button>
                <button onClick={this.multiply}>multiply</button>
                <button onClick={this.even_Odd}>Even or Odd</button>
                <br />
                <textarea id="answer" type='text'> </textarea>
                <br />
                <button onClick={this.myMath2}>math2</button>
                <input id="calc_string" type="text" ></input>
            </div>
        );
    }
}



export default MathComp;