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

    // O(n)
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;

            while(prev.next !== null) {
                prev = prev.next;
            }

            prev.next  = node;
        }

        this.size++;
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);

        if (!this.isEmpty()) {
            node.next = this.head;
        }
        
        this.head = node;

        this.size++;
    }

    // O(n)
    at(index) {
        if(index > this.getSize()) {
            return null;
        }

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }

    head() {
        if(this.isEmpty()) {
            console.log("this list is empty.");
        } else {
            return this.head;
        }
    }

    tail() {
        if(this.isEmpty()) {
            console.log("this list is empty.");
            return;
        }

        let curr = this.head;

        while(curr.next !== null) {
            curr = curr.next;
        }

        return curr;
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