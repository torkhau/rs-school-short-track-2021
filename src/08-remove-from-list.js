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
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  let head = list;
  let preNode = null;
  if (list) {
    do {
      if (head.value === k) {
        if (preNode) {
          preNode.next = head.next;
          head = head.next;
        } else {
          list = head.next;
          head = list;
        }
      } else {
        preNode = head;
        head = head.next;
      }
    } while (head);
  }
  return list;
}

module.exports = removeKFromList;
