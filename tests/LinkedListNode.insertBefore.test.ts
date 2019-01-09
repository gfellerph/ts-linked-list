import LinkedList from '../src/LinkedList';

describe('LinkedListNode.insertBefore', () => {
  it('inserts a node before this one', () => {
    const list = new LinkedList(2, 3);
    list.head.insertBefore(1);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});
