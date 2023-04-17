const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data)

    function addNode (someNode, value) {
      if(!someNode) return new Node(value)

      if(someNode.data == value) return someNode

      if(value > someNode.data) someNode.right = addNode(someNode.right, value)

      else someNode.left = addNode(someNode.left, value)

      return someNode
    }
  }

  has(data) {
    return search(this.rootNode, data)
    function search(someNode, value) {
      if(!someNode) return false
      if(someNode.data == value) return true
      return value > someNode.data ? search(someNode.right, value) : search(someNode.left, value)
    }
  }

  find(data) {
    return search(this.rootNode, data)
    function search(someNode, value) {
      if(!someNode) return null
      if(someNode.data == value) return someNode
      return value > someNode.data ? search(someNode.right, value) : search(someNode.left, value)
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(someNode, value) {
      if(!someNode) return
      if(someNode.data < value) {
        someNode.right = removeNode(someNode.right, value)
        return someNode
      }
      else if(someNode.data > value) {
        someNode.left = removeNode(someNode.left, value)
        return someNode
      }
      else {
        if(!someNode.left && !someNode.right) {
          return null
        }
        if(!someNode.left) {
          someNode = someNode.right
          return someNode
        }
        if(!someNode.right) {
          someNode = someNode.left
          return someNode
        }

        let maxValueFromLeftNode = someNode.left
        while(maxValueFromLeftNode.right) {
          maxValueFromLeftNode = maxValueFromLeftNode.right
        }
        someNode.data = maxValueFromLeftNode.data
        someNode.left = removeNode(someNode.left, maxValueFromLeftNode.data)
        return someNode
      }
    }
  }

  min() {
    if(!this.rootNode) return null

    let someNode = this.rootNode
    while(someNode.left) {
      someNode = someNode.left
    }
    return someNode.data
  }

  max() {
    if(!this.rootNode) return null

    let someNode = this.rootNode
    while(someNode.right) {
      someNode = someNode.right
    }
    return someNode.data
  }
}

module.exports = {
  BinarySearchTree
};
