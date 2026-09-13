# Expected Output — Scope Explorer
Scenario: "block"
[BLOCK SCOPE]
Inside 'if(true)':
- var leaked = "I leaked!" (Function Scoped)
- let protected = "I am trapped!" (Block Scoped)
Outside Block: leaked is accessible, protected throws ReferenceError.
