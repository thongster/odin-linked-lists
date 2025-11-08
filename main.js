import Node from './node.js';
import linkedList from './linkedlist.js';

const list = new linkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.prepend(1000);
list.prepend(2000);
console.dir(list, { depth: null });
console.log(`this is the size: ${list.getSize()}`);
console.log(`this is the head: ${list.getHead()}`);
console.log(`this is the tail: ${list.getTail()}`)
console.log(`this is the value at index 2: ${list.getValueAtIndex(2)}`)
list.pop()
console.dir(list, { depth: null });
console.log('im in here');
