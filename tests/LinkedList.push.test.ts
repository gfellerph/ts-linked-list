import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.push', () => {
  it('Pushes a new node to the end of the list', () => {
    const list = new LinkedList(1, 2);
    const val = list.push(3);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('Pushes many args', () => {
    const list = new LinkedList(1, 2);
    const value = list.push(3, 4);
    expect(value).toBe(4);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });
});
