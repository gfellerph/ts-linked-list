import LinkedList from '../src/LinkedList';

describe('LinkedListNode.value', () => {
  it('Returns the data on the value property', () => {
    const list = new LinkedList(1);
    expect(list.head.value).toBe(1);
    expect(list.head.value).toBe(list.head.data);
  });
});
