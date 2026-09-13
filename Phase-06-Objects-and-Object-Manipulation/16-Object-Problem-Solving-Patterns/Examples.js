// Day 16 Examples
// Pattern: Grouping objects by category
function groupByCategory(items) {
  return items.reduce((grouped, item) => {
    const cat = item.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
    return grouped;
  }, {});
}

const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" }
];
console.log("Grouped by category:", groupByCategory(items));
