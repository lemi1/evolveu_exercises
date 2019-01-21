import lm from './LinkedList';

test('testing showAll and addNode',() => {
  let myNode = new lm.LinkedList("v",400);
  expect(myNode.showAll()).toBe(" Subject:v | Amount:400")
  myNode.addNode("a",100);
  myNode.addNode("b",200);
  myNode.addNode("c",300);
  expect(myNode.showAll()).toBe(" Subject:v | Amount:400 Subject:a | Amount:100 Subject:b | Amount:200 Subject:c | Amount:300"
)
  });
