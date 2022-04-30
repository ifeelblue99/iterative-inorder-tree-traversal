
function Node(val){
  this.value = val
  this.left = null
  this.right = null
}
function BTree(){
  this.root = null
  this.append = function(val){
    if(!this.root){
      return this.root = new Node(val)
    }
    this._appendHelper(val, this.root)
  }
  this._appendHelper = function(val, current){
    if(current.value>val){
      return !current.left ? current.left = new Node(val)
        :this._appendHelper(val, current.left)
    }
    return !current.right ? current.right = new Node(val)
        :this._appendHelper(val, current.right)
  }
}
// set up
const binaryTree = new BTree()
binaryTree.append(5)    
binaryTree.append(3)   //     _ 5 _
binaryTree.append(4)   //  _3_     _7_
binaryTree.append(7)   // 1   4   6   9
binaryTree.append(9) 
binaryTree.append(6) 
binaryTree.append(1) 


function inOrderTraversal(root) {
  const stack = [];
  let curr = root;
  const visited = new Set()
  
  while (curr !== null || stack.length > 0){
    while (curr !== null){
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    visited.add(curr.value)
    curr = curr.right;
    }
  return visited
}
console.log("in order:",inOrderTraversal(binaryTree.root))


