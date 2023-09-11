var reverseBetween = function (head, left, right) {
    let next = head
    let cur = head
    let prev = null

    for (let i = 1; i < left; i++) {
        prev = cur
        cur = cur.next
    }
    let cur2 = cur
    let prev2 = prev

    for (let i = left; i <= right; i++) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    if (prev2 !== null) { //  m > 1
        prev2.next = prev
    } else {
        head = prev
    }
    cur2.next = cur

    return head
}