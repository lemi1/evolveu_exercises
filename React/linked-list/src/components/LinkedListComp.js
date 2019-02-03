import React from 'react';
import lm from './LinkedList';
class LinkedListComp extends React.Component {
	constructor() {
		super();
		this.state = { myLink: new lm.LinkedList() };
	}

	addNode = () => {
		let sub = document.getElementById('sub').value;
		let amount = document.getElementById('amount').value;

		this.state.myLink.addNode(sub, amount);
		//document.getElementById('display').innerHTML = this.state.myLink.showAll();
	};

	showAll = () => {
		document.getElementById('display').innerHTML = this.state.myLink.showAll();
	};

	render() {
		return (
			<div className=" LinkedList">
				<h1>Linked List</h1>
				Subject:<textarea id="sub" rows="1" cols="10" />
				Amount:<textarea id="amount" rows="1" cols="10" />
				<br />
				<button onClick={this.showAll}>show all</button>
				<button onClick={this.addNode}>add</button>
				<br />
				<button onClick={this.first}>first</button>
				<button onClick={this.addNext}>next</button>
				<button onClick={this.addPrevious}>previous</button>
				<button onClick={this.last}>last</button>
				<br />
				<div id="display" />
			</div>
		);
	}
}

export default LinkedListComp;
