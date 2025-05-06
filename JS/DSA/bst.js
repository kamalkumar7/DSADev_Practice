class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    search(data) {
      return this._searchNode(this.root, data);
    }
  
    _searchNode(node, data) {
      if (node === null) {
        return false;
      }
  
      if (data < node.data) {
        return this._searchNode(node.left, data);
      } else if (data > node.data) {
        return this._searchNode(node.right, data);
      } else {
        return true; // Data found
      }
    }
  
    inOrderTraversal(callback) {
      this._inOrder(this.root, callback);
    }
  
    _inOrder(node, callback) {
      if (node !== null) {
        this._inOrder(node.left, callback);
        callback(node.data); // Process the node's data
        this._inOrder(node.right, callback);
      }
    }
  
    preOrderTraversal(callback) {
      this._preOrder(this.root, callback);
    }
  
    _preOrder(node, callback) {
      if (node !== null) {
        callback(node.data); // Process the node's data
        this._preOrder(node.left, callback);
        this._preOrder(node.right, callback);
      }
    }
  
    postOrderTraversal(callback) {
      this._postOrder(this.root, callback);
    }
  
    _postOrder(node, callback) {
      if (node !== null) {
        this._postOrder(node.left, callback);
        this._postOrder(node.right, callback);
        callback(node.data); // Process the node's data
      }
    }
  
    min() {
      if (!this.root) {
        return null;
      }
      let current = this.root;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
    }
  
    max() {
      if (!this.root) {
        return null;
      }
      let current = this.root;
      while (current.right !== null) {
        current = current.right;
      }
      return current.data;
    }
  
    // (Deletion is a bit more complex and often covered in more advanced explanations)
  }
  
  // Example Usage:
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);
  
  console.log("Search for 7:", bst.search(7));   // Output: true
  console.log("Search for 20:", bst.search(20));  // Output: false
  
  console.log("In-order traversal (sorted):");
  bst.inOrderTraversal((data) => console.log(data)); // Output: 3, 5, 7, 10, 12, 15, 18
  
  console.log("Pre-order traversal:");
  bst.preOrderTraversal((data) => console.log(data)); // Output: 10, 5, 3, 7, 15, 12, 18
  
  console.log("Post-order traversal:");
  bst.postOrderTraversal((data) => console.log(data)); // Output: 3, 7, 5, 12, 18, 15, 10
  
  console.log("Minimum value:", bst.min()); // Output: 3
  console.log("Maximum value:", bst.max()); // Output: 18