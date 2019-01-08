import LinkedListNode from './LinkedListNode';

export default class LinkedList {

  /**
   * Convert an array to a linked list
   * @param {any[]} array An array
   * @returns {LinkedList}
   */
  public static fromArray(array: any[]) {
    const list = new LinkedList();
    array.forEach((data) => list.append(data));
    return list;
  }

  public head: LinkedListNode | null;
  public tail: LinkedListNode | null;
  public size: number;

  constructor(...args: any) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    for (const data of args) { this.append(data); }
  }

  /**
   * Append a node to the end of the list
   * @param {any} data Data to be stored in the node
   * @returns {LinkedList}
   */
  public append(data: any) {
    const node = new LinkedListNode(data, this.tail, null, this);
    if (this.head === null) { this.head = node; }
    if (this.tail !== null) { this.tail.next = node; }
    this.tail = node;
    this.size += 1;
    return this;
  }

  /**
   * Prepend a node to the beginning of the list
   * @param {any} data Data to be stored in the node
   * @returns {LinkedList}
   */
  public prepend(data: any) {
    const node = new LinkedListNode(data, null, this.head, this);
    if (this.tail === null) { this.tail = node; }
    if (this.head !== null) { this.head.prev = node; }
    this.head = node;
    this.size += 1;
    return this;
  }

  /**
   * Insert a new node at a given index position. If index is
   * out of bounds, the node is appended, if index is negative
   * or 0, it will be prepended.
   * @param {number} index The index to insert the new node at
   * @param {any} data Data to be stored on the new node
   * @returns {LinkedList}
   */
  public insertAt(index: number, data: any) {
    if (this.size === 0) { return this.append(data); }
    if (index <= 0) { return this.prepend(data); }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index - 1 && currentNode !== null && currentNode.next !== null) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    if (currentNode !== null) { currentNode.insertAfter(data); }
    return this;
  }

  /**
   * Remove the first node from the list
   * @returns {LinkedList}
   */
  public shift() {
    if (this.size === 0) { return this; }
    if (this.head === this.tail) { this.tail = null; }
    if (this.head !== null) { this.head = this.head.next; }
    if (this.head !== null) { this.head.prev = null; }
    this.size -= 1;
    return this;
  }

  /**
   * Remove the last node from the list
   * @returns {LinkedList}
   */
  public pop() {
    if (this.size === 0) { return this; }
    if (this.tail === this.head) { this.head = null; }
    if (this.tail !== null) { this.tail = this.tail.prev; }
    if (this.tail !== null) { this.tail.next = null; }
    this.size -= 1;
    return this;
  }

  /**
   * Concatenate the current list with another
   * @param {LinkedList} list The list to be linked
   */
  public concat(list: LinkedList) {
    if (this.tail !== null) { this.tail.next = list.head; }
    if (list.head !== null) { list.head.prev = this.tail; }
    this.head = this.head || list.head;
    this.tail = list.tail || this.tail;
    this.size += list.size;
    return this;
  }

  /**
   * Map over every node in the list and apply a function to each node
   * @param {(any) => any} f A function to be applied to every node in the list
   * @returns {LinkedList} A new LinkedList
   */
  public map(f: (data: any, index: number, list: LinkedList) => any) {
    const list = new LinkedList();
    let currentIndex = 0;
    for (const data of this) {
      list.append(f(data, currentIndex, this));
      currentIndex += 1;
    }
    return list;
  }

  /**
   * Filter the linked list
   * @param {(any) => any} f A filter function
   * @returns {LinkedList} A new linked list
   */
  public filter(f: (data: any, index: number, list: LinkedList) => any) {
    const list = new LinkedList();
    let currentIndex = 0;
    for (const data of this) {
      if (f(data, currentIndex, this)) { list.append(data); }
      currentIndex += 1;
    }
    return list;
  }

  /**
   * Reduce over each node in the list
   * @param f A reducer function
   * @param start An initial value
   * @returns {any} The final state of the accumulator
   */
  public reduce(
    f: (
      accumulator: any,
      currentNode: LinkedListNode,
      index: number,
      list: LinkedList,
    ) => any,
    start?: any,
  ) {
    if (this.head === null) { return start; }
    let currentIndex = 0;
    let result = start === undefined ? this.head.data : start;
    for (const data of this) {
      if (start === undefined && data.next !== null) {
        result = f(result, data.next, currentIndex, this);
      }
      result = f(result, data, currentIndex, this);
      currentIndex += 1;
    }
    return result;
  }

  /**
   * Convert the linked list to an array
   * @returns {Array}
   */
  public toArray() {
    return [...this];
  }

  /**
   * The iterator implementation
   */
  public *[Symbol.iterator]() {
    let element = this.head;

    while (element !== null) {
      yield element.data;
      element = element.next;
    }
  }
}
