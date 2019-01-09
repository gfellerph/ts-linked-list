import LinkedList from '../src/LinkedList';

describe('LinkedList.push', () => {
  it('Pushes a new node to the end of the list', () => {
    const list = new LinkedList(1, 2);
    list.push(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});
