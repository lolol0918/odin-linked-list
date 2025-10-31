export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if (!this.isEmpty()) {
            node.next = this.head;
        }
        
        this.head = node;

        this.size++;
    }

    toString() {
        if (this.isEmpty()) {
            console.log("This list is empty.");
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `(${curr.value}) -> `;
                curr = curr.next;
            }

            listValues += `(null)`;

            return listValues;
        }
    }
}