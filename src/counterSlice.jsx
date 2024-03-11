// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: 5,
//   reducers: {
//     square: (state) => {
//       return (state = state ** 2);
//     },
//     cube: (state) => {
//       return (state = state ** 3);
//     },
//     pows: (state, payload) => {
//       console.log(payload);
//       return (state = state ** payload.payload);
//     },
//   },
// });

// export default counterSlice;
// export const { square, cube, pows } = counterSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

// Function to check if a number is prime
// const calculateisPrime = (num) => {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;
//   let i = 5;
//   while (i * i <= num) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//     i += 6;
//   }
//   return true;
// };

const calculateisPrime = (num) => {
  if (num == 0 || num == 1) return false;
  else {
    for (var i = 2; i <= num; i++) {
      if (num % i == 0) break;
    }
    if (num == i) {
      return 1;
    } else {
      return 0;
    }
  }
};

// Function to calculate factorial
// const calculateFactorial = (n) => {
//   if (n === 0 || n === 1) return 1;
//   for (let i = n - 1; i >= 1; i--) {
//     n *= i;
//   }
//   return n;
// };

const calculateFactorial = (n) => {
  var f = 1;
  for (var i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
};

const counterSlice = createSlice({
  name: "counter",
  initialState: 5,
  reducers: {
    square: (state) => {
      return state ** 2;
    },
    cube: (state) => {
      return state ** 3;
    },
    pows: (state, action) => {
      return state ** action.payload;
    },
    factorial: (state) => {
      return calculateFactorial(state);
    },
    isPrime: (state) => {
      return calculateisPrime(state) ? 1 : 0;
    },
  },
});

export default counterSlice;
export const { square, cube, pows, factorial, isPrime } = counterSlice.actions;
