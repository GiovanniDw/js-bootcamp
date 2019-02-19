let chessboard = ` `;

let size = 8;

for (var l = 0; l < size; l ++) {
  for (var s = 0; s < size; s++) {
    if (l % 2 == 0) {
      var start = "#"
      var after = " "
    }else {
     start = " "
     after = "#"
    }
    if (s % 2 == 0) {
      chessboard += start;
    } else {
      chessboard += after;
    }
  }
chessboard += "\n";
}

console.log(chessboard);


// for (let number = 1; number <= 100; number ++) {
// if (number % 3 == 0  && number % 5 == 0) {
//   console.log("fizbuzz");
// }else if(number % 3 == 0){
//     console.log('Fizz');
// }else if (number % 5 == 0){
//   console.log('Buzz')
// }else {
//
//   console.log(number);
// }
//
//
// }
