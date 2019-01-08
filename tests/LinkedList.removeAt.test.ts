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
});
