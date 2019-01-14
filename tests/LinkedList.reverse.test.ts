import LinkedList from '../src/LinkedList';

describe('LinkedList.reverse', () => {
  it('Reverses a simple list', () => {
    const list = new LinkedList(1, 2, 3, 4);
    list.reverse();
    expect(list.head.data).toBe(4);
    expect(list.tail.data).toBe(1);
    expect(list.toArray()).toEqual([4, 3, 2, 1]);
    expect(list.reduce((i) => i + 1, 0)).toBe(4);
    expect(list.head.prev).toBe(null);
    expect(list.tail.next).toBe(null);
  });

  it('Reverses an empty list', () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('Reverses a list of one', () => {
    const list = new LinkedList(1);
    list.reverse();
    expect(list.head.data).toBe(1);
    expect(list.head).toBe(list.tail);
    expect(list.head.prev).toBe(null);
    expect(list.tail.next).toBe(null);
  });
});
