import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.removeNode', () => {
  it('Removes a node from the middle', () => {
    const list = new LinkedList(1, 2, 3);
    const node = list.getNode(1);
    list.removeNode(node);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it('Removes the first node', () => {
    const list = new LinkedList(1, 2, 3);
    list.removeNode(list.head);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([2, 3]);
  });

  it('Removes the last node', () => {
    const list = new LinkedList(1, 2, 3);
    list.removeNode(list.tail);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([1, 2]);
  });

  it('Removes the only node', () => {
    const list = new LinkedList(1);
    list.removeNode(list.head);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([]);
  });

  it('Removes the second last node and leaves only one', () => {
    const list = new LinkedList(1, 2);
    list.removeNode(list.head);
    checkIntegrity(list);
    expect(list.toArray()).toEqual([2]);
  });

  it('Throws a ReferenceError when the list is wrong', () => {
    const list = new LinkedList(1, 2);
    const list2 = new LinkedList(3);
    expect(() => list.removeNode(list2.head)).toThrow();
  });
});
