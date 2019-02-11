// var person = {
//   name: 'frank',
//   age: 21,
//   hobby: ['Coderen' , 'Gamen']
// }
// console.log(person.name);
// console.log(person.hobby[0])
//
// var person2 = ['Pieter', 21];
//
// person2[0];
// console.log(person2[0]);
//
// var string = 'bootcamp';
// string.length
// console.log(string);
// // dot notation
//
//
// //Hoisting
// console.log(number);
// var number;
// nummer = 6;
//
//
// square(12);
//
// function square(number){
//   console.log(number * number);
// }
//

// constructor

function Person(name, age, text) {
  this.name = name,
  this.age = age
  this.text = (text)
  this.speak = function(){
    console.log(text);
  }
}

var pieter = new Person('Pieter', 21, 'hallo');
var pietje = new Person('Pietje', 2112, 'doei');
console.log(pieter, pietje);
