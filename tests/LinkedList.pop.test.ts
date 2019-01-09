import LinkedList from '../src/LinkedList';

describe('LinkedList.pop', () => {
  it('Correctly pops', () => {
    const l = new LinkedList(1, 2, 3);
    const value = l.pop();
    expect(value).toBe(3);
    expect(l.length).toBe(2);
    expect(l.tail.data).toBe(2);
  });

  it('Correctly pops an empty list', () => {
    const l = new LinkedList();
    const value = l.pop();
    expect(value).toBe(undefined);
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });

  it('Correctly pops the only element from the list', () => {
    const l = new LinkedList(1);
    l.pop();
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });
});
