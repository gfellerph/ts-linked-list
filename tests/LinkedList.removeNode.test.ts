import LinkedList from '../src/LinkedList';

describe('LinkedList.removeNode', () => {
  it('Removes a node from the middle', () => {
    const list = new LinkedList(1, 2, 3);
    const node = list.getNode(1);
    list.removeNode(node);
    expect(list.length).toBe(2);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.prev).toBe(list.head);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it('Removes the first node', () => {
    const list = new LinkedList(1, 2, 3);
    list.removeNode(list.head);
    expect(list.length).toBe(2);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.prev).toBe(list.head);
    expect(list.toArray()).toEqual([2, 3]);
  });

  it('Removes the last node', () => {
    const list = new LinkedList(1, 2, 3);
    list.removeNode(list.tail);
    expect(list.length).toBe(2);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.prev).toBe(list.head);
    expect(list.toArray()).toEqual([1, 2]);
  });

  it('Removes the only node', () => {
    const list = new LinkedList(1);
    list.removeNode(list.head);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.toArray()).toEqual([]);
  });

  it('Removes the second last node and leaves only one', () => {
    const list = new LinkedList(1, 2);
    list.removeNode(list.head);
    expect(list.length).toBe(1);
    expect(list.head).toBe(list.tail);
    expect(list.head.next).toBe(null);
    expect(list.head.prev).toBe(null);
    expect(list.toArray()).toEqual([2]);
  });
});
