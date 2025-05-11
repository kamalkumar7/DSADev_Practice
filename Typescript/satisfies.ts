type Colors = "red" | "green" | "blue";
type ColorUsage = {
  primary: Colors;
  secondary?: Colors;
};

const betterPalette = {
  primary: "red",
  secondary: "green",
} satisfies ColorUsage;

// TypeScript now checks that the structure of the object
// matches ColorUsage, and that the values are assignable to Colors.

// Importantly, betterPalette.primary is still inferred as "red"
const betterPrimaryColor: "red" = betterPalette.primary; // Okay

// If there's a type error, 'satisfies' will catch it:
const invalidPalette = {
  primary: "purple", // Error: Type '"purple"' is not assignable to type 'Colors'.
  secondary: "green",
} satisfies ColorUsage;

const incompletePalette = {
  primary: "blue",
} satisfies ColorUsage; // Okay, 'secondary' is optional