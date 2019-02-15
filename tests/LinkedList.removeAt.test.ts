import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.removeAt', () => {
  it('Removes at the correct index', () => {
    const list = new LinkedList(1, 2, 3);
    const value = list.removeAt(1);
    expect(value.data).toBe(2);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it('Returns undefined if the index is out of bounds', () => {
    const list = new LinkedList(1, 2, 3);
    const value = list.removeAt(4);
    expect(value).toBe(undefined);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});
