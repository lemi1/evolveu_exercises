class Node {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.pointer = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// showAll() {
	// 	let x = this.head;
	// 	let z = ` Subject:${x.subject} | Amount:${x.amount}<br/>`;
	// 	while (x.pointer) {
	// 		z += ` Subject:${x.forwardNode.subject} | Amount:${x.forwardNode.amount}<br/>`;
	// 		x = x.forwardNode;
	// 	}

	// 	return z;
	// }

	addNode(subject, amount) {
		let newNode = new Node(subject, amount, null);
		let y = this.head;
		if (y == null) {
			y = newNode;
		} else {
			y = y.pointer;
			y = newNode;
		}
		return y;
	}
}

export default { Node, LinkedList };
