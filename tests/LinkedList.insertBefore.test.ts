import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.insertBefore', () => {
  it('Inserts specified node before the other', () => {
    const list = new LinkedList(2, 3);
    list.insertBefore(list.head, 1);
    checkIntegrity(list);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
  });

  it('Inserts before the tail', () => {
    const list = new LinkedList(1, 3);
    list.insertBefore(list.tail, 2);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });
});
