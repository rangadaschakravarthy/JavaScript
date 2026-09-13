# Day 11 Debugging Solutions

## Bug 1: Unparenthesized Object Return in Arrow Function
- **Root Cause**: `{}` is parsed as function block body, returning `undefined`.
- **Fix**: `const makeUserBuggy = (id, role) => ({ id, role });`.

## Bug 2: Rest Parameter Positioning
- **Root Cause**: Placing `...items` before `title` parameter triggers a `SyntaxError: Rest parameter must be last element`.
- **Fix**: Move rest parameter to the last position: `function processData(title, ...items)`.

## Bug 3: Missing `arguments` in Arrow Functions
- **Root Cause**: Arrow functions inherit `arguments` from lexical parent, leading to `ReferenceError` or incorrect references.
- **Fix**: Use ES6 rest parameters: `const sumArgs = (...args) => args.reduce((a, b) => a + b, 0);`.
