import LinkedList from '../src/LinkedList';
import LinkedListNode from '../src/LinkedListNode';

export default function(list: LinkedList) {
  expect(list).toBeDefined();
  expect(list).toBeInstanceOf(LinkedList);

  if (list.length > 0) {
    expect(list.head).toBeDefined();
    expect(list.head).toBeInstanceOf(LinkedListNode);
    expect(list.tail).toBeDefined();
    expect(list.tail).toBeInstanceOf(LinkedListNode);
    expect(list.head.prev).toBe(null);
    expect(list.tail.next).toBe(null);

    if (list.length > 1) {
      expect(list.head.next).not.toBe(null);
      expect(list.tail.prev).not.toBe(null);
    } else {
      expect(list.head).toBe(list.tail);
      expect(list.head.next).toBe(null);
      expect(list.tail.prev).toBe(null);
    }

    // Check length
    const count = list.reduce((i) => i + 1, 0);
    const countReverse = list.reduce((i) => i + 1, 0, true);
    expect(count).toBe(list.length);
    expect(countReverse).toBe(list.length);
  } else {
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  }
}
