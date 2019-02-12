

# Notesm

*You can write notes for each chapter here*.
## Intro

## Chapter 1 | Values, Types, and Operators

### Values/Waarden
Chunks/Blokken worden waarden/values genoemd  
Alle waarde zijn gemaakt van bits.

Waarden zijn:
* Getallen
* Stukjes text
* Functies
* etc..

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
> De + en * symbolen worden _**operators**_ genoemd.

vermenigvuldigen gebeurt eerst, maar net als bij wiskunde kan het ook zo:
```javascript
( 100  +  4 ) *  11
```
___

### String

The next basic data type is the string. Strings are used to represent text. They are written by enclosing their content in quotes.

```js
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```


### Samenvatting

> We hebben in dit hoofdstuk vier typen JavaScript-waarden bekeken: getallen, tekenreeksen, Booleans en niet-gedefinieerde waarden.

> Dergelijke waarden worden gemaakt door hun naam ( `true`, `null`) of waarde ( `13`, `"abc"`) in te voeren. U kunt waarden combineren en transformeren met operatoren. We zagen binaire operatoren voor rekenkundige ( `+`, `-`, `*`, `/`, en `%`), tekenreekssamenvoegingsoperator ( `+`), vergelijking ( `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`), en logica ( `&&`, `||`), evenals verschillende unaire operatoren ( -om een nummer te ontkennen, !te ontkennen logisch en typeofom het type van een waarde te vinden) en een ternaire operator ( ?:) om een ​​van de twee waarden te kiezen op basis van een derde waarde.

> Dit geeft u voldoende informatie om JavaScript als een zakrekenmachine te gebruiken, maar niet veel meer. In het volgende hoofdstuk worden deze uitdrukkingen gecombineerd in standaardprogramma's.

## Chapter 2 | Program Structure

### Expressions and statements
A fragment of code that produces a value is called an expression. Every value that is written literally (such as 22 or "psychoanalysis") is an expression. An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.

>A program is a list of statements.

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
```js
let ten = 10;
console.log(ten * ten);
// → 100
```

### Binding Names

Bindings die gereserveerd zijn voor javascript
The full list of keywords and reserved words is rather long.
```js
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```



## Chapter 3 | Functions
Functions zijn het brood en boter van JS.

### Defining a function

Value of a Binding is a function
```javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```

### Bindings and scopes

### Nested scope

### Functions as values

### Declaration notation

### Arrow functions

### The call stack

### Optional Arguments

### Closure

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
