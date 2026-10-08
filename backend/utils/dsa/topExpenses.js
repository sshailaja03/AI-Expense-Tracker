/**
 * Return the N largest expenses using a bounded min-heap.
 *
 * Complexity:
 * - Time: O(n log k)
 * - Space: O(k)
 *
 * Keeping only the current top k entries avoids sorting the full dataset
 * when the caller only needs a small number of largest expenses.
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(expense) {
    this.heap.push(expense);
    this.bubbleUp(this.heap.length - 1);
  }

  replaceMin(expense) {
    this.heap[0] = expense;
    this.bubbleDown(0);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = this.parent(index);
      if (this.heap[parent].amount <= this.heap[index].amount) break;
      this.swap(parent, index);
      index = parent;
    }
  }

  bubbleDown(index) {
    while (true) {
      const left = this.left(index);
      const right = this.right(index);
      let smallest = index;

      if (left < this.heap.length && this.heap[left].amount < this.heap[smallest].amount) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right].amount < this.heap[smallest].amount) {
        smallest = right;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  peek() {
    return this.heap[0] ?? null;
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return min;
  }

  size() {
    return this.heap.length;
  }
}

function getTopNExpenses(expenses, n = 5) {
  if (n <= 0 || expenses.length === 0) return [];

  const heap = new MinHeap();
  const limit = Math.min(n, expenses.length);

  for (const expense of expenses) {
    if (heap.size() < limit) {
      heap.insert(expense);
    } else if (expense.amount > heap.peek().amount) {
      heap.replaceMin(expense);
    }
  }

  const top = [];
  while (heap.size() > 0) {
    top.push(heap.extractMin());
  }

  return top.reverse();
}

module.exports = { MinHeap, getTopNExpenses };
