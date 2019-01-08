import LinkedListNode from './LinkedListNode';

export default class LinkedList {

  /**
   * Convert an array to a linked list
   * @param {any[]} array An array
   * @returns {LinkedList}
   */
  public static fromArray(array: any[]): LinkedList {
    const list = new LinkedList();
    array.forEach((data) => list.append(data));
    return list;
  }

  public head: LinkedListNode | null;
  public tail: LinkedListNode | null;
  private size: number;

  constructor(...args: any) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    for (const data of args) { this.append(data); }
  }

  public get length(): number {
    return this.size;
  }

  /**
   * Append a node to the end of the list
   * @param {any} data Data to be stored in the node
   * @returns {LinkedList}
   */
  public append(data: any): LinkedList {
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
  public prepend(data: any): LinkedList {
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
  public insertAt(index: number, data: any): LinkedList {
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
   * Insert a new node before the reference node
   * @param {LinkedListNode} referenceNode The node reference
   * @param {any} data Data to save in the node
   * @returns {LinkedList}
   */
  public insertBefore(referenceNode: LinkedListNode, data: any): LinkedList {
    const node = new LinkedListNode(data, referenceNode.prev, referenceNode, this);
    if (referenceNode.prev === null) { this.head = node; }
    if (referenceNode.prev !== null) { referenceNode.prev.next = node; }
    referenceNode.prev = node;
    this.size += 1;
    return this;
  }

  /**
   * Insert a new node after this one
   * @param {LinkedListNode} referenceNode The reference node
   * @param {any} data Data to be saved in the node
   * @returns {LinkedList}
   */
  public insertAfter(referenceNode: LinkedListNode, data: any): LinkedList {
    const node = new LinkedListNode(data, referenceNode, referenceNode.next, this);
    if (referenceNode.next === null) { this.tail = node; }
    if (referenceNode.next !== null) { referenceNode.next.prev = node; }
    referenceNode.next = node;
    this.size += 1;
    return this;
  }

  /**
   * Remove the first node from the list
   * @returns {LinkedList}
   */
  public shift(): LinkedList {
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
  public pop(): LinkedList {
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
   * @returns {LinkedList}
   */
  public concat(list: LinkedList): LinkedList {
    if (list.head !== null) {
      const link = new LinkedListNode(
        list.head.data,
        this.tail,
        list.head.next,
        this,
      );
      if (this.tail !== null) { this.tail.next = link; }
    }

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
  public map(f: (data: any, index: number, list: LinkedList) => any): LinkedList {
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
  public filter(f: (data: any, index: number, list: LinkedList) => any): LinkedList {
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
  ): any {
    if (this.head === null) { return start; }
    let currentIndex = 0;
    let currentElement = start === undefined ? this.head.next : this.head;
    let result = start === undefined ? this.head.data : start;

    while (currentElement) {
      result = f(result, currentElement.data, currentIndex, this);
      currentIndex += 1;
      currentElement = currentElement.next;
    }

    return result;
  }

  /**
   * Convert the linked list to an array
   * @returns {any[]}
   */
  public toArray(): any[] {
    return [...this];
  }

  /**
   * The iterator implementation
   */
  public *[Symbol.iterator](): any {
    let element = this.head;

    while (element !== null) {
      yield element.data;
      element = element.next;
    }
  }
}
