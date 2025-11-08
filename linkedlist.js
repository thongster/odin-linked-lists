import Node from './node.js';

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add a new node to the end of the list
  append(value) {
    let node = new Node(value);
    let currentNode;

    // if there is no head (no items exist in the linked list)
    // the head is now the new node
    if (this.head === null) {
      this.head = node;
    } else {
      // if at least the head exists
      // the currentNode becomes the head
      currentNode = this.head;
      // while the next node exists
      // the current node becomes the next node (basically move next)
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // the next node becomes the new node
      currentNode.next = node;
    }
    // increase size of linked list
    this.size++;
  }

  // add a new node to the start of the list
  prepend(value) {
    let node = new Node(value);
    let currentNode = this.head;

    // if there is no head (no items exist in the linked list)
    // the head is now the new node
    if (this.head === null) {
      this.head = node;
    } else {
      // else other items get moved over, head becomes the new node
      node.next = currentNode;
      this.head = node;
    }

    // increase size of linked list
    this.size++;
  }

  // return the total number of nodes in the list
  getSize() {
    return this.size;
  }

  // return the first node in the list
  getHead() {
    return this.head.value;
  }

  // return the last node in the list
  getTail() {
    let currentNode = this.head
    // while node.next exists, move to next
    while (currentNode.next) {
        currentNode = currentNode.next
    }

    // once there is no next node, return value (last node)
    return currentNode.value
  }

  // return the node at a given index
  getAtIndex(index) {
    
  }

  // removes the last element from the list

  // return true list contains value, otherwise return false

  // return index of node containing value, or null if not found

  // return all nodes as a string

  // insert node containing value at given index

  // remove node at a given index
}

export default linkedList;
