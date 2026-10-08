const assert = require("node:assert/strict");
const { mergeSort } = require("./sorting");
const { searchByDateRange } = require("./searching");
const { aggregateByCategory, getTotalSpend } = require("./aggregator");
const { getTopNExpenses } = require("./topExpenses");

const expenses = [
  { description: "A", category: "Food", amount: 120, date: "2026-01-10" },
  { description: "B", category: "Travel", amount: 450, date: "2026-01-15" },
  { description: "C", category: "Food", amount: 80, date: "2026-02-05" },
  { description: "D", category: "Bills", amount: 300, date: "2026-02-20" },
  { description: "E", category: "Food", amount: 900, date: "2026-03-01" },
];

const sorted = mergeSort(expenses, "amount", "desc");
assert.deepEqual(sorted.map((e) => e.amount), [900, 450, 300, 120, 80]);

const byDate = mergeSort(expenses, "date", "asc");
const ranged = searchByDateRange(byDate, "2026-01-12", "2026-02-20");
assert.deepEqual(ranged.map((e) => e.description), ["B", "C", "D"]);

assert.deepEqual(aggregateByCategory(expenses), {
  Food: 1100,
  Travel: 450,
  Bills: 300,
});

assert.equal(getTotalSpend(expenses), 1850);

assert.deepEqual(
  getTopNExpenses(expenses, 3).map((e) => e.amount),
  [900, 450, 300]
);

assert.deepEqual(getTopNExpenses(expenses, 0), []);
assert.deepEqual(getTopNExpenses(expenses, 20).map((e) => e.amount), [900, 450, 300, 120, 80]);

console.log("DSA tests passed.");
