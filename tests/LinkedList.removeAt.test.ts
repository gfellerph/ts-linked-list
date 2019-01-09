import LinkedList from '../src/LinkedList';

describe('LinkedList.removeAt', () => {
  it('Removes at the correct index', () => {
    const list = new LinkedList(1, 2, 3);
    const value = list.removeAt(1);
    expect(value.data).toBe(2);
    expect(list.length).toBe(2);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.prev).toBe(list.head);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it('Returns undefined if the index is out of bounds', () => {
    const list = new LinkedList(1, 2, 3);
    const value = list.removeAt(4);
    expect(value).toBe(undefined);
    expect(list.length).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});
