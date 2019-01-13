import LinkedList from './LinkedList';

export default class LinkedListNode {
  constructor(
    public data: any,
    public prev: LinkedListNode | null,
    public next: LinkedListNode | null,
    public list: LinkedList | null,
  ) {}

  /**
   * Alias to .data
   */
  public get value() {
    return this.data;
  }

  /**
   * Insert a new node before this one
   * @param {any} data Data to save in the node
   * @returns {LinkedList}
   */
  public insertBefore(data: any): LinkedList {
    if (this.list === null) {
      throw new ReferenceError('Node does not belong to any list');
    }
    return this.list.insertBefore(this, data);
  }

  /**
   * Insert a new node after this one
   * @param {any} data Data to be saved in the node
   * @returns {LinkedList}
   */
  public insertAfter(data: any): LinkedList {
    if (this.list === null) {
      throw new ReferenceError('Node does not belong to any list');
    }
    return this.list.insertAfter(this, data);
  }

  /**
   * Remove this node
   * @returns {LinkedList} the list without this node
   */
  public remove(): LinkedListNode {
    if (this.list === null) {
      throw new ReferenceError('Node does not belong to any list');
    }
    return this.list.removeNode(this);
  }
}
