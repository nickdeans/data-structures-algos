// Given the head of a singly linked list, return true if it is a palindrome.

const isPalindrome = (head) => {
    let array = [];
    let current = head;
    while(current) {
        array.push(current.val);
        current = current.next;
    }
    let i = 0;
    let j = array.length - 1;
    while(i < j) {
        if(array[i] !== array[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};