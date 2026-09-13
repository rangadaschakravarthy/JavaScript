# 03 — Synchronous vs Asynchronous Callbacks

## 1. What is this?
Callbacks fall into two execution categories:
- **Synchronous Callbacks**: Executed **immediately** within the main single-threaded execution flow before the outer function returns.
- **Asynchronous Callbacks**: Executed **later** after the current synchronous code stack clears and an event/timer completes (Preview of Phase 10).

## 2. Why does it exist?
Understanding the distinction prevents execution ordering bugs where developers assume an asynchronous callback has completed when synchronous code below it runs.

## 3. Side-by-Side Comparison

```javascript
// 1. SYNCHRONOUS CALLBACK (Executes immediately in-line)
console.log("Start Sync");

[1, 2, 3].forEach(function(num) {
  console.log("Sync item:", num);
});

console.log("End Sync");

/* OUTPUT (Strictly Sequential):
Start Sync
Sync item: 1
Sync item: 2
Sync item: 3
End Sync
*/
```

```javascript
// 2. ASYNCHRONOUS CALLBACK PREVIEW (Executes after timer/event)
console.log("Start Async");

setTimeout(function() {
  console.log("Async Callback Executed!");
}, 0); // 0ms delay!

console.log("End Async");

/* OUTPUT (Callback queued to event loop!):
Start Async
End Async
Async Callback Executed!
*/
```

## 4. Comparison Matrix

| Property | Synchronous Callbacks | Asynchronous Callbacks |
|----------|-----------------------|------------------------|
| **Execution Timing** | Immediate (In-line) | Deferred (Event Loop Queue) |
| **Blocks Caller Line?** | Yes (Caller waits for completion) | No (Caller continues immediately) |
| **Examples** | `[].forEach`, `[].map`, custom array iteration | `setTimeout`, DOM event listeners, `fetch()` |

## 5. Code Execution Trace for Asynchronous `setTimeout`

```text
1. Main Thread runs `console.log("Start Async")`.
2. `setTimeout(cb, 0)` is encountered:
   - Registers `cb` callback in Web APIs / Node Timer environment.
   - Main thread continues IMMEDIATELY without waiting!
3. Main Thread runs `console.log("End Async")`.
4. Call Stack is now empty!
5. Event Loop checks timer queue, pops `cb` to Call Stack, and executes `console.log("Async Callback Executed!")`.
```

## 6. Common Pitfalls & Anti-Patterns
- Attempting to return a value from inside an asynchronous callback to the outer synchronous caller function (Returns `undefined` because caller returns before callback ever executes!).

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "Why does `setTimeout(cb, 0)` execute AFTER `console.log('End')`?"
  - *Answer*: `setTimeout` delegates `cb` to the browser/Node timer system. Even with 0ms delay, `cb` is pushed to the Callback Task Queue and will only execute after the main synchronous Call Stack is completely clear.

## 8. Practice Exercises & Self-Check
1. Predict output of 3 log statements mixed with a synchronous `.forEach()` vs `setTimeout`.
2. Explain why returning a value from inside `setTimeout` fails.

## 9. Summary & Key Takeaways
- Synchronous callbacks execute immediately in call order.
- Asynchronous callbacks execute later via the Event Loop task queue.
- Async callbacks do not block synchronous code execution.
