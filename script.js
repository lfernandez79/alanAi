
let tree = document.getElementById("BST");

const rendertest = () => {
    tree.innerHTML = "Just a quick test to make sure there is a rendering from JS to HTML into DOM, this could change as i see it developing"
}
rendertest();


// BST

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
