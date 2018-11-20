import Lemi from './LinkedList';

test('this is the Matrix', () => {
    console.log('hello world')
})

test('this will show nodes', () => {
    let ll = new Lemi.LinkList('frist', 5);
    expect(ll.show()).toBe('frist, 5');


    expect(ll.add()).toBe('frist, 5');
})

