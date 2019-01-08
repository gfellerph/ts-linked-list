import LinkedList from './LinkedList';

export default class LinkedListNode {
  constructor(
    public data: any,
    public prev: LinkedListNode | null,
    public next: LinkedListNode | null,
    public list: LinkedList,
  ) {}

  /**
   * Insert a new node before this one
   * @param {any} data Data to save in the node
   * @returns {LinkedList}
   */
  public insertBefore(data: any) {
    const node = new LinkedListNode(data, this.prev, this, this.list);
    if (this.prev === null) { this.list.head = node; }
    if (this.prev !== null) { this.prev.next = node; }
    this.prev = node;
    this.list.size += 1;
    return this.list;
  }

  /**
   * Insert a new node after this one
   * @param {any} data Data to be saved in the node
   */
  public insertAfter(data: any) {
    const node = new LinkedListNode(data, this, this.next, this.list);
    if (this.next === null) { this.list.tail = node; }
    if (this.next !== null) { this.next.prev = node; }
    this.next = node;
    this.list.size += 1;
    return this.list;
  }
}
