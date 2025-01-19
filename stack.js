class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.#isEmpty()){
            console.log("stack underflow");
            return ;
        }
        this.items.pop();
    }
    #isEmpty(){
        return this.items.length===0? true : false;
    }
    showStack(){
        for(let i = 0;i<this.items.length;i++){
            console.log("...",this.items[i],"...");
        }
    }
}
const stack = new Stack();
// stack.push(234);
// stack.push(234);
stack.pop()
// stack.pop();
stack.showStack();