
let tree = document.getElementById("BST")

// TreeNode class constructor will take in a value and set that as value node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
        this.count = 0
    }

    size() {
        return this.count
    }

    insert(value) {
        this.count++

        const node = new Node(value)
        if(!this.root) {
            this.root = node
        } else {
            let current = this.root
            while(true) {
                if(value < current.value) {
                    if(!current.left) {
                        current.left = node
                        return this
                    } else {
                        current = current.left
                    }
                } else {
                    if(!current.right) {
                        current.right = node
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
}
const bst = new BST();
bst.insert(0)
bst.insert(-100)
bst.insert(100)
bst.insert(50)
bst.insert(-50)
console.log(bst)

tree.innerHTML = JSON.stringify(bst)