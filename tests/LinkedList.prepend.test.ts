import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.prepend', () => {
  it('Prepends a node to a list of length 1', () => {
    const l = new LinkedList(2);
    l.prepend(1);
    checkIntegrity(l);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(2);
  });

  it('Prepends to an empty list', () => {
    const list = new LinkedList();
    list.prepend(1);
    expect(list.toArray()).toEqual([1]);
  });

  it('Prepends any number of arguments', () => {
    const list = new LinkedList(3, 4);
    const value = list.prepend(0, 1, 2);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([0, 1, 2, 3, 4]);
    expect(value).toBe(list);
  });
});
