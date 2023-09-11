/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null

    let dummy = new ListNode(0, head)

    let cur = dummy

    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const v = cur.next.val
            while (cur.next && cur.next.val === v) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}