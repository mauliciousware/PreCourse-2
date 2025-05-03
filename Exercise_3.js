class Node {
    constructor(d) {
        this.data = d
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }

    printMiddle() {
        
        // Time Complexity : O(N)
        // Space Complexity : O(1)
       	//Implement using Fast and slow pointers
        if (!this.head) {
            console.log("Empty Linked List")
            return
        }
        //Start Fast and Slow in the same spot
        //According to the fast and Slow algorihtm slow will always we have the middle position than fast 
        //as fast as travelling in twice the speed as slow
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log("Middle element:",slow.data)
    }

    push(new_data) {
        let new_node = new Node(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }

    printList() {
        let tnode = this.head;
        while (tnode != null) {
            console.log(tnode.data + "->");
            tnode = tnode.next;
        }
        console.log("NULL");
    }
}



let llist = new LinkedList();
for (let i = 15; i > 0; --i) {
    llist.push(i);
    llist.printList();
    llist.printMiddle();
}
