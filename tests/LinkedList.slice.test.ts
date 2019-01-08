import LinkedList from '../src/LinkedList';

describe('LinkedList.slice', () => {
  it('Slices the list', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const slice = list.slice(2);
    expect(slice.length).toBe(3);
    expect(slice.head.prev).toBe(null);
    expect(slice.tail.next).toBe(null);
    expect(slice.toArray()).toEqual([3, 4, 5]);
  });

  it('slices with end argument', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const slice = list.slice(1, 3);
    expect(slice.length).toBe(2);
    expect(slice.head.prev).toBe(null);
    expect(slice.tail.next).toBe(null);
    expect(slice.toArray()).toEqual([2, 3]);
  });
});
