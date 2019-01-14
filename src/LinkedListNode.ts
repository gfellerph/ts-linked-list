import LinkedList from './LinkedList';

export default class LinkedListNode<NodeData = any> {
  constructor(
    public data: NodeData,
    public prev: LinkedListNode<NodeData> | null,
    public next: LinkedListNode<NodeData> | null,
    public list: LinkedList<NodeData> | null,
  ) {}

  /**
   * Alias to .data
   */
  public get value() {
    return this.data;
  }

  /**
   * Insert a new node before this one
   * @param data Data to save in the node
   * @returns The list the data was inserted to
   */
  public insertBefore(data: any): LinkedList<NodeData> {
    return this.list !== null
      ? this.list.insertBefore(this, data)
      : new LinkedList(data, this.data);
  }

  /**
   * Insert a new node after this one
   * @param data Data to be saved in the node
   * @returns The list the data was inserted to
   */
  public insertAfter(data: any): LinkedList<NodeData> {
    return this.list !== null
      ?  this.list.insertAfter(this, data)
      : new LinkedList(this.data, data);
  }

  /**
   * Remove this node
   * @returns {LinkedList} the list without this node
   */
  public remove(): LinkedListNode<NodeData> {
    if (this.list === null) {
      throw new ReferenceError('Node does not belong to any list');
    }
    return this.list.removeNode(this);
  }
}
