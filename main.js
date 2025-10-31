import { LinkedList } from "./linkedlist.js";

const list =  new LinkedList();


list.prepend(10);
list.prepend(20);
list.prepend(30);

console.log("list is empty, ", list.isEmpty());

console.log(list);