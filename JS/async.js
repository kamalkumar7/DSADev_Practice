function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
}

async function runAsync() {
  try {
    const result = await asyncOperation();
    console.log(result); // "Done!"
  } catch (err) {
    console.error("Error:", err);
  }
}

runAsync();
