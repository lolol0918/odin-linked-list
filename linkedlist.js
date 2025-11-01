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

    contains(value) {
        if (this.isEmpty()) {
            console.log("this list is empty.");
            return false;
        }

        let curr = this.head;

        while (curr.next !== null) {

            if (value === curr.value) {
                return true;
            }
            curr = curr.next;
        }

        return false;
    }

    find(value) {
        if (this.isEmpty()) {
            console.log("Cannot find — list is empty.");
            return null;
        }

        let curr = this.head;
        let index = 0;

        while (curr !== null) {
            if (curr.value === value) {
                return index;
            }
            curr = curr.next;
            index++;
        }

        return null;
    }

    // O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;

            while (prev.next !== null) {
                prev = prev.next;
            }

            prev.next = node;
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
        if (index > this.getSize()) {
            return null;
        }

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }

    pop() {

        if (this.isEmpty()) {
            console.log("Cannot pop — list is empty.");
            return null;
        }

        if (this.head.next === null) {
            const value = this.head.value;
            this.head = null;
            this.size--;
            return value;
        }

        let prev = this.head;
        let curr = this.head.next;

        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
        this.size--;
        return curr.value;
    }

    head() {
        if (this.isEmpty()) {
            console.log("this list is empty.");
        } else {
            return this.head;
        }
    }

    tail() {
        if (this.isEmpty()) {
            console.log("this list is empty.");
            return;
        }

        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        return curr;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.getSize()) {
            console.log("Invalid index.");
            return;
        }

        // Case 1: inserting at the head (index 0)
        if (index === 0) {
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        let prev = this.head;
        let curr = this.head.next;

        for (let i = 0; i < index - 1; i++) {
            prev = curr;
            curr = curr.next;
        }

        const node = new Node(value);

        prev.next = node;
        node.next = curr;

        return;
    }

    removeAt(index) {
        if (this.isEmpty()) {
            console.log("this list is empty.");
            return;
        }

        if (index < 0 || index >= this.getSize()) {
            console.log("Invalid index.");
            return;
        }

        if (index > this.getSize() - 1) {
            console.log("The index is too big.");
            return;
        }

        let removedValue;

        if (index === 0) {
            removedValue = this.head.value;
            this.head = this.head.next;
            this.size--;

            return removedValue;
        }

        let prev = this.head;
        let curr = this.head.next;

        for (let i = 0; i < index - 1; i++) {
            prev = curr;
            curr = curr.next;
        }

        removedValue = curr.value;
        prev.next = curr.next;
        this.size--;

        return removedValue;
    }

    toString() {
        if (this.isEmpty()) {
            console.log("This list is empty.");
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `(${curr.value}) -> `;
                curr = curr.next;
            }

            listValues += `(null)`;

            return listValues;
        }
    }
}