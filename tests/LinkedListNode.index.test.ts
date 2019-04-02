import LinkedList from '../src/LinkedList';
import LinkedListNode from '../src/LinkedListNode';

describe('LinkedListNode.index', () => {
  it('Gets the correct index', () => {
    const list = new LinkedList(1, 2, 3);
    expect(list.tail.index).toBe(2);
  });

  it('Returns undefined when no list is defined on the node', () => {
    const node = new LinkedListNode(1, null, null, null);
    expect(node.index).toBe(undefined);
  });
});
