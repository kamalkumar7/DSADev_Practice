const api1 = 'https://dummyjson.com/products';
const api2 = 'https://dummyjson.com/quotes';

const promises = [fetch(api1), fetch(api2).catch(() => 'error')];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      result.value.json() 
        .then((body) => {
          console.log('Body:', body);
        })
        .catch((error) => {
          console.error('Error parsing JSON:', error);
        });
    } else {
      console.log('Request failed:', result.reason);
    }
  });
});