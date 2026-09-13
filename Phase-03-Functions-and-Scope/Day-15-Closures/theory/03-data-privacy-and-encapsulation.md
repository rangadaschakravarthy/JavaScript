# 03 — Data Privacy and Encapsulation with Closures

## 1. What is this?
**Data Privacy and Encapsulation** is an Object-Oriented and Functional programming pattern where object state is kept private and hidden from direct external modification. Closures enable private variables by restricting variable access exclusively to returned interface methods.

## 2. Why does it exist?
Direct global or public property mutation allows external code to corrupt internal object state (e.g., setting a bank balance to negative numbers or modifying a user ID). Closures enforce strict validation rules through privileged getter/setter methods.

## 3. Basic Syntax & Bank Account Encapsulation Example

```javascript
function createBankAccount(initialBalance) {
  // PRIVATE VARIABLE (Inaccessible directly from outside!)
  let balance = initialBalance > 0 ? initialBalance : 0;

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited $${amount}. New balance: $${balance}`;
      }
      return "Invalid deposit amount";
    },
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. Remaining balance: $${balance}`;
      }
      return "Insufficient funds or invalid amount";
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);

console.log(account.getBalance()); // 100
console.log(account.deposit(50));   // Deposited $50. New balance: $150
console.log(account.withdraw(30));  // Withdrew $30. Remaining balance: $120

// Direct mutation attempt fails!
console.log(account.balance); // Output: undefined! (`balance` is private!)
account.balance = 999999;     // Attaches un-used property, does NOT mutate private balance!
console.log(account.getBalance()); // Output: 120 (Private balance protected!)
```

## 4. Architectural Model: Privileged Interface Methods

```text
+-------------------------------------------------------------+
| Closure Container: createBankAccount                        |
|                                                             |
|   PRIVATE STATE: let balance = 120                          |
|   (Inaccessible via account.balance)                        |
|                                                             |
|   PUBLIC INTERFACE METHODS:                                 |
|   ├── deposit(amount)  ──► Reads & Mutates balance safely   |
|   ├── withdraw(amount) ──► Reads & Mutates balance safely   |
|   └── getBalance()     ──► Returns current balance read-only|
+-------------------------------------------------------------+
```

## 5. Common Pitfalls & Anti-Patterns
- Returning references to mutable objects or arrays stored in private state without cloning them (`return privateArray` allows caller to mutate privateArray directly via `.push()`).

## 6. Interview & Problem-Solving Perspective
- **Interview Question**: "How do closures enable private variables in JavaScript?"
  - *Answer*: Variables declared inside an outer function body are inaccessible to external scope. By returning an object containing methods that close over those variables, outer code can only read or modify state through controlled methods.

## 7. Practice Exercises & Self-Check
1. Write `createSecretHolder(secret)` returning `getSecret()` and `setSecret(newSecret)`.
2. Demonstrate that `holder.secret` is undefined while `holder.getSecret()` returns the secret.

## 8. Summary & Key Takeaways
- Closures emulate private class fields.
- Private state variables are inaccessible directly on returned objects.
- Public getter/setter methods control state mutations with validation guard clauses.
