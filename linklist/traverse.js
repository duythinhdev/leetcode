class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    // traverseByFor() {
    //     for (let current = this.head; current !== null; current = current.next) {
    //         console.log(current.value);
    //     }
    // }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.insertAtHead(5);
list.traverse();