import LinkedList from '../src/LinkedList';
import LinkedListNode from '../src/LinkedListNode';

describe('LinkedListNode.insertBefore', () => {
  it('inserts a node before this one', () => {
    const list = new LinkedList(2, 3);
    list.head.insertBefore(1);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('throws if list is not set', () => {
    const node = new LinkedListNode(1, null, null, null);
    expect(node.insertBefore(0)).toBeInstanceOf(LinkedList);
  });
});
