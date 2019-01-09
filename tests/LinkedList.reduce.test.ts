import LinkedList from '../src/LinkedList';

describe('LinkedList.reduce', () => {
  it('Reduces a list to its count', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = new LinkedList(1);
    const count = l1.reduce((c) => c + 1, 0);
    const count2 = l2.reduce((c) => c + 1, 0);
    expect(count2).toBe(1);
    expect(count).toBe(3);
  });

  it('Calls the reducer function with the correct arguments', () => {
    const l = new LinkedList(1, 2);
    const mock = jest.fn((acc, curr, index, list) => {
      expect(acc).toBe(l.head.data);
      expect(curr).toBe(l.tail.data);
      expect(index).toBe(0);
      expect(list).toBe(l);
    });
    l.reduce(mock);
    expect(mock).toBeCalledTimes(1);
  });

  it('Returns the start value if the list is empty', () => {
    const list = new LinkedList();
    const value = list.reduce(jest.fn(), 'habakuk');
    expect(value).toBe('habakuk');
  });
});
