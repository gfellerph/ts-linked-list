import LinkedList from '../src/LinkedList';

describe('LinkedList.getNode', () => {
  it('Gets correct node at index', () => {
    const list = new LinkedList(1, 2, 3);
    const node = list.getNode(1);
    expect(node).toBe(list.head.next);
    expect(node.data).toBe(2);
  });

  it('Returns undefined if there is no result', () => {
    const list = new LinkedList(1, 2, 3);
    const node1 = list.getNode(-1);
    const node2 = list.getNode(3);
    expect(node1).toBe(undefined);
    expect(node2).toBe(undefined);
  });
});
