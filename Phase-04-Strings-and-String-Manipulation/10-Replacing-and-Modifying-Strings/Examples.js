// Day 10 Examples
const text = "one cat, two cats, three cats";
console.log("replace('cat', 'dog'):", text.replace("cat", "dog"));
console.log("replaceAll('cat', 'dog'):", text.replaceAll("cat", "dog"));

function maskCreditCard(cardNum) {
  const last4 = cardNum.slice(-4);
  return last4.padStart(cardNum.length, "*");
}
console.log("Masked Card:", maskCreditCard("1234567890123456"));
