// Day 17 Examples
// Pattern: Indexing an array of objects by ID into a fast lookup table
function indexById(items) {
  return items.reduce((lookup, item) => {
    lookup[item.id] = item;
    return lookup;
  }, {});
}

const users = [
  { id: "u101", name: "Alice" },
  { id: "u102", name: "Bob" }
];
const userIndex = indexById(users);
console.log("Lookup u101:", userIndex["u101"]); // { id: 'u101', name: 'Alice' }
