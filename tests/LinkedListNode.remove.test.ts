import LinkedList from '../src/LinkedList';
import LinkedListNode from '../src/LinkedListNode';

describe('LinkedListNode.remove', () => {
  it('Removes the head correctly', () => {
    const list = new LinkedList(1, 2, 3);
    list.head.remove();
    expect(list.length).toBe(2);
    expect(list.head.data).toBe(2);
    expect(list.head.prev).toBe(null);
    expect(list.toArray()).toEqual([2, 3]);
  });

  it('Throws when list is null', () => {
    const node = new LinkedListNode(1, null, null, null);
    expect(() => node.remove()).toThrow();
  });
});
