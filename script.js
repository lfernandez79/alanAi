
let tree = document.getElementById("BST");
const rendertest = () => {
    tree.innerHTML = "Just a quick test to make sure there is a rendering from JS to HTML into DOM, this could change as i see it developing"
}
rendertest();



// TreeNode class constructor will take in a value and set that as value node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class RootSearchTree {
    constructor() {
        this.root = null;
    }
}

insert(value) {
    let newNode = new Node(value);
    if(!this.root) {
        this.root = newNode;
        return this;
    }
}

