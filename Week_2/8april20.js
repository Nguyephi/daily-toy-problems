/*

Merge sort
o: arr; sorted
i: arr; unsorted
c: sort are typically O(n * log(base 2)n)
e:

The idea is to take the array and continue to split them in two continuously until they are single elements. When merging then you are sorting them as you are merging them

*/

// var middleNode = function(head) {
//   let fast = head, slow = head;

//   while(fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;
//   }

//   return slow;
// };

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree

  // declare isBinary(flag) variable to true
  // have a inner function to recurse and check children
  // first check left child is not null and if left child value is less than parent value
    // if isBinary equal to false then return
    //base case check if both child are null return
    // if left is not null and less than parent recurse to the next left child
    // else if right is not null and more than parent recurse
    // if left side child is ever higher than the parent then return false
    // else if left child is null check right child

  let isBinaryFlag = true;
  let rootValue = treeRoot.value;
  function traverseTree (tree) {
    if (!isBinaryFlag) return;
    if (tree.left === null || tree.right === null) return;
    if (tree.left.value >= tree.value || tree.left.value >= rootValue) {
      isBinary = false;
      return;
    }
    if (tree.right.value <= tree.value || tree.right.value <= rootValue) {
      isBinary = false;
      return;
    }
    traverseTree(tree.left);
    traverseTree(tree.right);
  }
  let leftSide = traverseTree(treeRoot.left);
  let rightSide = traverseTree(treeRoot.right);
  return isBinaryFlag;
}


















// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

console.log('start')