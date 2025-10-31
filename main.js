import { LinkedList } from "./linkedlist.js";

const list =  new LinkedList();


list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(0);

list.toString();
console.log(list.tail());
console.log(list.at(2));