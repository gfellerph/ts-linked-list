import LinkedList from '../src/LinkedList';

describe('LinkedList.get', () => {
  it('Returns correct data at index 2', () => {
    const list = new LinkedList(1, 2, 3);
    const value = list.get(2);
    expect(value).toBe(3);
  });

  it('Returns undefined if index is out of bounds', () => {
    const list = new LinkedList(1, 2, 3);
    const value = list.get(4);
    expect(value).toBe(undefined);
  });
});
