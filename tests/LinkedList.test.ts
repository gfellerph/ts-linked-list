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

  it('Initialises with any number of arguments', () => {
    const l = new LinkedList(1, 2, 3);
    expect(l.length).toBe(3);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(3);
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
    const l2 = new LinkedList<number>();
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
});
