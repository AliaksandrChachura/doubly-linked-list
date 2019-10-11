const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        let node = new Node (data);
        if (!this.head) {
            this.head = data;
            this.tail = data;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
