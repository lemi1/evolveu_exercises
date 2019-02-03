import lm from './LinkedList';

test('testing showAll and addNode', () => {
	let myNode = new lm.LinkedList();
	expect(myNode.showAll()).toBe(' Subject:v | Amount:400<br/>');
	myNode.addNode('a', 100);
	myNode.addNode('b', 200);
	myNode.addNode('c', 300);
	expect(myNode.showAll()).toBe(
		' Subject:v | Amount:400<br/> Subject:a | Amount:100<br/> Subject:b | Amount:200<br/> Subject:c | Amount:300<br/>'
	);
});
