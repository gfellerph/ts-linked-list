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
  public insertBefore(data: any): LinkedList {
    return this.list.insertBefore(this, data);
  }

  /**
   * Insert a new node after this one
   * @param {any} data Data to be saved in the node
   * @returns {LinkedList}
   */
  public insertAfter(data: any): LinkedList {
    return this.list.insertAfter(this, data);
  }

  /**
   * Remove this node
   * @returns {LinkedList} the list without this node
   */
  public remove(): LinkedList {
    return this.list.removeNode(this);
  }
}
