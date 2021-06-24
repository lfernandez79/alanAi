
// let tree = document.getElementById("BST");
// const rendertest = () => {
//     tree.innerHTML = "Just a quick test to make sure there is a rendering from JS to HTML into DOM, this could change as i see it developing"
// }
// rendertest();



// TreeNode class constructor will take in a value and set that as value node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const node = new Node(100);
console.log(node)

class BST {
    constructor() {
        this.root = null
        this.count = 0
    }

    size() {
        return this.count
    }

    insert(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
        }
    }
}