
# Notes

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Notes](#notes)
  - [Chapter 1 | Values, Types, and Operators](#chapter-1--values-types-and-operators)
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
  - [Chapter 2 | Program Structure](#chapter-2--program-structure)
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
  - [Chapter 3 | Functions](#chapter-3--functions)
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
  - [Chapter 4 | Data Structures: Objects and Arrays](#chapter-4--data-structures-objects-and-arrays)
    - [Data sets](#data-sets)
    - [Properties](#properties)
    - [Methods](#methods)
    - [Objecs](#objecs)
    - [Mutability](#mutability)
    - [The Lyncanthrope's Log](#the-lyncanthropes-log)
    - [Computing Correlation](#computing-correlation)
    - [Array loops](#array-loops)
    - [The Final analysis](#the-final-analysis)
    - [Further Arraylogy](#further-arraylogy)
    - [Strings and their properties](#strings-and-their-properties)
    - [Rest parameters](#rest-parameters)
    - [The Math object](#the-math-object)
    - [Destructuring](#destructuring)
    - [JSON](#json)
    - [Summary](#summary)
  - [Chapter 5 | Higher-Order Functions](#chapter-5--higher-order-functions)
    - [Abstraction](#abstraction)
    - [Abstracting Repetition](#abstracting-repetition)
    - [Higher-Order Functions](#higher-order-functions)
    - [Script Data Set](#script-data-set)
    - [Filtering Arrays](#filtering-arrays)
    - [Transforming with manipulate](#transforming-with-manipulate)
    - [Summarizing with Reduce](#summarizing-with-reduce)
    - [Composability](#composability)
  - [Chapter 6](#chapter-6)
    - [Summary](#summary-1)
  - [Chapter 8](#chapter-8)
  - [Chapter 9](#chapter-9)
  - [Chapter 10](#chapter-10)
  - [Chapter 11](#chapter-11)
  - [-->](#)
  - [Chapter 13 | Javascript and the browser](#chapter-13--javascript-and-the-browser)
    - [networks and internet](#networks-and-internet)
    - [The Web](#the-web)

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

The explict `local` binding from `warpValue` example is not needed, because the parameter is itself a local binding.

In this example `multiplier` is called and creates an environment in which its `factor` parameter is bound to 2. the function value it returns, which is stored in `twice`, remembers this environment. so when that is called, it multiplies its argument by 2.

### Recursion

_recursion_
: A function that calls itself  
(its okay as long as it does not do it so often that it overflows the stack)

Recursion allows some functions to be written in a different style.

Example,(alt implementation of power)

```js
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```
[Expl](https://eloquentjavascript.net/03_functions.html#p_/7VYZ2mLWF)

Recursive solution:
```js
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```
> The inner function `find` does the actual recursing. It takes 2 arguments: The current number and a string that records how we reached this number. If it i finds a solution, it returns a string that shows hot to get to the target. If no solution can be found starting from this number it returns `null`.

To do this the function performes one of three actions.

- If current number is target number, the current history is a way to reach that target, so it is returned.
- If the current number is greater than target, there is no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns `null`.

- Finnaly, If still below target number, the function tries both posible paths that start from the current number by calling itself twice.  
 - once for addition
 - once for multiplication  

 If the first call returns something that is not `null`, it is returned.  
 otherwise, the second call is returned, regartless of whether it produces a string of `null`.

To onderstand how this function produces the effect we're looking for.
All the calls to `find` that are made when searching for a solution for the number 13.

```
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
```
> The indentation indicates the depth of the call stack. The first time find is called, it starts by calling itself to explore the solution that starts with (1 + 5). That call will further recurse to explore every continued solution that yields a number less than or equal to the target number. Since it doesn’t find one that hits the target, it returns null back to the first call. There the || operator causes the call that explores (1 * 3) to happen. This search has more luck—its first recursive call, through yet another recursive call, hits upon the target number. That innermost call returns a string, and each of the || operators in the intermediate calls passes that string along, ultimately returning the solution.

### Growing functions

2 more or less natural ways for functions to be introduced into programs.

1. is that you find yourself writing similar code multiple times.  
 You'd prefer not to do that. Having more code means more space for mistakes to hide and more material to read for people trying to understand the program. So, Take the repeated functionality, find a good name for it, and put it into a function.

2. is that you find you need some functionality that you have not written yet and that sounds like it deserves its own function.  
You'll start by naming the function, and then you'll write its body. you might even start writing code that uses the function before you actually define the function

The difficulity of finding a good name for a function is a good indication of how clear a concept it is that you are trying to wrap.

Example, A progamm that prints 2 numbers(cows and chicken) on a farm, with the words Cows & Chickens after them, add 0 before the digits to always 3 digits long.

```js
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
```

writing `.length` after a string expression will give us the length of that string. the `while` loop adds zero's in front of the number strings until they ar at least 3 characters long.

Example, To add piggs a better way.(First attemp)
```js
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
```
This combines 3 things. into a single function.
- Printing
- Zero pagging
- Adding a label

Example, Single concept.
```js
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```

### Functions and side effects

Functions can be devided roughly into
- those that are called for their side effects.
- those that are called for their return value.  
>It is possible to have both.  


1. `printZeroPaddedWithLabel` is called for its side effect: it prints a line.  
2. `ZeroPad` Is called for its return value.

> The second is more usefull in situations than the first.
Functions that create values are easier to combine in new ways than functions that direcly perform side effects.

_Pure_ functions
: A specific kind of value-producing function that has no side effects and does not rely on side effects from other code.  
When called with same arguments it always produces the same value.
> It does not read global bindings whose value might change.  

_Nonpure_ functions tend to require more scaffolding to test.


## Chapter 4 | Data Structures: Objects and Arrays

### Data sets

`Array`
: a data type specifically for storing sequences of values.

Example,
```js
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
```

First index of an array is zero. Retrieve the first element.
`listOfNumbers[0]`

### Properties

`myString.length` accesses the `length` _property_ of the value in `myString`

`Math.max` accesses the `max` _property_ in the `Math` object.

Only `null` & `undefined` have no properties.

```js
null.length;
// → TypeError: null has no properties
```

The 2 main ways to acces properties in Javascript are with dot and square brackets. `value.x` & `value[x]`

when using dot The word after the dot is the littteral name of the property

When using square brackets, the expression between the brackets is *evaluated* to get the property name.

`array.length` To find the length of an array.

### Methods

`String` & `Array` objects contain in next to the `length` property a number of properties that hold function values

```js
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
```

Properties that contain functions are generally called **methods** of the value they belong to.  
`toUpperCase` is a method of a string.

Example, 2 methods to manipulate arrays:

```js
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
```

`.push` method
: adds values to the end of an array.  
`.pop` methods
: removes values from the end of an array.  

### Objecs

Values of the type _object_ are random collections of properties.
One way to create an object is using braces as an expression.

```js
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```

Properties whose names are not valid binding names or valid numbers have to be quoted:
```js
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
```
Braces have _two_ meanings in javascript. at start of a statment they start a block of statements. otherwise they describe an object.

Reading a property that does not exists give a value of `undefined`.

`delete` operators:
Cuts off a tentacle from object

Example,
```js
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
```

The binary `in` operator when a pplied to a string and an object, tells you if that object has a property with that name.

To find what property an object has use the `Object.keys` function. give it an object and it returns an array of strings. without the objects property names.

```js
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```

`Object.assign` function
: Copies all properties from one object into another.

```js
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

Arrays,a kind of object specialized for storing sequences of things.

Example, Journal of Jacues keeps as an array of objects.
```js
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
```

### Mutability

Object values can be modified.

Values like `numbers, strings and boleans are all `_immutable_`

it is **impossible** to change value of those types.

You can combine and derive new values, but specific string value will always remain the same.

Objects work differently. You **can** change their properties, causing a single object value to have different content at different times.

With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:

```js
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```
>The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

### The Lyncanthrope's Log
[The Lyncanthrope's LOG](https://eloquentjavascript.net/04_data.html#h_qHGOoBxOeE)
```js
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
```  
>if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.

Jacques records the day.

```js
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
```

Correlation
: is a measure of dependence between _statistical variables_.

Different than programming variable

Zero correlation
: the variables are not related.

Correlation of one
: Perfectly related



### Computing Correlation

To extract a two-by-two table for a specific event from the journal, we must loop over all the entries and tally how many times the event occurs in relation to squirrel transformations.

```js
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
```
Arrays have an `includes` method that checks whether a given value exists in the array. The function uses that to determine whether the event name it is interested in is part of the event list for a given day.





### Array loops

```js
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
console.log(JOURNAL);
```
This loop is common in classic javascript. Going over array one by one element at a time. comes up a lot.

simpler way:

```js
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```
When a `for` loop looks like this, with the word `of` after a variable definition, it will loop over the elements of the value given after `of`. This works not only for arrays but also for strings and some other data structures.


### The Final analysis

We need to compute a correlation for every type of event that occurs in the data set. To do that, we first need to find every type of event.

```js
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]
```
By going over all the events and adding those that aren’t already in there to the events array, the function collects every type of event.

Using that, we can see all the correlations.
```js
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// and so on...
```

### Further Arraylogy

`push` & `pop` earlier to remove and add elements at the end of an array

The corresponding methods for adding and removing things from an array are called `shift` and `unshift`

```js
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```

You add tasks to the end of the queue by calling `remember("groceries")`, and when you’re ready to do something, you call `getTask()` to get (and remove) the front item from the queue.
The `rememberUrgently` function also adds a task but adds it to the front instead of the back of the queue.

To search for a specific value, arrays provide an `indexOf` method

To search from the end instead of the start, there’s a similar method called `lastIndexOf`.

```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```

Another fundamental array method is `slice`, which takes start and end indices and returns an array that has only the elements between them.
```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```
The following example shows both `concat` and `slice` in action. It takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.
```js
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
```

### Strings and their properties

### Rest parameters

### The Math object

### Destructuring

### JSON
_JSON_ (pronounced “Jason”), which stands for JavaScript Object Notation. It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.

JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions.
> All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

A journal entry might look like this when represented as JSON data:

```JSON
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```

JavaScript gives us the functions `JSON.stringify` and `JSON.parse` to convert data to and from this format.

`JSON.stringify`
: takes a JavaScript value and returns a JSON-encoded string.

`JSON.parse`
: takes such a string and converts it to the value it encodes.

```js
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]

```


### Summary

>Objects and arrays (which are a specific kind of object) provide ways to group several values into a single value. Conceptually, this allows us to put a bunch of related things in a bag and run around with the bag, instead of wrapping our arms around all of the individual things and trying to hold on to them separately.

>Most values in JavaScript have properties, the exceptions being null and undefined. Properties are accessed using value.prop or value["prop"]. Objects tend to use names for their properties and store more or less a fixed set of them. Arrays, on the other hand, usually contain varying amounts of conceptually identical values and use numbers (starting from 0) as the names of their properties.

> There are some named properties in arrays, such as length and a number of methods. Methods are functions that live in properties and (usually) act on the value they are a property of.

>You can iterate over arrays using a special kind of for loop—for (let element of array).



## Chapter 5 | Higher-Order Functions

### Abstraction

### Abstracting Repetition

### Higher-Order Functions

### Script Data Set

### Filtering Arrays


### Transforming with manipulate

### Summarizing with Reduce

Other common thing to do with arrays.
- Compute single value from themseles
- Finding script with most characters.

`reduce` a higher-order operation
: it Builds a value repeatedly taking a single element from an array and combining it with the current value.





### Composability





























































<!--









## Chapter 6

### Summary

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11

## -->


## Chapter 13 | Javascript and the browser

### networks and internet

“A _network protocol_ describes a style of communication over a network. There are protocols for sending email, for fetching email, for sharing files, and even for controlling computers that happen to be infected by malicious software.”

For example, the Hypertext Transfer Protocol (HTTP) is a protocol for retrieving named resources (chunks of information, such as web pages or pictures). It specifies that the side making the request should start with a line like this, naming the resource and the version of the protocol that it is trying to use:

`GET /index.html HTTP/1.1`


The Transmission Control Protocol (TCP) is a protocol that addresses this problem. All Internet-connected devices “speak” it, and most communication on the Internet is built on top of it.

A TCP connection works as follows: one computer must be waiting, or listening, for other computers to start talking to it. To be able to listen for different kinds of communication at the same time on a single machine, each listener has a number (called a port) associated with it.

### The Web

Each document on the Web is named by a Uniform Resource Locator (URL), which looks something like this:

```
http://eloquentjavascript.net/13_browser.html
|      |                      |               |
protocol       server               path
```
_The first part_ tells us that this URL uses the HTTP protocol (as opposed to, for example, encrypted HTTP, which would be https://).   
_Then comes the part_ that identifies which server we are requesting the document from.  
_Last is a path string_ that identifies the specific document (or resource) we are interested in.


### HTML

HTML, which stands for _Hypertext Markup Language_, is the document format used for web pages.

### HTML and JavaScript

In the context of this book, the most important HTML tag is <script>. This tag allows us to include a piece of JavaScript in a document.

```HTML
<h1>Testing alert</h1>
<script>alert("hello!");</script>
```
the alert function resembles `prompt`, in that it pops up a little window, but only shows a message without asking for input.

The `<script>` tag can be given an `src` attribute to fetch a script file (a text file containing a JavaScript program) from a URL.

```HTML
<h1>Testing alert</h1>
<script src="code/hello.js"></script>
```

### In the sandbox

Isolating a programming environment is called sandboxing, the idea being that the program is harmlessly playing in a sandbox. But you should imagine this particular kind of sandbox as having a cage of thick steel bars over it so that the programs playing in it can’t actually get out.

## Chapter 14 | The Document Object Model

### Document structure


```HTML
<!doctype html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.</p>
  </body>
</html>
```

This page has the following structure:

![html boxes](https://eloquentjavascript.net/img/html-boxes.svg)

This representation is called the Document Object Model, or DOM for short.

The global binding `document` gives us access to these objects. Its `documentElement` property refers to the object representing the `<html>` tag. Since every HTML document has a head and a body, it also has `head` and `body` properties, pointing at those elements.

### Trees

We call a data structure a _tree_ when it has a branching structure, has no cycles (a node may not contain itself, directly or indirectly), and has a single, well-defined _root_. In the case of the DOM, `document.documentElement` serves as the root.

Application nodes may have children, whereas identifiers and values are leaves, or nodes without children.

The same goes for the DOM. Nodes for elements, which represent HTML tags, determine the structure of the document. These can have child nodes. An example of such a node is `document.body`. Some of these children can be leaf nodes, such as pieces of text or comment nodes.

Each DOM node object has a nodeType property, which contains a code (number) that identifies the type of node. Elements have code 1, which is also defined as the constant property `Node.ELEMENT_NODE`. Text nodes, representing a section of text in the document, get code 3 (`Node.TEXT_NODE`). Comments have code 8 (`Node.COMMENT_NODE`).

Another way to visualize our document tree is as follows:
![html tree](https://eloquentjavascript.net/img/html-tree.svg)

The leaves are text nodes, and the arrows indicate parent-child relationships between nodes.

### The standard

Standards are often useful. But in this case, the advantage (cross-language consistency) isn’t all that compelling. Having an interface that is properly integrated with the language you are using will save you more time than having a familiar interface across languages.

As an example of this poor integration, consider the `childNodes` property that element nodes in the DOM have. This property holds an array-like object, with a `length` property and properties labeled by numbers to access the child nodes. But it is an instance of the `NodeList` type, **not a real array**, so it **does not** have methods such as `slice` and `map`.

there is no way to create a new node and immediately add children or attributes to it. Instead, you have to first create it and then add the children and attributes one by one, using side effects.

### Moving through the tree

DOM nodes contain a wealth of links to other nearby nodes. The following diagram illustrates these:
![html links](https://eloquentjavascript.net/img/html-links.svg)

























































































































### END
