// 定义链表节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 判断链表是否有环
function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    // 快指针和慢指针初始化
    let slow = head;
    let fast = head.next;

    // 开始遍历
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            // 如果快指针到达链表尾部，说明没有环
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;

        // 如果快慢指针相遇，说明有环
        if (slow === fast) {
            return true;
        }
    }

    return true; // 控制流不会到达这里，仅为了语法完整性
}