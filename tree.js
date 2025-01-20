// // Basic Tree any parent can contain's any number of nodes ;

// class TreeNode{
//     constructor(data){
//         this.data = data;
//         this.child = [];
//     }
//     addNode(child){
//         this.child.push(child);
//         console.log(":: New data added successfully ::");
//     }
//     display(level = 0){
//         console.log("".repeat(level*4),this.data);
//         this.child.forEach((child)=>{
//             child.display(++level);
//         })
//     }
// }

// const root = new TreeNode("root");
// const child1 = new TreeNode("child 1");
// const child2 = new TreeNode("child 2");
// const grandChild1 = new TreeNode("grand child 1");
// const grandChild2 = new TreeNode("grand child 2");
// child1.addNode(grandChild1);
// child2.addNode(grandChild2);
// root.addNode(child1);
// root.addNode(child2);
// root.display();


// Representation of binary tree

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    addLeft(child){
        this.left = child;
    }
    addRight(child){
        this.right = child;
    }
}

const root = new TreeNode("root");
const left = new TreeNode("left");
const right = new TreeNode("right");

const leftLeft = new TreeNode("left left");
const leftRight = new TreeNode("left right");

left.addLeft(leftLeft);
left.addRight(leftRight);

root.addLeft(left);
root.addRight(right);

console.log(root);



