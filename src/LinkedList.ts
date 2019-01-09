import LinkedListNode from './LinkedListNode';

type TTestFunction = (data: any, index: number, list: LinkedList) => boolean;
type TMapFunction = (data: any, index: number, list: LinkedList) => any;

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

  /**
   * The iterator implementation
   */
  public *[Symbol.iterator](): IterableIterator<any> {
    let element = this.head;

    while (element !== null) {
      yield element.data;
      element = element.next;
    }
  }

  /**
   * The length of the list
   * @returns {number}
   */
  public get length(): number {
    return this.size;
  }

  /**
   * Get the node data at a specified index, zero based
   * @param index to retrieve data at
   * @returns {any} Data or undefined
   */
  public get(index: number): any | undefined {
    const node = this.getNode(index);
    return node !== undefined ? node.data : undefined;
  }

  /**
   * Get the node at index, zero based
   * @param index to retrieve the node at
   * @returns {LinkedListNode|undefined} The node or undefined
   */
  public getNode(index: number): LinkedListNode | undefined {
    if (this.head === null || index < 0) { return undefined; }
    let currentIndex = 0;
    let currentNode: LinkedListNode | null = this.head;
    for (; currentIndex < index && currentNode !== null; currentIndex += 1) {
      currentNode = currentNode.next;
    }
    return currentNode !== null ? currentNode : undefined;
  }

  public findNodeIndex(f: TTestFunction): ({
    node: LinkedListNode,
    index: number,
  }) | undefined {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (f(currentNode.data, currentIndex, this)) {
        return {
          index: currentIndex,
          node: currentNode,
        };
      }
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    return undefined;
  }

  /**
   * Returns the first node in the list that
   * satisfies the provided testing function. Otherwise undefined is returned.
   * @param f Function to test data against
   */
  public findNode(f: TTestFunction): LinkedListNode | undefined {
    const nodeIndex = this.findNodeIndex(f);
    return nodeIndex !== undefined ? nodeIndex.node : undefined;
  }

  /**
   * Returns the value of the first element in the list that
   * satisfies the provided testing function. Otherwise undefined is returned.
   * @param f Function to test data against
   */
  public find(f: TTestFunction): any | undefined {
    const nodeIndex = this.findNodeIndex(f);
    return nodeIndex !== undefined ? nodeIndex.node.data : undefined;
  }

  /**
   * Returns the index of the first node in the list that
   * satisfies the provided testing function. Ohterwise -1 is returned.
   * @param f Function to test data against
   */
  public findIndex(f: TTestFunction): number {
    const nodeIndex = this.findNodeIndex(f);
    return nodeIndex !== undefined ? nodeIndex.index : -1;
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
   * Synonym for append
   * @param data Data to be stored
   * @returns {LinkedList}
   */
  public push(data: any): LinkedList {
    return this.append(data);
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
    if (this.head === null) { return this.append(data); }
    if (index <= 0) { return this.prepend(data); }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index - 1 && currentNode.next !== null) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    currentNode.insertAfter(data);
    return this;
  }

  /**
   * Remove the specified node from the list
   * @param node The node to be removed
   * @returns {LinkedList} The list without the removed node
   */
  public removeNode(node: LinkedListNode): LinkedList {
    if (node.list !== this) {
      throw new ReferenceError('Node does not belong to this list');
    }
    if (node.prev !== null && node.next !== null) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
      if (this.head !== null) { this.head.prev = null; }
    }
    if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail !== null) { this.tail.next = null; }
    }
    this.size -= 1;
    return this;
  }

  /**
   * Remove the node at the specified index
   * @param index Index at which to remove
   * @returns {LinkedList} The list without the node
   */
  public removeAt(index: number): LinkedList {
    const node = this.getNode(index);
    return node !== undefined ? node.remove() : this;
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
    if (this.head === null) { return this; }
    if (this.head === this.tail) { this.tail = null; }
    this.head = this.head.next;
    if (this.head !== null) { this.head.prev = null; }
    this.size -= 1;
    return this;
  }

  /**
   * Remove the last node from the list
   * @returns {LinkedList}
   */
  public pop(): LinkedList {
    if (this.tail === null) { return this; }
    if (this.tail === this.head) { this.head = null; }
    this.tail = this.tail.prev;
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
   * The slice() method returns a shallow copy of a
   * portion of a list into a new list object selected
   * from begin to end (end not included).
   * The original array will not be modified.
   * @param {number} start Start index
   * @param {number} end End index, optional
   * @returns {LinkedList}
   */
  public slice(start: number, end?: number): LinkedList {
    const list = new LinkedList();
    let finish = end;

    if (this.head === null || this.tail === null) { return list; }
    if (finish === undefined || finish < start) { finish = this.length; }

    let head: LinkedListNode | null | undefined = this.getNode(start);
    for (let i = 0; i < finish - start && head !== null && head !== undefined; i++) {
      list.append(head.data);
      head = head.next;
    }
    return list;
  }

  /**
   * The forEach() method executes a provided function once for each list node.
   * @param {TMapFunction} f Function to execute for each element, taking three arguments.
   */
  public forEach(f: TMapFunction): void {
    let currentIndex = 0;
    for (const data of this) {
      f(data, currentIndex, this);
      currentIndex += 1;
    }
  }

  /**
   * Map over every node in the list and apply a function to each node
   * @param {TMapFunction} f A function to be applied to every node in the list
   * @returns {LinkedList} A new LinkedList
   */
  public map(f: TMapFunction): LinkedList {
    const list = new LinkedList();
    this.forEach((data, index) => list.append(f(data, index, this)));
    return list;
  }

  /**
   * Filter the linked list
   * @param {TTestFunction} f A filter function
   * @returns {LinkedList} A new linked list
   */
  public filter(f: TTestFunction): LinkedList {
    const list = new LinkedList();
    this.forEach((data, index) => {
      if (f(data, index, this)) { list.append(data); }
    });
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
}
