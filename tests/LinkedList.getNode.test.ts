import LinkedList from '../src/LinkedList';

describe('LinkedList.getNode', () => {
  it('Gets correct node at index', () => {
    const list = new LinkedList(1, 2, 3);
    const node = list.getNode(1);
    expect(node).toBe(list.head.next);
    expect(node.data).toBe(2);
  });
});
