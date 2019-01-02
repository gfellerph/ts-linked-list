import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  public head: LinkedListNode;
  public tail: LinkedListNode;
  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
