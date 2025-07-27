const developer = {
  name: "Kamal",
  skills: ["HTML", "CSS", "React"]
};

// Seal the object
Object.seal(developer);

// You can still change existing properties
developer.name = "Kamal Dev";

// But you can't add new properties
developer.experience = "3 years"; // This will silently fail in non-strict mode

// And you can't delete existing properties
delete developer.skills; // Also fails

console.log(developer);
// Output: { name: "Kamal Dev", skills: [ "HTML", "CSS", "React" ] }