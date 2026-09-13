// Day 09 Examples
const defaults = { theme: "light", showSidebar: true };
const userSettings = { theme: "dark" };

// Later properties overwrite earlier properties!
const finalConfig = { ...defaults, ...userSettings };
console.log("Combined Config:", finalConfig);
// Output: { theme: 'dark', showSidebar: true }

const copy = { ...finalConfig };
copy.theme = "blue";
console.log("Original theme:", finalConfig.theme); // "dark" (Unmodified!)
