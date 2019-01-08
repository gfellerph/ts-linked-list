import LinkedList from '../src/LinkedList';

describe('LinkedList.ts', () => {
  it('Instantiates a correct empty List', () => {
    const l = new LinkedList();
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
    expect(l.length).toBe(0);
  });

  it('Appends a node to an empty list', () => {
    const l = new LinkedList();
    const l2 = l.append(1);
    expect(l.length).toBe(1);
    expect(l.head).toBeDefined();
    expect(l.tail).toBeDefined();
    expect(l.head.data).toBe(1);
    expect(l.head).toBe(l.tail);
    expect(l2).toBeInstanceOf(LinkedList);
  });

  it('Prepends a node to a list of length 1', () => {
    const l = new LinkedList();
    l.append(2);
    l.prepend(1);
    expect(l.length).toBe(2);
    expect(l.head).not.toBe(l.tail);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(2);
  });

  it('Initialises from an array', () => {
    const l = LinkedList.fromArray([1, 2, 3]);
    expect(l.length).toBe(3);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(3);
  });

  it('Initialises with any number of arguments', () => {
    const l = new LinkedList(1, 2, 3);
    expect(l.length).toBe(3);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(3);
  });

  it('Inserts a node at position 1', () => {
    const l = new LinkedList(1, 3);
    l.insertAt(1, 2);
    expect(l.length).toBe(3);
    expect(l.head.next.data).toBe(2);
  });

  it('Inserts a node even if the index is off limits', () => {
    const l = new LinkedList(1, 2);
    l.insertAt(100, 3);
    expect(l.length).toBe(3);
    expect(l.tail.data).toBe(3);
  });

  it('Inserts a node even if the index is negative', () => {
    const l = new LinkedList(2, 3);
    l.insertAt(-100, 1);
    expect(l.length).toBe(3);
    expect(l.head.data).toBe(1);
  });

  it('Correctly shifts', () => {
    const l = new LinkedList(1, 2, 3);
    l.shift();
    expect(l.length).toBe(2);
    expect(l.head.data).toBe(2);
  });

  it('Shifts an empty list', () => {
    const l = new LinkedList();
    l.shift();
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });

  it('Shifts the only remaining element', () => {
    const l = new LinkedList(1);
    l.shift();
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });

  it('Correctly pops', () => {
    const l = new LinkedList(1, 2, 3);
    l.pop();
    expect(l.length).toBe(2);
    expect(l.tail.data).toBe(2);
  });

  it('Correctly pops an empty list', () => {
    const l = new LinkedList();
    l.pop();
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });

  it('Correctly pops the only element from the list', () => {
    const l = new LinkedList(1);
    l.pop();
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });

  it('Converts to an array', () => {
    const l = new LinkedList(1, 2, 3);
    const a = l.toArray();
    expect(a).toEqual([1, 2, 3]);
  });

  it('Converts an empty list to an array', () => {
    const l = new LinkedList();
    const a = l.toArray();
    expect(a).toEqual([]);
  });

  it('Concats two linked lists', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = new LinkedList(4, 5, 6);
    l1.concat(l2);
    expect(l1.length).toBe(6);
    expect(l1.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Concats two empty lists', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();
    l1.concat(l2);
    expect(l1.length).toBe(0);
    expect(l1.toArray()).toEqual([]);
  });

  it('Concats one emtpy list with another', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList(1, 2, 3);
    l1.concat(l2);
    expect(l1.length).toBe(3);
    expect(l1.toArray()).toEqual([1, 2, 3]);
  });

  it('Concats a list with an empty list', () => {
    const l1 = new LinkedList(1);
    const l2 = new LinkedList();
    l1.concat(l2);
    expect(l1.length).toBe(1);
    expect(l1.head).toBe(l1.tail);
  });

  it('Keeps the concated list intact after concatenation', () => {
    const l1 = new LinkedList(1);
    const l2 = new LinkedList(2);
    l1.concat(l2);
    expect(l1).not.toBe(l2);
    expect(l2.head.prev).toBe(null);
    expect(l2.length).toBe(1);
    expect(l2.head).toBe(l2.tail);
    expect(l1.tail).toBe(l2.tail);
    expect(l1.head).not.toBe(l2.head);
  });

  it('Maps to a new list', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = l1.map((data) => data);
    expect(l1).toEqual(l2);
    expect(l1).not.toBe(l2);
  });

  it('Uses return values from the map function', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = l1.map((data) => data + 10);
    expect(l2.toArray()).toEqual([11, 12, 13]);
  });

  it('Filters a list and returns a new linked list', () => {
    const l1 = new LinkedList(1, 2, 3, 4, 5, 6);
    const l2 = l1.filter((data) => data < 4);
    expect(l2).not.toBe(l1);
    expect(l2.length).toBe(3);
    expect(l1.length).toBe(6);
  });

  it('Reduces a list to its count', () => {
    const l1 = new LinkedList(1, 2, 3);
    const l2 = new LinkedList(1);
    const count = l1.reduce((c) => c + 1, 0);
    const count2 = l2.reduce((c) => c + 1, 0);
    expect(count2).toBe(1);
    expect(count).toBe(3);
  });

  it('Calls the reducer function with the correct arguments', () => {
    const l = new LinkedList(1, 2);
    const mock = jest.fn((acc, curr, index, list) => {
      expect(acc).toBe(l.head.data);
      expect(curr).toBe(l.tail.data);
      expect(index).toBe(0);
      expect(list).toBe(l);
    });
    l.reduce(mock);
    expect(mock).toBeCalledTimes(1);
  });
});
