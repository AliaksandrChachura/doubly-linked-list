const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node (data);
        if (this.length === 0) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index < 0 || this.length <= index ) {
            return null;
          }
    
          let current = this._head;
          let position = 0;
    
          while (position < index) {
            current = current.next;
            position++;
          }
    
          return current.data;
      }
    

    insertAt(index, data) {
        if (index < 0 || this.length < index) {
            return false;
        }
        let node = new Node (data);

        if (index === 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
        }
        else if (index === this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else {
            let current = this._head;
            let prev = null;
            let position = 0;
            while (position < index) {
                prev = current;
                current = current.next;
                position++;
            }
            prev.next = node;
            node.prev = prev;
            node.next = current;
            current.prev = node;
        }
        this.length++;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {        
        const newNode = new Node (null);
            this._head = newNode;
            this._tail = newNode;
            this.length = 0;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index ) {
            return null;
          }
      
          let current;
    
          if (index === 0) {
            current = this._head;
    
            this._head = this._head.next;
            this._head.prev = null;
          } else if(index    === this.length - 1) {
            current = this._tail;
    
            this._tail = this._tail.prev;
            this._tail.next = null;
          } else {
            current = this._head;
    
            let prev = null;
            let position = 0;
      
            while (position < index) {
              prev = current;
              current = current.next;
              position++;
            }
      
            prev.next = current.next;
            current.next.prev = prev;
          }
      
          this.length--;
          return current.data;
    }

    reverse() {
        if (this.length === 1) {
            throw new TypeError('TypeError: Cannot read property \'reverse\' of undefined');
        }
        let current = this._head;
        let prev = null;
        while( current ){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
    }

    indexOf(data) {
        let current = this._head;
        let index = 0;

        while (current) {
            if (current.data === data) {
            return index;
        }

        current = current.next;
        index++;
      }

      return -1;
    }
    }

module.exports = LinkedList;
