import LinkedList from '../src/LinkedList';

describe('LinkedList.removeAt', () => {
  it('Removes at the correct index', () => {
    const list = new LinkedList(1, 2, 3);
    list.removeAt(1);
    expect(list.length).toBe(2);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.prev).toBe(list.head);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it('Returns the list if the index is out of bounds', () => {
    const list = new LinkedList(1, 2, 3);
    list.removeAt(4);
    expect(list.length).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});
