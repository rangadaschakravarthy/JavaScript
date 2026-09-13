// Day 13 Examples
const rawUsers = [
  { id: 1, name: "Alex", passwordHash: "secret123", email: "alex@test.com" },
  { id: 2, name: "Sam", passwordHash: "secret456", email: "sam@test.com" }
];

// Sanitize user payload by picking selected keys
const sanitized = rawUsers.map(({ passwordHash, ...safeUser }) => safeUser);
console.log("Sanitized Users:", sanitized);
// Output: [ { id: 1, name: 'Alex', email: 'alex@test.com' }, ... ]
