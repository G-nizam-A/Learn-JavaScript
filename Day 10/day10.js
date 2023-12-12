// asynchronous function
// console.log("before settimeout");

// Promise();
// fetch();
// async await
// setInterval()
// setTimeOut()

// let stop2 = setTimeout(function () {
//   console.log("after 4 seconds");
// }, 4000);

// let a = 1;
// let stop1 = setInterval(() => {
//   console.log(a++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(stop1);
// }, 3000);

// setTimeout(() => {
//   console.log("stoped before 4 seconds");
//   clearTimeout(stop2);
// }, 3000);

// console.log("after settimeout");

// let createNewPromise = new Promise(function (success, reject) {
//   if (true) {
//     success("success: a is greater");
//   } else {
//     reject("reject: b is great");
//   }
// });

// createNewPromise
//   .then(function (result) {
//     console.log("then state: ", result);
//   })
//   .catch((err) => {
//     console.log("catch state: ", err);
//   });

// returns promise   pending   success    reject
// fetch(fn).then(fn).then(fn).catch(fn);
// fetch(fn).then(fn).catch(fn);
// returns promise   pending   reject

// let a = document.querySelector("p");
function getMeData1() {
  fetch("https://dummyjson.com/products/1")
    .then((pend) => console.log("function with pending state", pend.json()))
    .catch((err) => console.log(err));
}

function getMeData2() {
  fetch("https://dummyjson.com/products")
    .then((pend) => pend.json())
    .then((data) => {
      console.log("function with resolve state", data);

      //  products.map(product => {
      //     console.log(product.title);
      //     a.textContent += product.title;
      //   });
    })
    .catch((err) => console.log(err));
}

// getMeData1();
// getMeData2();
async function getMeDataUsingAsync() {
  let a = await fetch("https://dummyjson.com/products/1");
  console.log(await a);
}
// getMeDataUsingAsync();

async function sum() {
  try {
    let a = await fetch("https://dummyjson.com/products/1");
    console.log(await a);
  } catch (err) {
    console.log(err);
  }
}
// sum();

const promise11 = Promise.resolve(1);
const promise22 = Promise.resolve(2);
const promise33 = Promise.reject(3);

const allPromises = Promise.all([promise11, promise22, promise33]);
// Promise.all is a async function that takes an array of promises and returns a new promise that fulfills with an array of fulfilled results when all the input promises have been fulfilled. If any of the input promises is rejected, the entire promise is rejected.
allPromises
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 500));
const promise4 = new Promise((resolve, reject) => setTimeout(() => reject("Error"), 200) );

const racePromises = Promise.race([promise1, promise2, promise3, promise4]);
// Promise.race is similar to Promise.all, but it fulfills or rejects as soon as one of the input promises fulfills or rejects. It can be useful in scenarios where you want to race multiple asynchronous operations.
racePromises
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  const allSettledPromises = Promise.allSettled([promise11, promise22, promise33]);
// Promise.allSettled is similar to Promise.all, but it waits for all the promises to settle (either fulfill or reject) and returns an array of objects representing the outcome of each promise.

  allSettledPromises
    .then((results) => {
      console.log(results);
      // Output: [
      //   { status: 'fulfilled', value: 1 },
      //   { status: 'fulfilled', value: 2 },
      //   { status: 'rejected', reason: 3 }
      // ]
    })
    .catch((error) => {
      console.error(error); // This will not be executed
    });
    
// const loadData = new Promise((resolve, reject) => {
//   const shouldSucceed = true;

//   if (shouldSucceed) {
//     resolve("Data loaded successfully");
//   } else {
//     reject("Error: Unable to load data");
//   }
// });

// loadData
//   .then((result) => {
//     if (result) {
//       console.log(result);
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function fetchData() {
//   fetch("https://dummyjson.com/products/categories")
//     .then((res) => res.json())
//     .then((data) => {
//       if (data) {
//         console.log("fetch");
//       }
//     })
//     .catch((err) => console.log(err));
// }
// async function fetchDataAsync() {
//   let res = await fetch("https://dummyjson.com/products/categories");
//   if (res) {
//     console.log("async await");
//   }
//   // console.log(await res.json());
// }

// const axios = require("axios");
// function fetchDataAxios() {
//   axios
//     .get("https://dummyjson.com/products/categories")
//     .then((response) => {
//       if (response.data) {
//         console.log("axios");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// fetchData();
// fetchDataAsync();
// fetchDataAxios();
