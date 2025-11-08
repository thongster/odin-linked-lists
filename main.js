import Node from './node.js';
import linkedList from './linkedlist.js';

const list = new linkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.prepend(1000);
list.prepend(2000);
console.log(`this is the size of the list: ${list.getSize()}`);
console.log(`this is the head of the list: ${list.getHead()}`);
console.dir(list, { depth: null });
console.log('im in here');
