import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.test', () => {
  it('Maps to a new list', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = l1.map((data) => data);
    checkIntegrity(l2);
    expect(l1).toEqual(l2);
    expect(l1).not.toBe(l2);
  });

  it('Uses return values from the map function', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = l1.map((data) => data + 10);
    checkIntegrity(l2);
    expect(l2.toArray()).toEqual([11, 12, 13]);
  });

  it('Maps in reverse order', () => {
    const list = new LinkedList(1, 2, 3);
    const newList = list.map((data) => data + 10, true);
    checkIntegrity(newList);
    expect(newList.toArray()).toEqual([13, 12, 11]);
  });
});
