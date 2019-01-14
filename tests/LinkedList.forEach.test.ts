import LinkedList from '../src/LinkedList';

describe('LinkedList.forEach', () => {
  it('Executes a function for each node', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const f = jest.fn();
    list.forEach(f);
    expect(f).toHaveBeenCalledTimes(5);
  });

  it('Walks the list in reverse order', () => {
    const list = new LinkedList(1, 2, 3);
    const testArray = new Array(list.length);
    const testArray2: number[] = [];
    list.forEach((data, index) => testArray[index] = data, true);
    list.forEach((data) => testArray2.push(data), true);
    expect(testArray).toEqual(list.toArray());
    expect(testArray2).toEqual([3, 2, 1]);
  });
});
