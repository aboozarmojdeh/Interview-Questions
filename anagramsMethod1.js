// Anagrams – Method 1 - Sort Strings

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^a-z\d]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
