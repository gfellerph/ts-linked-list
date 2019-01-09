import LinkedList from './LinkedList';

export default class LinkedListNode {
  constructor(
    public data: any,
    public prev: LinkedListNode | null,
    public next: LinkedListNode | null,
    public list: LinkedList,
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

  /**
   * Clone this node
   * NOTE: Data is not deeply cloned if it is not a simple data type
   * like string, integer, boolean, null or undefined
   */
  public clone(): LinkedListNode {
    return new LinkedListNode(this.data, this.prev, this.next, this.list);
  }
}
