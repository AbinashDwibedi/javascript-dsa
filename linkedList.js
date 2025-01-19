class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  remove(value) {
    if (!this.head) {
      console.log("List is empty");
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    
    let current = this.head;
    while(current.next && current.next.value !== value){
        current = current.next;
    }
    current.next = current.next.next;
    this.size--;
  }
  search(value){
    if(!this.head) {
        console.log("List is empty!");
        return;
    }
    let current = this.head;
    while(current){
        if(current.value === value){
            return true
        }
        current = current.next;
    }
    return false
  }

  printValues(){
    if(!this.head){
        console.log("List is empty!");
        return ;
    }
    let current = this.head;
    let tempArr = [];
    while(current){
        tempArr.push(current.value);
        current = current.next;
    }
    console.log(tempArr.join(" -> "));
  }
}

const linkedList = new LinkedList();
linkedList.append(234);
linkedList.printValues();
linkedList.append(2345);
linkedList.printValues();
linkedList.prepend(2343433);
linkedList.printValues();
linkedList.remove(234)
linkedList.printValues();
linkedList.prepend("Hello");
linkedList.printValues();
console.log(linkedList.search("Hello"))
console.log(linkedList.search("he"))
