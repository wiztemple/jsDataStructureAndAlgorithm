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


// Unlike an array, items in a queue cannot be accessed via index
// to access the nth last added node, you need to call dequeue n times
// A buffer is needed to prevent modification to the original
const queueAccessNthTopNode = (queue, n) => {
  let bufferArray = queue.getBuffer();
  if (n <= 0) throw 'error';

  let bufferQueue = new Queue(bufferArray);
  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
} 

// Search
// You might need to search a queue to check if an element exist within a queue.
// Again, this involves creating a buffer queue to prevent modification to the original
const queueSearch = (queue, element) => {
  let bufferArray = queue.getBuffer();

  let bufferQueue = new Queue(bufferArray);
  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() == element) {
      return true;
    }
  }
  return false;
}
// Examples
let queue2 = new Queue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log(queue2);

queue2.dequeue();
console.log(queue2);
