const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  return removeK(l)

  function removeK(list) {
    if(list.value == k) {
      return removeK(list.next)
    }

    let currentNode = list
    let previosNode = null
    while(currentNode.next) {
      previosNode = currentNode
      currentNode = currentNode.next
      if(currentNode.value == k) {
        previosNode.next = currentNode.next
        return removeK(list)
      }
    }
    return list
  }
}

module.exports = {
  removeKFromList
};
