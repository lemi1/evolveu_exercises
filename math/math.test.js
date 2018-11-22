
test('this test will add 2 numbers', () => {
    let ll = new Lemi.LinkList('frist', 5);
    expect(ll.show()).toBe('frist, 5');
