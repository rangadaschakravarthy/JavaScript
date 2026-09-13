/**
 * Day 15 — Example 02: Private State and Encapsulation
 */

function createPerson(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  return {
    getName: () => _name,
    getAge: () => _age,
    setAge: (newAge) => {
      if (typeof newAge === 'number' && newAge > 0 && newAge < 120) {
        _age = newAge;
        return `Age updated to ${_age}`;
      }
      return "Invalid age update";
    }
  };
}

console.log("--- Encapsulated Person Object ---");
const person = createPerson("Alice", 25);
console.log("Name:", person.getName()); // "Alice"
console.log("Age:", person.getAge());   // 25

console.log("\nAttempting Direct Property Access:");
console.log("person._name:", person._name); // undefined (Private!)

console.log("\nValid Age Update:", person.setAge(26));
console.log("New Age via Getter:", person.getAge()); // 26

console.log("\nInvalid Age Update:", person.setAge(-5)); // "Invalid age update"
