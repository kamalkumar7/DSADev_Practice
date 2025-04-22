function asyncTask(name, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(`${name} failed`);
        } else {
          resolve(`${name} completed`);
        }
      }, delay);
    });
  }
  
  const promise1 = asyncTask("Task 1", 1000);
  const promise2 = asyncTask("Task 2", 2000);
  const promise3 = asyncTask("Task 3", 1500);
  

  // We can use this to run all these 3 async tast in parallel
  Promise.all([promise1, promise2, promise3])
    .then(results => {
      console.log("All tasks completed:");
      console.log(results);
    })
    .catch(error => {
      console.error("At least one task failed:");
      console.error(error);
    });
    // It would take addition of all time if run parallely
  