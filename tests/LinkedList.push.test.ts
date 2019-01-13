import LinkedList from '../src/LinkedList';

describe('LinkedList.push', () => {
  it('Pushes a new node to the end of the list', () => {
    const list = new LinkedList(1, 2);
    const val = list.push(3);
    expect(val).toBe(list.length);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('Pushes many args', () => {
    const list = new LinkedList(1, 2);
    const value = list.push(3, 4);
    expect(value).toBe(4);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });
});
