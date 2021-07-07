import { defaultEquals } from "../util";

export default class LinkedList {
  private count: number
  private head: undefined | Node
  constructor(callback = defaultEquals) {
    this.count = 0
    this.head = undefined // 用于记录第一个传入的元素
  }

  // 添加元素
  push(element: any) {
    const node = new Node(element)
    let current: Node
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      // 此时的 current 在经过while语句的赋值后，已经是链表除当前添加的元素以外的最后一个元素，其next属性为 undefined
      // 由于当前添加了元素，所以此时的current为链表的倒数第二个元素，需要交当前添加的元素赋给其next属性
      current.next = node
    }
    this.count++
  }
}

class Node {
  public element: any
  public next: any

  constructor(element: any) {
    this.element = element
    this.next = undefined
  }
}