class TreeTraversal {
  constructor(tree) {
    this.tree = tree;
  }

  traverse() {
    throw new Error('Traversal method not implemented.');
  }
}

class PreorderTraversal extends TreeTraversal {
  traverse() {
    const result = [];
    this.preorder(1, result);
    return result;
  }

  preorder(node, result) {
    result.push(node);

    for (const child of this.tree[node]) {
      this.preorder(child, result);
    }
  }
}

class PostorderTraversal extends TreeTraversal {
  traverse() {
    const result = [];
    this.postorder(1, result);
    return result;
  }

  postorder(node, result) {
    for (const child of this.tree[node]) {
      this.postorder(child, result);
    }

    result.push(node);
  }
}

class InorderTraversal extends TreeTraversal {
  traverse() {
    const result = [];
    this.inorder(1, result);
    return result;
  }

  inorder(node, result) {
    if (this.tree[node].length >= 1) {
      this.inorder(this.tree[node][0], result);
    }

    result.push(node);

    if (this.tree[node].length === 2) {
      this.inorder(this.tree[node][1], result);
    }
  }
}

class TraversalFactory {
  static createTraversal(traversalType, tree) {
    switch (traversalType) {
      case 'preorder':
        return new PreorderTraversal(tree);
      case 'postorder':
        return new PostorderTraversal(tree);
      case 'inorder':
        return new InorderTraversal(tree);
      default:
        throw new Error('Invalid traversal type.');
    }
  }
}

// Example tree
const treeNode = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: [6, 7],
  6: [],
  7: [8],
  8: [],
};

// Test the different traversal orders
const preorderTraversal = TraversalFactory.createTraversal('preorder', treeNode);
const preorderResult = preorderTraversal.traverse();
console.log('Pre-order Output:', preorderResult);

const postorderTraversal = TraversalFactory.createTraversal('postorder', treeNode);
const postorderResult = postorderTraversal.traverse();
console.log('Post-order Output:', postorderResult);

const inorderTraversal = TraversalFactory.createTraversal('inorder', treeNode);
const inorderResult = inorderTraversal.traverse();
console.log('In-order Output:', inorderResult);
