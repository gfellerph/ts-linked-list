import LinkedList from '../src/LinkedList';

describe('LinkedList.insertAt', () => {
  it('Inserts a node at position 1', () => {
    const l = new LinkedList(1, 3);
    l.insertAt(1, 2);
    expect(l.length).toBe(3);
    expect(l.head.next.data).toBe(2);
  });

  it('Inserts a node even if the index is off limits', () => {
    const l = new LinkedList(1, 2);
    l.insertAt(100, 3);
    expect(l.length).toBe(3);
    expect(l.tail.data).toBe(3);
  });

  it('Inserts a node even if the index is negative', () => {
    const l = new LinkedList(2, 3);
    l.insertAt(-100, 1);
    expect(l.length).toBe(3);
    expect(l.head.data).toBe(1);
  });

  it('Inserts on an empty list', () => {
    const list = new LinkedList();
    list.insertAt(0, 1);
    expect(list.length).toBe(1);
    expect(list.toArray()).toEqual([1]);
  });
});
