# 05 — Side Effects and Predictability

## 1. What is this?
A **Side Effect** is any observable change or interaction that a function performs outside its own local execution scope.

## 2. Why does it exist?
While software applications ultimate need side effects to be useful (e.g., displaying UI on screen, writing data to a database, sending HTTP requests), unmanaged side effects inside calculation logic create bug-prone code.

## 3. Categories of Side Effects
1. **Mutating Global or Outer Scope Variables**: Modifying variables declared outside the function.
2. **Mutating Input Parameters**: Modifying properties of passed object or array references.
3. **I/O Operations**: Writing output via `console.log()`, reading/writing DOM elements, file I/O, or network requests.
4. **Modifying System State**: Setting timers (`setTimeout`), writing local storage, or throwing unhandled errors.

## 4. Demonstrating Side Effect Impact
```javascript
// Global State
let userCart = [
  { name: "Laptop", price: 1000 }
];

// IMPURE: Mutates global `userCart` array directly!
function applyDiscountImpure(discountPercent) {
  for (let item of userCart) {
    item.price -= item.price * (discountPercent / 100); // Side effect: Mutates global objects!
  }
}

applyDiscountImpure(10);
// Calling applyDiscountImpure(10) again unexpectedly applies discount TWICE!
```

## 5. Architectural Pattern: Isolate Side Effects
The best architectural practice is to **separate pure calculations from side-effect handlers**:

```text
[Pure Processing Layer]                 [Side Effect Handler Layer]
Calculate totals, format strings ───►  Print to console, update DOM, write to database
(100% Predictable & Testable)          (Concentrated in explicit boundary functions)
```

## 6. Refactored Predictable Architecture
```javascript
// 1. PURE CALCULATION FUNCTION (Zero side effects)
function calculateDiscountedCart(cart, discountPercent) {
  return cart.map(item => ({
    ...item,
    price: item.price - (item.price * (discountPercent / 100))
  }));
}

// 2. EXPLICIT SIDE-EFFECT HANDLER
function updateApplicationState() {
  const updatedCart = calculateDiscountedCart(userCart, 10);
  console.log("Updated Cart:", updatedCart); // Side effect isolated here!
}
```

## 7. Common Pitfalls & Anti-Patterns
- Blending data transformations with DOM mutations or `console.log` statements inside helper utilities.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Are side effects inherently bad in JavaScript?"
  - *Answer*: No. Side effects are necessary for applications to interact with users and servers. However, side effects should be isolated to specific handler boundaries rather than scattered inside core calculation logic.

## 9. Practice Exercises & Self-Check
1. List 4 examples of side effects in web applications.
2. Explain how object spread `{ ...item }` prevents parameter mutation side effects.

## 10. Summary & Key Takeaways
- Side effects are observable changes outside a function's local scope.
- Uncontrolled side effects degrade predictability and cause hidden state bugs.
- Isolate pure calculations from side-effect handling layers.
