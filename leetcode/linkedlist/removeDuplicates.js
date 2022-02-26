// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.

const deleteDuplicates = (head) => {
    if(!head) return head
    var cur = head
    
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
}