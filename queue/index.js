// Queue
// a queue is a data structure. You can only remove the first added element in a queue
// This is a principle known as First in First Out(FIFO)
// It has a limitation just like Stack, only one item can be accessed at a time
// Queue Skeleton
function Queue(array) {
  this.array = [];
  if (array) this.array;
}
Queue.prototype.getBuffer = function () { return this.array.slice() };

Queue.prototype.isEmpty = function () { return this.array.length === 0 };

// Instance of the Queue class
let queue1 = new Queue();
console.log(queue1);

// Peek
// The peek function looks at the first item without popping out from the queue
// Implementation
Queue.prototype.peek = function () { return this.array[0] };

// Insertion/Enqueue
// Insertion for a queue is known as enqueue
Queue.prototype.enqueue = function (value) { return this.array.push(value) };

// Deletion/Deque
// deletion for a queue is known as dequeue
// Implementation
Queue.prototype.dequeue = function () { return this.array.shift() };

// Examples
let queue2 = new Queue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log(queue2);

queue2.dequeue();
console.log(queue2);
