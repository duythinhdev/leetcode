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
    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) { // Nếu danh sách rỗng
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) { // Duyệt đến node cuối cùng
            temp = temp.next;
        }
        temp.next = newNode; // Gán node cuối trỏ đến node mới
    }
    insertAtPosition(data, index) {
        const newNode = new Node(data);

        if (index === 0) { // Thêm vào đầu
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let temp = this.head;
        for (let i = 0; i < index - 1 && temp !== null; i++) {
            temp = temp.next;
        }

        if (!temp) {
            console.log("Vị trí vượt quá danh sách!");
            return;
        }

        newNode.next = temp.next;
        temp.next = newNode;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.insertAtHead(5);
list.insertAtTail(3);
list.insertAtPosition(2, 5);
list.traverse();