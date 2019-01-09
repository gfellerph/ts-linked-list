import LinkedList from '../src/LinkedList';

describe('LinkedList.prepend', () => {
  it('Prepends a node to a list of length 1', () => {
    const l = new LinkedList(2);
    l.prepend(1);
    expect(l.length).toBe(2);
    expect(l.head).not.toBe(l.tail);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(2);
  });

  it('Prepends to an empty list', () => {
    const list = new LinkedList();
    list.prepend(1);
    expect(list.toArray()).toEqual([1]);
  });
});
