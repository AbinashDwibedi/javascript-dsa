// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   enqueue(element) {
//     this.items.push(element);
//   }
//   dequeue() {
//     if (this.#isEmpty()) {
//       console.log("Underflow");
//       return;
//     }
//     this.items.shift();
//   }
//   #isEmpty() {
//     return this.items.length === 0 ? true : false;
//   }
//   printQueue() {
//     for (let i = 0; i < this.items.length; i++) {
//       console.log("...", this.items[i], "...");
//     }
//   }
// }
// const queue = new Queue();
// queue.enqueue("Abinash");
// queue.enqueue("Abinash");
// queue.dequeue();
// queue.enqueue("Abinash");
// queue.enqueue("Abinash");
// queue.printQueue();


// Circular Queue

class CircularQueue{
  constructor(size){
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  isEmpty(){
    return this.front===-1;
  }
  isFull(){
    return (this.rear+1)%this.size === this.front;
  }
  enqueue(element){
    if(this.isFull()){
      console.log("queue is full");
      return;
    }
    if(this.front===-1){
      this.front = 0;
    }
    this.rear =( this.rear+1)%this.size;
    this.queue[this.rear] = element;
    console.log(`element ${element} is added to the queue`);
  }
  dequeue(){
    if(this.isEmpty()){
      console.log("queue is empty");
      return
    }
    let removedElement = this.queue[this.front];
    if(this.front === this.rear){
      this.front = this.rear = -1;
    }
    else{
      this.front = (this.front+1)%this.size;
    }

    console.log(`${removedElement} is removed from the queue`);
    return removedElement;
  }
  peek(){
    if(this.isEmpty()){
      console.log("queue is empty");
      return null;
    }
    return this.queue[this.front];
  }
  getSize(){
    if(this.isEmpty()){
      console.log("queue is empty");
      return null
    }
    return (this.rear -this.front + this.size)%this.size +1;
  }
  display(){
    if(this.isEmpty()){
      console.log("queue is empty");
      return null;
    }
    let i = this.front;
    let elements = [];
    while(i !== this.rear){
      elements.push(this.queue[i]);
      i = (i+1)%this.size;
    }
    elements.push(this.queue[this.rear]);
    console.log(elements.join(" -> "))
  }
}

const queue = new CircularQueue(5);
queue.enqueue(23443);
queue.enqueue(23443);
queue.enqueue(23443);
console.log(queue.getSize());
console.log(queue.peek());
queue.dequeue();
queue.dequeue();
queue.queue
queue.display();
