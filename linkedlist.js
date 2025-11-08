import Node from './node.js';

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add a new node to the end of the list
  append(value) {
    let node = new Node(value)
    let currentNode

    // if there is no head (no items exist in the linked list)
    // the head is now the new node
    if (this.head === null) {
        this.head = node
    } else {
        // if at least the head exists
        // the currentNode becomes the head
        currentNode = this.head
        // while the next node exists
        // the current node becomes the next node
        while (currentNode.next) {
            currentNode = currentNode.next 
        }
        // the next node becomes the new node
        currentNode.next = node
    }
    // increase size of linked list
    this.size++
  }

  // add a new node to the start of the list

  // return the total number of nodes in the list

  // return the first node in the list

  // return the last node in the list

  // return the node at a given index

  // removes the last element from the list

  // return true list contains value, otherwise return false

  // return index of node containing value, or null if not found

  // return all nodes as a string

  // insert node containing value at given index

  // remove node at a given index
}

export default linkedList;
