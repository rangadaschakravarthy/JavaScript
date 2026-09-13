// Day 04 Examples
const dynamicKey = "score";
const prefix = "user";

const student = {
  name: "Alex",
  [dynamicKey]: 95,
  [`${prefix}Id`]: 1001
};

console.log("Computed property object:", student);
// Output: { name: 'Alex', score: 95, userId: 1001 }

function buildConfig(key, value) {
  return {
    [key]: value,
    timestamp: Date.now()
  };
}
console.log("Config built:", buildConfig("env", "production"));
