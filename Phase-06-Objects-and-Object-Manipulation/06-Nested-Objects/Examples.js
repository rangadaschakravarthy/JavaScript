// Day 06 Examples
const user = {
  name: "Alex",
  contact: {
    email: "alex@example.com",
    address: {
      city: "Hyderabad",
      zip: "500081"
    }
  },
  skills: ["JS", "Node"]
};

console.log("Nested city:", user.contact.address.city); // "Hyderabad"
console.log("First skill:", user.skills[0]); // "JS"

user.contact.address.city = "Bangalore";
console.log("Updated nested city:", user.contact.address.city);
