class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.#isEmpty()) {
      console.log("Underflow");
      return;
    }
    this.items.shift();
  }
  #isEmpty() {
    return this.items.length === 0 ? true : false;
  }
  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log("...", this.items[i], "...");
    }
  }
}
const queue = new Queue();
queue.enqueue("Abinash");
queue.enqueue("Abinash");
queue.dequeue();
queue.enqueue("Abinash");
queue.enqueue("Abinash");
queue.printQueue();
