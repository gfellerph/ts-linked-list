import LinkedListNode from './LinkedListNode';

type TTestFunction<NodeData> = (
  data: NodeData,
  index: number,
  list: LinkedList<NodeData>,
) => boolean;
type TMapFunction<NodeData> = (
  data: any,
  index: number,
  list: LinkedList<NodeData>,
) => any;

/**
 * A doubly linked list
 * ```javascript
 * const list = new LinkedList(1, 2);
 * list.append(3);
 * list.prepend(0);
 * list.forEach(data => console.log(data));
 * // 0 1 2 3
 * list.head.remove();
 * console.log(list.toArray());
 * // [1, 2, 3]
 * ```
 */
export default class LinkedList<NodeData = any> {

  /**
   * Convert an array to a new linked list
   * ```javascript
   * const list = LinkedList.from([1, 2, 3]);
   * ```
   * @param iterable Any iterable datatype like an Array or a Map
   */
  public static from<T>(iterable: Iterable<T>): LinkedList<T> {
    return new LinkedList(...iterable);
  }

  /** The head of the list, the first node */
  public head: LinkedListNode<NodeData> | null;

  /** The tail of the list, the last node */
  public tail: LinkedListNode<NodeData> | null;

  /** Internal size reference */
  private size: number;

  constructor(...args: NodeData[]) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    for (const data of args) { this.append(data); }
  }

  /**
   * The iterator implementation
   */
  public *[Symbol.iterator](): IterableIterator<NodeData> {
    let element = this.head;

    while (element !== null) {
      yield element.data;
      element = element.next;
    }
  }

  /**
   * The length of the list
   * @returns The length of the list
   */
  public get length(): number {
    return this.size;
  }

  /**
   * Get the node data at a specified index, zero based
   * @param index to retrieve data at
   * @returns Data or undefined
   */
  public get(index: number): NodeData | undefined {
    const node = this.getNode(index);
    return node !== undefined ? node.data : undefined;
  }

  /**
   * Get the node at index, zero based
   * @param index to retrieve the node at
   * @returns The node or undefined
   */
  public getNode(index: number): LinkedListNode<NodeData> | undefined {
    if (this.head === null || index < 0 || index >= this.length) { return undefined; }
    const asc = index < this.length / 2;
    const stopAt = asc ? index : this.length - index - 1;
    const nextNode = asc ? 'next' : 'prev';
    let currentNode = asc ? this.head : this.tail;
    for (let currentIndex = 0; currentIndex < stopAt; currentIndex++) {
      currentNode = currentNode![nextNode];
    }
    return currentNode!;
  }

  /**
   * Return the first node and its index in the list that
   * satisfies the testing function
   * @param f A function to be applied to each nodes data
   * @returns A new object containing the node and the index or undefined
   */
  public findNodeIndex(f: TTestFunction<NodeData>): ({
    node: LinkedListNode<NodeData>,
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
   * @returns The matching node or undefined
   */
  public findNode(f: TTestFunction<NodeData>): LinkedListNode<NodeData> | undefined {
    const nodeIndex = this.findNodeIndex(f);
    return nodeIndex !== undefined ? nodeIndex.node : undefined;
  }

  /**
   * Returns the value of the first element in the list that
   * satisfies the provided testing function. Otherwise undefined is returned.
   * @param f Function to test data against
   * @returns The matching index or undefined
   */
  public find(f: TTestFunction<NodeData>): NodeData | undefined {
    const nodeIndex = this.findNodeIndex(f);
    return nodeIndex !== undefined ? nodeIndex.node.data : undefined;
  }

  /**
   * Returns the index of the first node in the list that
   * satisfies the provided testing function. Ohterwise -1 is returned.
   * @param f Function to test data against
   * @returns The matching index or -1
   */
  public findIndex(f: TTestFunction<NodeData>): number {
    const nodeIndex = this.findNodeIndex(f);
    return nodeIndex !== undefined ? nodeIndex.index : -1;
  }

  /**
   * Append a node to the end of the list
   * @param data Data to be stored in the node, takes any number of arguments
   * @returns The list which was appended to
   */
  public append(...args: NodeData[]): LinkedList<NodeData> {
    for (const data of args) {
      const node = new LinkedListNode(data, this.tail, null, this);
      if (this.head === null) { this.head = node; }
      if (this.tail !== null) { this.tail.next = node; }
      this.tail = node;
      this.size += 1;
    }
    return this;
  }

  /**
   * Synonym for append
   * @param data Data to be stored, takes any number of arguments
   * @returns The list which was appended to
   */
  public push(...args: NodeData[]): number {
    this.append(...args);
    return this.length;
  }

  /**
   * Prepend any number of data arguments to the list. The
   * argument list is prepended in reverse order to make it more logical:
   * ```javascript
   * const list = new LinkedList(3, 4);
   * list.prepend(0, 1, 2).toArray(); // => [0, 1, 2, 3, 4]
   * ```
   * @param data Data to be stored in the node, accepts any number of arguments
   * @returns The list which was prepended to
   */
  public prepend(...args: NodeData[]): LinkedList<NodeData> {
    const reverseArgs = Array.from(args).reverse();
    for (const data of reverseArgs) {
      const node = new LinkedListNode(data, null, this.head, this);
      if (this.tail === null) { this.tail = node; }
      if (this.head !== null) { this.head.prev = node; }
      this.head = node;
      this.size += 1;
    }
    return this;
  }

  /**
   * Insert a new node at a given index position. If index is
   * out of bounds, the node is appended, if index is negative
   * or 0, it will be prepended.
   * @param index The index to insert the new node at
   * @param data Data to be stored on the new node
   * @returns The list which was inserted to
   */
  public insertAt(index: number, data: NodeData): LinkedList<NodeData> {
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
   * @returns The removed node
   */
  public removeNode(node: LinkedListNode<NodeData>): LinkedListNode<NodeData> {
    if (node.list !== this) {
      throw new ReferenceError('Node does not belong to this list');
    }

    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    this.size -= 1;
    node.next = null;
    node.prev = null;
    node.list = null;
    return node;
  }

  /**
   * Remove the node at the specified index
   * @param index Index at which to remove
   * @returns The removed node or undefined
   */
  public removeAt(index: number): LinkedListNode<NodeData> | undefined {
    const node = this.getNode(index);
    return node !== undefined ? this.removeNode(node) : undefined;
  }

  /**
   * Insert a new node before the reference node
   * @param referenceNode The node reference
   * @param data Data to save in the node
   * @returns The list which was inserted to
   */
  public insertBefore(
    referenceNode: LinkedListNode<NodeData>,
    data: NodeData,
  ): LinkedList<NodeData> {
    const node = new LinkedListNode(data, referenceNode.prev, referenceNode, this);
    if (referenceNode.prev === null) { this.head = node; }
    if (referenceNode.prev !== null) { referenceNode.prev.next = node; }
    referenceNode.prev = node;
    this.size += 1;
    return this;
  }

  /**
   * Insert a new node after this one
   * @param referenceNode The reference node
   * @param data Data to be saved in the node
   * @returns This list
   */
  public insertAfter(
    referenceNode: LinkedListNode<NodeData>,
    data: NodeData,
  ): LinkedList<NodeData> {
    const node = new LinkedListNode(data, referenceNode, referenceNode.next, this);
    if (referenceNode.next === null) { this.tail = node; }
    if (referenceNode.next !== null) { referenceNode.next.prev = node; }
    referenceNode.next = node;
    this.size += 1;
    return this;
  }

  /**
   * Remove the first node from the list
   * @returns The data of the removed node or undefined if the list was empty
   */
  public shift(): NodeData | undefined {
    return this.removeFromAnyEnd(this.head);
  }

  /**
   * Remove the last node from the list
   * @returns The data of the removed node or undefined if the list was empty
   */
  public pop(): NodeData | undefined {
    return this.removeFromAnyEnd(this.tail);
  }

  /**
   * Concatenate the current list with another
   * @param list The list to be linked
   * @returns This list
   */
  public concat(list: LinkedList<NodeData>): LinkedList<NodeData> {
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
   * from start to end (end not included).
   * The original list will not be modified.
   * @param start Start index
   * @param end End index, optional
   * @returns The newly sliced list
   */
  public slice(start: number, end?: number): LinkedList<NodeData | {}> {
    const list = new LinkedList();
    let finish = end;

    if (this.head === null || this.tail === null) { return list; }
    if (finish === undefined || finish < start) { finish = this.length; }

    let head: LinkedListNode<NodeData> | null | undefined = this.getNode(start);
    for (let i = 0; i < finish - start && head !== null && head !== undefined; i++) {
      list.append(head.data);
      head = head.next;
    }
    return list;
  }

  /**
   * The forEach() method executes a provided function once for each list node.
   * @param f Function to execute for each element, taking three arguments.
   */
  public forEach(f: TMapFunction<NodeData>): void {
    let currentIndex = 0;
    for (const data of this) {
      f(data, currentIndex, this);
      currentIndex += 1;
    }
  }

  /**
   * Map over every node in the list and apply a function to each node
   * @param f A function to be applied to every node in the list
   * @returns A new LinkedList
   */
  public map(f: TMapFunction<NodeData>): LinkedList<NodeData | {}> {
    const list = new LinkedList();
    this.forEach((data: NodeData, index: number) => list.append(f(data, index, this)));
    return list;
  }

  /**
   * Filter the linked list
   * @param f A filter function
   * @returns A new linked list
   */
  public filter(f: TTestFunction<NodeData>): LinkedList<NodeData | {}> {
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
   * @returns The final state of the accumulator
   */
  public reduce<T>(
    f: (
      accumulator: T | NodeData,
      currentNode: NodeData,
      index: number,
      list: LinkedList<NodeData>,
    ) => T,
    start?: T,
  ): NodeData | T | undefined {
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
   * @returns An array containing all the data from the LinkedList
   */
  public toArray(): NodeData[] {
    return [...this];
  }
  /** Private helper function to reduce duplication of pop() and shift() methods */
  private removeFromAnyEnd(node: LinkedListNode<NodeData> | null) {
    return node !== null ? this.removeNode(node).data : undefined;
  }
}
