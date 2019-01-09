import LinkedList from '../src/LinkedList';

describe('LinkedList.forEach', () => {
  it('Executes a function for each node', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const f = jest.fn();
    list.forEach(f);
    expect(f).toHaveBeenCalledTimes(5);
  });
});
