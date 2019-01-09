import LinkedList from '../src/LinkedList';
import LinkedListNode from '../src/LinkedListNode';

describe('LinkedListNode.insertAfter', () => {
  it('inserts a node before this one', () => {
    const list = new LinkedList(1, 2);
    list.tail.insertAfter(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('throws when list is null', () => {
    const node = new LinkedListNode(1, null, null, null);
    expect(() => node.insertAfter(2)).toThrow();
  });
});
