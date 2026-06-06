// Second largest number

// const secondLargest = (arr) => {
//   if (arr.length < 2) return null;

//   let first = -Infinity;
//   let second = -Infinity;

//   for (let num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num < first) {
//       second = num;
//     }
//   }
//   return second === -Infinity ? null : second;
// };

// console.log("secondLargest: ", secondLargest([10, 5, 8, 12, 15, 6]));

//Star pattern
/**
 * *
 * **
 * ***
 * ****
 * *****
 */

// const starPattern = (n) => {
//   for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       //for (let j = 0; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// };
// starPattern(5);

//Number pattern

/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

// const numberpattern = (n) => {
//   for (let i = 0; i < n; i++) {
//     // console.log("i: ", i);
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       row += j + 1;
//     }
//     console.log(row);
//   }
// };

// numberpattern(5);

//Number Pattern

/**
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */

// const numberPattern = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       row += i + 1;
//     }
//     console.log(row);
//   }
// };

// numberPattern(5);

//Number Pattern
/**
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */

// const numberPattern = (n) => {
//   for (let i = n; i >= 0; i--) {
//     // console.log("i: ", i);
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       //   console.log("j:", j);
//       row += j + 1;
//     }
//     console.log(row);
//   }
// };

// const numberPattern = (n) => {
//   for (let i = 0; i < 5; i++) {
//     // console.log("i: ", i);
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//       //   console.log("j:", j);
//       row += j + 1;
//     }
//     console.log(row);
//   }
//  };

// numberPattern(5);

//Star pattern
/**
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 */

// const starPattern = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// };

// starPattern(5);

//Star pattern

/**
 * ----*
 * ---**
 * --***
 * -****
 * *****
 */

// const starPattern = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     //adding empty spaces or dashes
//     for (let j = 0; j < n - (i + 1); j++) {
//       row += "-";
//     }
//     //adding stars
//     for (let k = 0; k <= i; k++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// };

// starPattern(5);

//startPattern

/**
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 * 1 0 1 0 1 0
 */

// const starPattern = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     let toogler = 1;
//     for (let j = 0; j <= i; j++) {
//       row += toogler;

//       if (toogler == 1) {
//         toogler = 0;
//       } else {
//         toogler = 1;
//       }
//     }
//     console.log(row);
//   }
// };

// starPattern(6);

//Star Pattern

/**
 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
 */

// const starPattern = (n) => {
//   let toogler = 1;
//   for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j <= i; j++) {
//       row += toogler;

//       if (toogler == 1) {
//         toogler = 0;
//       } else {
//         toogler = 1;
//       }
//     }
//     console.log(row);
//   }
// };

// starPattern(6);
