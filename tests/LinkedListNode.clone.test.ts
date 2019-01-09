import LinkedList from '../src/LinkedList';

describe('LinkedList.clone', () => {
  it('Clones a node', () => {
    const list = new LinkedList(1, 2, 3);
    const clone = list.head.clone();
    expect(list.head).not.toBe(clone);
    expect(clone.data).toBe(1);
  });
});
