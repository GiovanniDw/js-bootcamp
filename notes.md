
# Notes

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Notes](#notes)
	- [Chapter 1 | Values, Types, and Operators](#chapter-1-values-types-and-operators)
		- [Values/Waarden](#valueswaarden)
		- [Numbers](#numbers)
			- [Arthmetic/Rekenkundig](#arthmeticrekenkundig)
			- [Special Numbers](#special-numbers)
		- [String](#string)
		- [Unary operators](#unary-operators)
		- [Boolean values](#boolean-values)
			- [comparison](#comparison)
			- [Logical Operators](#logical-operators)
		- [Empty values](#empty-values)
		- [Automatic Type Conversion](#automatic-type-conversion)
		- [Samenvatting](#samenvatting)
	- [Chapter 2 | Program Structure](#chapter-2-program-structure)
		- [Expressions and statements](#expressions-and-statements)
		- [Bindings](#bindings)
		- [Binding Names](#binding-names)
		- [The Environment](#the-environment)
		- [Functions](#functions)
		- [The console.log function](#the-consolelog-function)
		- [Return values](#return-values)
		- [Control flow](#control-flow)
		- [Conditional Exexution](#conditional-exexution)
		- [While and do Loops](#while-and-do-loops)
		- [Indenting Code](#indenting-code)
		- [For Loops](#for-loops)
		- [Breaking out of a loop.](#breaking-out-of-a-loop)
		- [Updating Bindings Succinctly](#updating-bindings-succinctly)
		- [Dispatching on a value with switch](#dispatching-on-a-value-with-switch)
	- [Chapter 3 | Functions](#chapter-3-functions)
		- [Defining a function](#defining-a-function)
		- [Bindings and scopes](#bindings-and-scopes)
			- [Nested scope](#nested-scope)
		- [Functions as values](#functions-as-values)
		- [Declaration notation](#declaration-notation)
		- [Arrow functions](#arrow-functions)
		- [The call stack](#the-call-stack)
		- [Optional Arguments](#optional-arguments)
		- [Closure](#closure)
		- [Recursion](#recursion)
		- [Growing functions](#growing-functions)
		- [Functions and side effects](#functions-and-side-effects)
		- [Summary](#summary)
	- [Chapter 4](#chapter-4)
	- [Chapter 5](#chapter-5)
	- [Chapter 6](#chapter-6)
		- [Summary](#summary)
	- [Chapter 8](#chapter-8)
	- [Chapter 9](#chapter-9)
	- [Chapter 10](#chapter-10)
	- [Chapter 11](#chapter-11)
	- [-->](#-)

<!-- /TOC -->



## Chapter 1 | Values, Types, and Operators

### Values/Waarden

Chunks/Blokken worden waarden/values genoemd  
Alle waarde zijn gemaakt van bits.

Waarden zijn:

-   Getallen
-   Stukjes text
-   Functies
-   etc..

Bij maken van value alleen naam ervan gebruiken.

### Numbers

Values/Waarden van numbers zijn numerieke Values. Deze worden zo geschreven:

```javascript
13
```

Gebruik dit in een programma en het bit patroon word gemaakt in het geheugen van een computer.

> JavaScript gebruikt een vast aantal bits, 64 daarvan, om een ​​enkele getalwaarde op te slaan. Er zijn slechts zoveel patronen die u kunt maken met 64 bits, wat betekent dat het aantal verschillende nummers dat kan worden weergegeven, beperkt is. Met N decimale cijfers kunt u 10 N- nummers weergeven. Evenzo, gegeven 64 binaire cijfers, kunt u 2 64 verschillende getallen voorstellen, wat ongeveer 18 quintillion is (een 18 met 18 nullen erna). Dat is veel.

Fractional numbers are written by using a dot.

```javascript
9.81
```

For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number.

```javascript
2.998e8
```

2.998 x10⁸ = 299,800,000.

#### Arthmetic/Rekenkundig

Het belangrijkste ding om te doen met getallen is rekenkundig. Rekenkundige bewerkingen zoals optellen of vermenigvuldigen nemen twee getalswaarden en produceren er een nieuw getal uit. Hier is hoe ze eruitzien in JavaScript:

```javascript
100  +  4  *  11
```

> De + en \* symbolen worden _**operators**_ genoemd.

vermenigvuldigen gebeurt eerst, maar net als bij wiskunde kan het ook zo:

```javascript
( 100  +  4 ) *  11
```

#### Special Numbers

There are 3 special values in JS that are considered numbers but dont behave like numbers.


```js
Infinity
-Infinity
NaN
```

### String

The next basic data type is the string. Strings are used to represent text. They are written by enclosing their content in quotes.

```js
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```
Almost anything can be put in quotes and javascript will make a String out of it, Quotes inside quotes might be hard.

When a backslash `\` is found inside quoted text it indicates the character after has a special meaning this is called **escaping** the character.

`\n`:
Newline  
`\t`:
Tab character

```js
"This is the first line\nAnd this is the second"
```

String can **not** be divided, multiplied, or substracted. The `+` operator can be used to glue 2 strings together.

The following line will produce the string "concatenate":
```js
"con" + "cat" + "e" + "nate"
```

Backtick-quoted strings, usually called template literals, can do a few more tricks. Apart from being able to span lines, they can also embed other values.
```js
`half of 100 is ${100 / 2}`
```
When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position. The example produces `“half of 100 is 50”`.

### Unary operators

Not all operators are symbols, some are written as words. one Example is `typeof` operator, this produces a string value naming the type of the value you give it.

```js
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```

Other operators shown all operators on 2 values, but `typeof` takes only one

Operators that use 2 values are called `binary` operators.
Operators that take one are called `unary` operators.
the `-` operator can be used as both operators.

```js
console.log(- (10 - 2))
// → -8
```

### Boolean values

Is usefill for values that are `yes` `no`, `on` `off`  
Boolean type has 2 values `true` & `false`

#### comparison
One wat to produce boolean Values:
```js
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
```
`>`:
Greater than  
`<`:
Less than  
`>=`:
greater than or equal to  
`<=`:
less than or equal to  
`==`:
equal to  
`!=`:
not equal to  

```js
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
```

`NaN`:
one value is not equal to itself

#### Logical Operators
Some opperators can be applied to boolean values themseles.  
`&&`:
and  
`||`:
or  
`!`:
Not

### Empty values
Special values:
`null` & `undefined`
Special values are values that carry no information.

### Automatic Type Conversion



### Samenvatting

> We hebben in dit hoofdstuk vier typen JavaScript-waarden bekeken: getallen, tekenreeksen, Booleans en niet-gedefinieerde waarden.
>
> Dergelijke waarden worden gemaakt door hun naam ( `true`, `null`) of waarde ( `13`, `"abc"`) in te voeren. U kunt waarden combineren en transformeren met operatoren. We zagen binaire operatoren voor rekenkundige ( `+`, `-`, `*`, `/`, en `%`), tekenreekssamenvoegingsoperator ( `+`), vergelijking ( `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`), en logica ( `&&`, `||`), evenals verschillende unaire operatoren ( -om een nummer te ontkennen, !te ontkennen logisch en typeofom het type van een waarde te vinden) en een ternaire operator ( ?:) om een ​​van de twee waarden te kiezen op basis van een derde waarde.
>
> Dit geeft u voldoende informatie om JavaScript als een zakrekenmachine te gebruiken, maar niet veel meer. In het volgende hoofdstuk worden deze uitdrukkingen gecombineerd in standaardprogramma's.

## Chapter 2 | Program Structure

### Expressions and statements

A fragment of code that produces a value is called an expression. Every value that is written literally (such as 22 or "psychoanalysis") is an expression. An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.

> A program is a list of statements.

The simplest kind of statement is an expression with a semicolon after it. This is a program:

```javascript
1;
!false;
```

### Bindings

How does a program keep an internal state? How does it remember things? We have seen how to produce new values from old values, but this does not change the old values, and the new value has to be immediately used or it will dissipate again. To catch and hold values, JavaScript provides a thing called a binding, or variable:

```javascript
let caught = 5 * 5;
```

The special word (keyword) `let` indicates that this sentence is going to define a binding.

The previous statement creates a binding called `caught` and uses it to grab hold of the number that is produced by multiplying 5 by 5.

After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds. Here’s an example:

```javascript
let ten = 10;
console.log(ten * ten);
// → 100
```

### Binding Names

Bindings die gereserveerd zijn voor javascript
The full list of keywords and reserved words is rather long


```
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```

### The Environment
**Environment:**
Collection of `bindings` and their `values` that exists at a given time.

### Functions
A lot of values in the default environment have the type `function`.

`function`:
A piece of program wrapped in a value.

values can be applied in order to run the wrapped piece of program.

The binding `prompt` holds a function that shows a little dialog box asking for user input.
```js
prompt("Enter passcode");
```
![prompt](https://eloquentjavascript.net/img/prompt.png)

Executing a function is called invoking, calling or applying it.
Call a function by putting parentheses `()` after an expression that produces a function value.

Values given to a function called `arguments`.
Different functions might need a different number or different types of arguments.

### The console.log function

Binding names can not have `.` characters,
`console.log` is not a simple binding. it is an expression that retrieves the `log` property from the value held by the console binding.

### Return values

`side effect`:
Showing a dialox box or writing text to the screen.

A lot of functions are useful because of the side effects they produce.
Functions may also produce values, in which case they dont need to have a side effect to be usefull.

For example the function `Math.max` takes any amount of number arguments and gives back the greatest.

```js
console.log(Math.max(2, 4));
// → 4
```

When a function produces a value, its said to `return` that value.
Anything that produces a value is an `expression` in JavaScript.
Function calls van be used within larger expressions.

a call to `Math.min` can be used as part of a plus expression:

```js
console.log(Math.min(2, 4) + 100);
// → 102
```

### Control flow
When a program has more than one statement, the statements are executed as if they are a story, From top to bottom.

the example has 2 statements. The first asks for users number, the second shows the square of that number.

```js
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);
```
The function `Number` converts a value to a number.

### Conditional Exexution

![controlflow](https://eloquentjavascript.net/img/controlflow-if.svg)
Conditional execution is created with the `if` keyword in JavaScript.

Example: Show the square of an input only if the input is a numbers
```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
```

Thus, the condition translates to “unless theNumber is not-a-number, do this”.

The statement after the if is is wrapped in braces `{}`
These can be used to group any number of statements into a single statement, called a `block`.

The `else` and `if` keywords can be used to create 2 seperate alternative execution paths.

```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

If there are more than 2 paths to choose from you can 'chain' multiple `if/else` pairs together:

```js
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

The schema for this program looks something like this:
![controll nested](https://eloquentjavascript.net/img/controlflow-nested-if.svg)


### While and do Loops

**Loop**:
Run a piece of code multiple times.
![loop](https://eloquentjavascript.net/img/controlflow-loop.svg)

If combined with a binding that counts:
```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
```

Statement starting with the keyword `while` creates a loop.
The word while is followed by an expression in parentheses and than a statement

The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.

The `number` binding demonstrates the way a binding can track progress of a program, everytime the loop repeats `number` gets a value that is +2 than previous value, at the beginning it is compared to the number 12 to decide if the program is finished.

We use two bindings: one to keep track of our result and one to count how often we have multiplied this result by 2. The loop tests whether the second binding has reached 10 yet and, if not, updates both bindings.

```js
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```

Difference `do` and `while` loop:
a `do` loop always executes its body once.
It tests if it should stop after the first execution.

```js
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```
This wil force you to enter a name. until it gets something that is not an empty string.

the `!` operator converts value to boolean. all strings except `""` convert to true.


### Indenting Code

When new blocks are opened inside other blocks use proper indentiation

```js
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
```

### For Loops

```js
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```
All the statements that are related to the "state" of the loop are grouped together after `for`

the `()` after a `for` keyword must contain 2 `;`.  
The part before the first `;` _initializes_ the loop(usually by defining a binding)  
The second part is the _expression_ that checks if the loop must continue.  
The final part _updates_ the state of the loop after every iteration.

```js
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```
code that computes 2¹⁰ using `for` insted of `while`


### Breaking out of a loop.

A loop condition producing `false` is not the only way a loop can finish.  

`break`:
A special statement that has effect of immediately jumping out of the enclosing loop.

This program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.
```js
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```

Using `%` operator is an easy way to test if a number is devidable by another number. If it is the remainder if their division is zero.

the  `for` loop in the example, does not have a part that checks for the end of the loop.
The loop wil never stop unless the `break` statement inside is executed.

If the break statment is removed, or if the condition is always true, the program wil get stuck in a `infinite loop`.

`continue` is similar to `break`. when `continue` is encountered in a loop body control jumps out of the body and continues with the loops next iteration.

### Updating Bindings Succinctly

A program often needs to update a binding to hold a value based on the bindings previous value.  
`counter = counter + 1;`  
Shortcut for this
`counter += 1;`

`result *= 2` to double  
`counter -= 1` to count down


### Dispatching on a value with switch




## Chapter 3 | Functions



### Defining a function

Value of a Binding is a function

```javascript

const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```

Een function is gemaakt met een expression die begint met een keyword `function`. Functions hebben een set van `parameters` (in dit geval alleen x) en een `body`. de inhoud van de body bevat statements die worden executed als de functie word aangeroepen. De body van de function die op deze manier word aangemaakt moet altijd in braces`{}` gewrapped worden. ook als er een enkele statement is.

Een functie kan meerdere parameters bevatten of geen enkele parameter.
```js
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!
```

```js
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```
Sommige functies produceren een _value_ zoals `power` & `square`,  
Andere functies produceren geen value zoals `makeNoise`, het resultaat van makeNoise is een _side effect_.  

Een `return`statement bepaald de waarde die de functie terug geeft.

Als de control een statement tegenkomt springt deze onmiddelijk uit de huidige functie en geeft de _gereturnde_ waarde aan de code die de functie heeft aangeroepen.

Een `return` zonder _expression_ erna zorgt ervoor dat de functie `undefined` returned

Functies die geen return hebben zoals `makeNoise` returnen ook `undefined`.

Parameters van een functie gedragen zicht als normale `bindings`, maar de beginwaarde worden meegegeven bij het callen van de functie, niet door de code in de functie.

### Bindings and scopes

Elke `Binding` heeft een _`Scope`_ welke deel uitmaakt van het programma in welke de `binding` zichtbaar is.

Global Bindings:
Binding that are defined outside of any function or block, the scope is the whole program.

Local Bindings:
Created for function parameters or declared inside a function(can be reffered only in that function.)

Bindings declared with `let` and `const` are local to the block that they are declared in, if created inside a loop the code after and before can not see it.

Bindings dcreated with the `var` keyword are visible troughout the whole function that they appear in. If not in a function troughout the global scope.
```js
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```

Each scope can look out into the scope around it. In the next example x is visible inside the block.  
The exception is when multiple bindings have the same name. in that case code can only see the inner most one.

When te code inside the `halve` function refers to `n`, it is seeing its own `n`, not the global `n`.

```js
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
```


#### Nested scope

Blocks and functions can be created inside other blocks and functions, producing multipe degrees of locality.

This function that outputes the ingredients needed to make a batch of hummus, has another function inside it:
```js
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```
The code inside the `ingedient` function can see the `factor` binding from the outer function, But its local bindings `unit` & `ingredientAmount` are not visible in the outer function.

`Lexical scoping`
: the set of bindings visible inside a block is determined by the place of that block in the progeam text. Each local scope can also see the all the local scopes that contain it, All scopes can see the global scope.

### Functions as values

A `function binding` usually simply acts as a name for a soecific piece of the program. Such a binding is defines once and never changed. this makes it easy to confuse the function and its name.

A function value can do all the things that other values can do. You can use it as an arbitrary(willekeurig) expression, not just call it.  
it is possible to store a function value in a new binding, pass it as an argument to a function, and so on.

Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, Like this:
```js
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```
### Declaration notation

There is a shorter way to create a function binding.  
when the `function` keyword is used at the start of a statement, it word differently.

```js
function square(x) {
  return x * x;
}
```
This is a function _declaration_. The statement defines the binding `square` and points it at the given function. It is easier to write and does not require a semicolon after the function.

There is one subtlety with this form of function definition.

```js
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```
The preceding code works, even tho the function is defined _below_ the code that uses it.  
Function declarations are not part of the regular top-to-bottom flow of control.

This is usefull because it offers freedom to order code in a more meaningfull way, without worrying about having to define all functions before they are used.

### Arrow functions

The third notation of a function, It looks different from the other instead of `function` it uses an arrow `=>`

```js
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```
The arrow comes after the list of parameters and is followed by the functions body.  

This expresses someting like “this input (the parameters) produces this result (the body)”.

When there is only one parameter name, you can omit the parentheses around the parameter list.
If the body is a single expression, rather than a block in braces, that expression will be returned from the function.

These 2 defenitions of square to the same thing:
```js
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses
```js
const horn = () => {
  console.log("Toot");
};
```

### The call stack

The way control flows trough functios is somewhat involved.
A simple program that makes a few function calls:
```js
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```
> A run through this program goes roughly like this: the call to greet causes control to jump to the start of that function (line 2). The function calls console.log, which takes control, does its job, and then returns control to line 2. There it reaches the end of the greet function, so it returns to the place that called it, which is line 4. The line after that calls console.log again. After that returns, the program reaches its end.

`Callstack`
: The place where the computer stores this context
Everytime a function is called the current context is stored is stored on top of that stack.
When a function returns, it removes the top contect from the stack and uses that context to continue execution.

When stack grows to big, the computer wil fail with a message like “out of stack space” or “too much recursion”.
Infinite back-and-forth between functions

```js
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??
```

### Optional Arguments

The next code is allowed and executed without problem:
```js
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

`square` is defined with one paramater. Yet we call three, It ignores te extra arguments and computes the square of the first one.

Javascipt is extremely broad-minded about the number of arguments you pass to a function.
If passed to many it is ignored, if passed to few, the missing parameters get assigned `undefined`.

The downside is that is when passed to many arguments to a function nobody will tell you about it

The upside is that this behaviour can be used to allow a function to be called with different numbers of arguments.   

Example, This minus function tries to imitate the `-` operator by acting on either one or two arguments:

```js
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

If u write an `=` operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

Example, This version of 	`power` makes its second argument optional. if you do not provide it or pass the value `undefined`, it will default to two, and the function will behave like `square`

```js
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### Closure

The ability to treat a function as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question.

What happens to local bindings when the function call that created them is no longer active?

Example, The code defines a function, `wrapValue`, that creates a local binding. It then returnes a function that accesses and returns this local binding.

```js
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

This is allowed and works, both bindings can still be accessed. This situation is a good demonstration of the fact that local bindings are created anew for every call, and different calls can not trample on one anothers local bindings.


`closure`
: Being able to reference a specific instanse of a local binding in an enclosing scope.

`a closure`
: A function that references bindings from local scopes around it

This behavior frees you from having to worry about lifetimes of bindings & makes it possible to use function bindings in creative ways.

Example, With a little change, The previous example is turned into a way to create functions that multiply by an arbitrary amount

```js
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```

































<!--










### Recursion

### Growing functions

### Functions and side effects

### Summary

## Chapter 4

## Chapter 5

## Chapter 6

### Summary

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11

## -->
