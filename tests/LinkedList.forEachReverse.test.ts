import LinkedList from '../src/LinkedList';

describe('LinkedList.forEachReverse', () => {
  it('Walks the list in reverse order', () => {
    const list = new LinkedList(1, 2, 3);
    const testArray = new Array(list.length);
    const testArray2: number[] = [];
    list.forEachReverse((data, index) => testArray[index] = data);
    list.forEachReverse((data) => testArray2.push(data));
    expect(testArray).toEqual(list.toArray());
    expect(testArray2).toEqual([3, 2, 1]);
  });
});
