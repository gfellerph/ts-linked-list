import LinkedList from '../src/LinkedList';

describe('LinkedList.append', () => {
  it('Pushes a new node to the end of the list', () => {
    const list = new LinkedList(1, 2);
    const val = list.append(3);
    expect(val).toBe(list);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('Pushes many args', () => {
    const list = new LinkedList(1, 2);
    const value = list.append(3, 4);
    expect(value).toBe(list);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });
});
