//06 - Syntax Parser

// A program that reads your code and determines 
// what it does and if the grammar is valid
// for instance: (compilers)

// Lexical Environment:
// Where you write something is important
// What surronds what is written
// WHERE and WHAT the compiler look for

// Execution Context:
// A wrapper to help manage the code that is running
// lexical environments run via execution contexts.
// It can contain things beyond what you've written
// in your code.

// 07 - Conceptual Aside
// Name/Value Pairs and Objects

// Object = A collection of name value Pairs

// var address = new Object;

// address:{
// 	Street: 'Main',
// 	Number: 100,
// 	Appartment:{
// 		Floor: 3,
// 		Number: 301
// 	} 
// }

// 09 - Global Environment and The Global Object

// Global - is a thing that's accessible anywhere
// on your code.

// Execution context - Global Object and 'this'
 
// Global Object = the 'window' object

// var a = 'hello';

// at the console

// window.a;

// 'hello';

// 10 - The execution Context(Creation and Hoisting)

// Hoisting - the order of things executed are different
// than other languages - Variables and Functions

// b();
// console.log(a);

// var a = 'Hello World';

// function b(){
// 	console.log('called b!');
// };

// Execution context is created (creation phase)

// Global Object -> 'this' -> Outer Environment

//All Variables who are not set (yet) are undefined

// 11 - Conceptual Aside(Javascript and 'undefined')

// not defined VS undefined = they're not the same

// undefined - actually a special value that JS has
// internally - the var. hasn't been set

// var a;
// console.log(a);

// if(a === undefined){
// 	console.log('a is undefined');
// }else{
// 	console.log('a is defined!');
// }

// var a = 'Hello World';
// console.log(a);

// if(a === undefined){
// 	console.log('a is undefined');
// }else{
// 	console.log('a is defined!');
// }

// a is not defined Uncaught reference error = the
// browser is saying "I don't have this on memory"
// "where is var?"

// 12 - The Execution Context (Code Execution)

// function b(){
// 	console.log('Called b!');
// }

// b();

// console.log(a);

// var a = 'Hello World!';

// console.log(a);

// 13 - Conceptual Aside (Single Threaded, 
// 	Synchronous Execution)

// Single Threated:
// One command at a time 

// under the hood of the browser, maybe not

// Synchronous: One at time - one line of code

// 14 - Function Invocation and the Execution Stack

// Invocation = Running a Function using ();

// Execution Stack = one on top of the other

// function b(){

// }

// function a(){
// 	b();
// }

// a();

// Global Execution Context = code created and 
// code is executed

//15 - Functions, Context and Variable Environments

// Variable Environment = WHERE the variables live
// and how they relate to each other in memory

// Global VS Scope

// function b(){
// 	var myVar;
// 	console.log(myVar);
// }

// function a(){
// 	var myVar = 2;
// 	console.log(myVar);
// 	b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

// 16 - The Scope Chain = The links of Outer 
//Environment reference

// function b(){
// 	console.log(myVar);
// }

// 	function a(){
// 		var myVar = 2;
// 		b();
// 	}

// var myVar = 1;
// a();

//The execution Stack = Order of execution

// b() Execution Context (create and execute)
// empty var

// a() Execution Context (create and execute)
// myVar = 2;

// Global Execution Context (created code is executed)
// myVar = 1

//b() reference the Outer Environment

//LEXICAL ENVIRONMENT => 
// b() sits in the same level as var myVar = 1
//b() isn't inside any function

//Changing the Lexical Environment(SCOPE)

// function a(){
	
// 	function b(){
// 		console.log(myVar);
// 	}

// 	var myVar = 2;
// 	b();
// }

// var myVar = 1;
// a();

//17 - Scope, ES6, AND let

//Scope:
// Where a variable is available in your code
// and if it's truly the same variable, or a new
// copy

// ES6
// let = a new way to declare variables(var still
// exists). 

// Block scoping = declare a variable and during
// the execution and you're not alowed to run until
// that piece of code is running. 
// It's declared inside a block {} and is only 
// available is inside that block.

// if(a > b){
// 	let c = true;
// }

// 18 - Asynchronous Callbacks

// Asynchronous = More than one at a time.

// The JS Engine doesn't exist by itself:

// - The Browser:

// 	- Rendering Engine
// 	- Javascript Engine
// 	- HTTP Request

// Event Queue = Notifications of events that are 
// happening. I.E. -> Click event and a HTTP Request

//long running function
// function waitThreeSeconds(){
// 	var ms = 3000 + new Date().getTime();
// 	while (new Date() < ms){}
// 	console.log('finished function');
// }

// function clickHandler(){
// 	console.log('click event!');
// }

//listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

// 19 - Conceptual Aside - Types and Javascript
// Dynamic Typing = you don't tell the Engine what
// type of data a variable holds, it figures it out 
// while your code is running
// variables can hold different types of values 
// because it's all figured out during execution

// Dynamic Typing = you can change the type of
// the variable whenever you want.

// 20 - Primitive Types = A type of data that 
// represents a single value, that is not an object

// 1) undefined = represents a lack of existence
// (DON'T USE IT)

// 2) null = represents a lack of exists 
// (you can set a variable to this)

// 3) boolean = true or false

// 4) number = Floating point number (there's always
// some decimals). Unlike other programming languages
// there's only one 'number' type and it can make
// math weird

// 5) String = a sequence of characters

// 6) Symbol = ES6

// 21 - Conceptual Aside - Operators

// Operator = A special function that is 
// syntatically (written) differently
// generally, operators take two parameters and 
// return one result.
// i.e. (+, -, >, <, *)

// 22 - Operators Precedence and Associativity

// Operator Precedence = Which operator function
// gets called first

// Functions are called in order precedence 
// (HIGHER precedence wins)

// Associativity = what order operator functions get
// called in: left-to-right or right-to-left
// when functions have the SAME precedence.

// var add = 3 + 4 * 5;
// console.log(add);


// var a = 2, b = 3, c = 4;

// a = b = c;

// console.log(a);
// console.log(b);
// console.log(c);

// 4
// 4
// 4

// assignment is '=' right-to-left;

//a way of doing left-to-right -> using ()

// var a = (3 + 4) * 5;

// console.log(a);

// 35

//23 - é um doc

//24 - Conceptual Aside (Coercion)

// Coercion - Converging a value from one type to
// another

// This happens quite often in Javascript because it's
// dynamically typed

// var a = 'hello' + ' world';

// console.log(a);

// var coercion = 1 + '2';

// console.log(coercion);

// ricardo@MacBook-Pro-de-Ricardo.local:~/Desktop/code/curso-pendrive-js/source-code$ node app.js
// 12
// ricardo@MacBook-Pro-de-Ricardo.local:~/Desktop/code/curso-pendrive-js/source-code$ 

// 25 - Comparison Operators

// console.log(1 < 2 < 3);

// true;

// console.log(3 < 2 < 1);

//true ?????? - LEFT TO RIGHT!

// First JS will read this:

// console.log(3 < 2); 

// false;

// Next - JS will understand like this

// console.log(false < 1);

// JS will read the sentence above like this:

// console.log(0 < 1);

// ricardo@MacBook-Pro-de-Ricardo.local:~/Desktop/code/curso-pendrive-js/source-code$ node app.js
// true

// JS will coerce false into a number (zero)! 

// Meaning false = 0 and 1 = true...holly shit!

// Converting a string into a number (not realible)

// Number('3');
// 3

// Trying using undefined:

// Number(undefined);
// NaN

// NaN = JS will say 'hey I try to convert this into
// a number but is Not a Number(NaN)'

// ALWAYS USE TRIPLE/STRICT EQUALITY ===  

// Because === will make sure of the type

// 3 === 3;
// true
// "3" === 3;
// false
// "3" === "3";
// true

// var a = 0;
// var b = false;

// if(a === b){
// 	console.log('They are equal');
// }else{
// 	console.log('Nope, not equal')
// }

// STRICT INEQUALITY !==

// var a = 0;
// var b = false;

// if(a !== b){
// 	console.log('They are not equal');
// }else{
// 	console.log('Equal');
// }


// ES6 NEW COMPARISON - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// Object.is

// 27 - Existence and Booleans

// var a;

//goes to internet and looks for value

// a = 'hi';

// if(a){
// 	console.log('Something is there');
// }

// we can check if a variable has a value
//only if the variable has a value the code runs
// we are using COMPARISON to our own advantage

// 28 - Default values

// function greet(name){
// 	console.log(name);
// 	console.log('Hello ' + name);
// }

// greet();

// ricardo@MacBook-Pro-de-Ricardo.local:~/Desktop/code/curso-pendrive-js/source-code$ node app.js
// undefined
// Hello undefined

// The function greet() still runs the same way
// even without setting a value to the 
// name parameter 

// SETTING UP A DEFAULT VALUE TO A parameter
// WITHOUT USING AN IF STATEMENT

// function greet(name){
// 	name = name || '<Your name here>';
// 	console.log('Hello ' + name);
// }

// greet('Rick');
// greet();

// ricardo@MacBook-Pro-de-Ricardo.local:~/Desktop/code/curso-pendrive-js/source-code$ node app.js
// Hello Rick
// Hello <Your name here>

// 29 - Framework Aside

// FRAMEWORK VS LIBRARY

// But here we're gonna talk about them like 
// they are the same. A group of JS code that
// can be reusable

// DEFAULT VALUES AND EXECUTION CONTEXT

// We're going create two fake libraries:
// lib1.js and lib2.js and call them on the index.html
//On both of them we create the same variable
//just to observe how index.html will understand
//them with app.js

// console.log(libraryName);

// This is what happens when two variables collide
// ReferenceError: libraryName is not defined
//     at Object.<anonymous> (/Users/ricardo/Desktop/code/curso-pendrive-js/source-code/app.js:507:13)


// lib1.js and lib2.js are not creating two different
// context, index.html is litterally just stacking
// code on ONE CONTEXT = GLOBAL EXECUTION.
//the GLOBAL EXECUTION VARIABLE

//After checking on lib2.js here is console result:

// Lib 1

// 30 - Objects and Functions

// Objects and Functions = they're related almost
// the same

// Objects and the Dot  

// Object are a collection of values

// Properties and Methods (boolean or string, etc)

// Child property (name : value pear)

// Method (a function inside a method)

// ALL SIT IN memory

// Object has reference to where the Properties 
// and methods live and all of them sit in memory

// How to access properties and methods:

// var person = new Object();

//that are better way to do this

// person['firstname'] = 'tony';
// person['lastname'] = 'alicea';
// Acessing the property
// person.firstname;
// "tony"

// var firstNameProperty = 'firstname';

// console.log(person);
// console.log(person[firstNameProperty]);

//Dot Operator
// console.log(person.firstname);
// console.log(person.lastname);

//Object sitting inside an object
// person.address = new Object();
//Child object
// person.address.street = '111 Main St.';
// person.address.city = 'New York';
// person.address.state = 'NY';

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person['address']['state']);

// 31 - Objects and Object literals

// Object literal{}

// var person = {}

// console.log(person);

//var x = {} -> that's enough to create an object

// var person = {
// 	firstName: 'Tony',
// 	lastName: 'Alicea',
// 	address: {
// 		street: '111 Main St.',
// 		city: 'New York',
// 		state: 'NY'
// 	}
// };

// console.log(person);

// var Tony = {
// 	firstName: 'Tony',
// 	lastName: 'Alicea',
// 	address: {
// 		street: '111 Main St.',
// 		city: 'New York',
// 		state: 'NY'
// 	}
// };

// function greet(person){
// 	console.log('Hi ' + person.firstName);
// }

// greet(Tony);

//Object literal Function = creating a object 
//on the fly
// greet({ 
// 	firstName: 'Mary', 
// 	lastName: 'Doe' 
// });

//Adding a second object to an existing object
// Tony.address2 = {
// 	street: '333 Second St.'
// }

// console.log(Tony);

//32 - Framework Aside - Faking Namespaces

// Namespace - A container for variables and 
// Functions 
// Typically to keep variables and functions with 
// the same name separate

// var greet = 'Hello';
// var greet = 'Hola';

// var spanish = {};
// var english = {};

// spanish.greet = 'Hola!';

// console.log(spanish);

//The Dot separator reads from left to right
// english.greetings.greet = 'Hello';

//I can't do that ON THE FLY because I get an error
// Uncaught TypeError: Cannot set property 'greet' of undefined

//This is because 'greetings' wasn't defined
 
// Faking namespaces = a variable created just
// to CONTAIN value

// var english = {
// 	greetings: {
// 		basic: 'Hello!'
// 	}
// };

// console.log(english.greetings);

// 33 - JSON and Object Literals  

// JSON = Javascript Object Notation  

// JSON is inspired by Object Literal Notation
// but they are not the same!

// JSON properties always need to be in 'quotes'

// {
// 	'firstName': 'Mary',
// 	'isProgrammer': true
// }

//stringify = Transforming a object literal 
// into JSON

// var objectLiteral = {
// 	firstName: 'Mary',
// 	isProgrammer: true
// }

// console.log(JSON.stringify(objectLiteral));

// CONSOLE
// {"firstName":"Mary","isProgrammer":true}

//Doing the Oposite - JSON into an object using
// JSON.parse

// var jsonValue = JSON.parse('{ "firstName": "Mary",
// 	"isProgrammer": true }');

// console.log(jsonValue);

//34 - Functions are objects

// First class functions:
// Everything you can do with other types you can do with Functions
// Assign them to variables, pass them around, create them on the fly

// A function resides on memory - has special properties
// You can attach functions to an object, primitive, functions
// BECAUSE IS AN object
// A function can have Name, but this is optional, otherwise it's anonymous
// Anonymous Function = A function that doesn't have a name
// A function is invocable using () = it has a context of execution

// function greet(){
//   console.log('hi');
// }

// Since greet() is an object, I can create
// a property to that object.

// greet.language = 'english';

// console.log(greet);
// VM194:2 greet(){
//   console.log('hi');
// }
// undefined
// console.log(greet.language);
// VM246:2 english

// 35 - Function Statements and Function Expressions
//
// Expression = A unit of code that results in a value
//
// A expression ends in a value and that value
// doesn't have to save to a variable

// a = 3;
// 3
// 1 + 2
// 3

// All of the examples return a value
// that's why they are an EXPRESSION

// if(a === 3){
  // run some code
// }

// we call this an IF STATEMENT because this always
// return a value
// inside this IF Statement we have an EXPRESSION
// a === 3

// function greet(){
//   console.log('hi');
// }

// the function greet doesn't return a value
// so far this is a just an statement

// EXPRESSION

// var anonymousGreet = function(){
//   console.log('hi');
// }
//
// anonymousGreet();

// This is an expression because after creating
// an object and storing to a variable on memory
// IT RETURNS A VALUE!

// Creating a value on the fly

// function log(a){
//   console.log(a);
// }

// log(3);
// log("creating on the fly");
// log({
//   greeting: 'this is an object'
// });

// app.js:77 3
// app.js:77 creating on the fly
// app.js:77 Object {greeting: "this is an object"}

// FUNCTIONAL PROGRAMMING = First class functions

// function log(a){
//   a();
// }
//
// log(function(){
//   console.log('hi');
// });

// I'm calling a function FROM a function
// on the first function we're saying
// invoke your code! a();

// 36 - Conceptual Aside
// By value VS By reference

// On both concepts we are talking about VARIABLES

// var a = 'something';

// This is a Primitve value

// var b = a;

// This is a copy of a Primitve Value

// This is called BY VALUE = two variables became
// the same by copying one value to another
// place in memory - TWO PLACES in memory

// BY REFERENCE =  the same place in memory for 2 variables
//Both of them POINTS TO THE SAME OBJECT
// No new object is created
// No copy of the object is created

//by value (primitives)

// var a = 3;
// var b;
//
// b = a;
// a = 2;
//
// console.log(a);
// console.log(b);

//On the console
// 2
// 3

// by reference (all objects (including functions))

// var c = { greeting: 'hi' };
// var d;

// d = c;
// c.greeting = 'hello'; //mutate

//Mutate = To change something
//Immutable = means it can't be change

//by reference = pointing to same location
//in MEMORY. ONE PLACE IN MEMORY.

// console.log(c);
// console.log(d);

// { greeting: 'hello' }
// { greeting: 'hello' }

//by reference (even as parameters)

// function changeGreeting(obj){
// 	obj.greeting = 'Hola'; //mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

//equals operator sets up new memory space
//(new address)
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);

//at the console
// { greeting: 'howdy' }
// { greeting: 'Hola' }

//TWO DIFFERENT PLACES IN MEMORY
//just using the EQUALS operator =

// Primitive Types = By Value
// Objects = By Reference 

//37 - Objects, Functions and 'this'

// When a Function is invoked () a new
// Execution Context is created (CREATION PHASE)

// Execution Context is important for 2 things
// ORDER of code being executed (EXECUTION STACK)
// HOW that piece of code is running

// Execution Context:

// - Variable Environment = WHERE the variable lives

// - 'this' = pointing at a different object depending
// on HOW the function is invoked () / called
// 'this' should point to a different object 
// (for example) 

// - Outer Environment = JS will look to other
// reference in the code OUTSIDE of the variable
// environment 

// 'this' in a Global Object (Global Context)
// console.log(this);

//Window {external: Object, chrome: Object, document: document, speechSynthesis: SpeechSynthesis, caches: CacheStorage…}

// function a(){
// 	console.log(this);
// }

// a();

//also window object
//if you're just invoking the function
//you're still in the global context

// var b = function(){
// 	console.log(this);
// }

// b();

//also window object
//global execution context
//this keyword still points
//to the same place in memory
//THE GLOBAL OBJECT

// function a(){
// 	console.log(this);
// 	this.newVariable = 'hello';
// } 

// a();

// console.log(newVariable);

//hello

//We gotta watch out using  'this'
//because we could be referencing
//to the GLOBAL OBJECT = Window Object

//Creating a New Object Literal {}

// var c = { 
// 	//I can create a method
// 	name: 'the c object',
// 	//creating a Anonymous function(no name)
// 	log: function(){
// 		console.log(this);
// 	}
// }

//Everytime a function is invoked = A new context
//is available
// c.log();

//At the console
//Object {name: "the c object"}
//here the 'this' keyword is pointing
//to the object -> c = {}

// var c = {
// 	name: 'the c object',
// 	log: function(){
// 		this.name = 'updated c object';
// 		console.log(this);
// 	}
// }

// c.log();

// Object {name: "updated c object"}
// Since we're inside of the C object context
// the log function can even update a property of 
// this object using this.property = 

//Causing a BUG

// var c = {
// 	name: 'the c object',
// 	log: function(){
// 		this.name = 'updated c object';
// 		console.log(this);

// 		//here is the WEIRD PART
// 		var setName = function(newname){
// 			//mutating my object? NO!
// 			//this is pointing to GLOBAL!!!
// 			this.name = newname;
// 		}
// 		setName('Updated again! the c object');
// 		console.log(this);
// 	}
// }

// c.log();


// Object {name: "updated c object"}
//WE WERE EXPECTING TO SEE ('Updated again! the c object')

//FIXING the BUG 
// var c = {
// 	name: 'the c object',
// 	log: function(){
// 		//here we FIX the 'this'/global bug
// 		var self = this;

// 		self.name = 'updated c object';
// 		console.log(self);

// 		var setName = function(newname){
// 			self.name = newname;
// 		}
// 		setName('Updated again! the c object');
// 		console.log(self);
// 	}
// }

// c.log();

//at the console
//Object {name: "updated c object"}
//Object {name: "Updated again! the c object"}

//38 - Arrays - Collections of Anything

//Array literal syntax = []
// var arr = [1, 2, 3];

//Array in JS are zero Base = position[0],[1],etc
//Dynamic Typing = it can change

// var arr = [
// 	1,
// 	false,
// 	{
// 		name: 'Tony',
// 		address: '111 Main St.'
// 	},
// 	function(name){
// 		var greeting = 'Hello ';
// 		console.log(greeting + name);
// 	},
// 	"a string!"
// ];

// console.log(arr);
// //arr[2] = {}
// arr[3](arr[2].name);

//39 - Arguments and SPREAD

// Arguments = The parameters you pass to a 
// function
// Javascript gives you a keyword of the same
// name which contains them all.


// function greet(firstName, lastName, language){
// 	//creating a default value to a parameter
// 	language = language || 'en';
// 	//the 2 language = undefined || 'en'

// 	//checking to see if there are parameters
// 	if(arguments.length === 0){
// 		console.log('Missing parameters');
// 		console.log('-------------');
// 		return; //let us get out of the function
// 	}

// 	console.log(firstName);
// 	console.log(lastName);
// 	console.log(language);
// 	//arguments is a keyword
// 	console.log(arguments);
// 	console.log('arg: 0: ' + arguments[0]);
// 	console.log('-------------');
// }

// greet();
// //undefined - because of Hosting - memory space
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'es');

//you can pass a just a part of the arguments

//40 - Framework Aside - Function Overloading
// function greet(firstName, lastName, language){
// 	//default value is not stored in a var
// 	language = language || 'en';

// 	//Checking for the language
// 	if(language === 'en'){
// 		console.log('Hello ' + firstName + ' ' + lastName);
// 	}

// 	if(language === 'es'){
// 		console.log('Hola ' + firstName + ' ' + lastName);
// 	}
// }

// function greetEnglish(firstName, lastName, language){
// 	greet(firstName, lastName, 'en');
// }

// function greetSpanish(firstName, lastName, language){
// 	greet(firstName, lastName, 'es');
// }

// greetEnglish('John', 'Doe');
// greetSpanish('Juan', 'Ramone');

//Don't worry about function overloading!
//Within JS Framework you see this pattern

//42 - Conceptual Aside - Syntax Parsers
// Syntax parsers = Read your code and see if 
// it's able to RUN and what you're trying to DO

//return => goes character by character 
//making assumptions, stating rules 
//AND MAKING CHANGES
//using a SET OF RULES

//43 - Dangerous Aside - Automatic Semicolon Insertion
//Semicolons are OPTIONAL -> ;
//JS looks in the syntax using Syntax parser
//JS puts a semicolon when JS doesn't see it
//that's why we put semicolons to avoid

// function getPerson(){

// 	return
// 	{
// 		firstName: 'Tony'
// 	}
// }

// console.log(getPerson());

//at the console
//undefined

//WHY - the syntax parser inserted automaticaly
//a SEMICOLON

//so return is return; -> jumps out of the function

// FIXING
// function getPerson(){

// 	return{
// 		firstName: 'Tony'
// 	}
// }

// console.log(getPerson());

// { firstName: 'Tony' }
//CORRECT!

// 43 - Framework Aside (Whitespace)

// Whitespace = Invisible characters that create 
// literal "space" in your written code

// Carriage returns, tabs, spaces.

//a list of variables
// var firstName, lastName, language;

// var person = {
// 	firstName: 'John',
// 	lastName: 'Doe'
// }

// console.log(person);

// 44 - Immediately Invoked Functions Expressions 
//(IIFEs)

//function statement
// function greet(name){
// 	console.log('Hello ' + name);
// }

// greet();

//using a function expression  
//kinda function literal
// var greetFunc = function(name){
// 	console.log('Hello ' + name);
// }

// greetFunc();

//invoking a function on the fly
//this is an IIFE
// var greeting = function(name){
// 	console.log('Hello ' + name);
// }();

// var greeting = function(name){
// 	return 'Hello ' + name;
// };

// console.log(greeting());
// console.log(greeting('John'));

//at the console
// Hello undefined
// Hello John


//IIFE defining a parameter
// var greeting = function(name){
// 	return 'Hello ' + name;
// }('John');

//without the () because it's up there!
//immediately after creating
// console.log(greeting);

//Hello John

//creating a self invoked function
//anonymous function

// var firstName = 'Jake';

// (function(name){
	
// 	var greeting = 'IIFE: Hello';
// 	console.log(greeting + ' ' + name);

// }(firstName)); //IFFE

//45 - Framework Aside - IIFE
//Framework use self invoked function
//to prevent variables to collide

//46 - Understanding Closures

// function greet(whatToSay){

// 	return function(name){
// 		console.log(whatToSay + ' ' + name);
// 	}
// }

//greet('Hi') = invoking a function that
// return(s) another function
//and then I can invoke the function
//that it was returned = function(name)
// greet('Hi')('Tony');

// var sayHi = greet('Hi');

// sayHi('Tony');

// Closure = a simple feature of the JavaScript
// language
// it doesn't matter WHEN we invoke a function
// JS make sure we have ACCESS to the VARIABLES
// that we suppose to. JS make sure it's 
// SCOPE is INTACT.

//47 - Understanding Closures - Pt. 2

// function buildFunctions(){
	
// 	//the array will receive: function1,
// 	//function2 and function3
// 	var arr = [];

// 	for(var i = 0; i < 3; i++){
// 		arr.push(function(){
// 			console.log(i);
// 		})
// 	}

// 	return arr;
// }

// // get the array in a variable
// var fs = buildFunctions();

// // console.log(fs);

// // Array[3]

// // referencing an element inside of the array
// // fs[0] and then I call the function ();
// fs[0]();
// fs[1]();
// fs[2]();

//at the console

// 3
// 3
// 3

// why = that is because i is 3 in each of the 
// 3 functions created in the for loop and pushed
// to the arr[function0, function1, function2]

// fs Execution context:
// i = 3; arr[f0, f1, f2] 

//console.log(i) is the KEY
//this is only executed when we do this:
//fs[0]() and so on;
//when we console.log(fs) you see that there's
//only 3 functions sitting inside the array

//Another Closure Concept
//Changing the iterator in different 
//execution contexts

// function buildFunctions2(){
	
// 	//the array will receive: function1,
// 	//function2 and function3
// 	var arr = [];

// 	for(var i = 0; i < 3; i++){
// 		arr.push(
// 				//we need to create  
// 				//separeted execution contexts
// 				//that's why we have an IIFE
// 				// and a First Class Function

// 				// (j) will be stored in each
// 				//of the execution contexts
// 				// (j) = 0 in one exec.
// 				// (j) = 1 in another exec. ETC
// 				(function(j){
// 					return function(){
// 						console.log(j);
// 					}
// 				}(i))
// 			)
// 	}

// 	return arr;
// }

// //get the array in a variable
// var fs2 = buildFunctions2();

// //referencing an element inside of the array
// //fs[0] and then I call the function ();
// fs2[0]();
// fs2[1]();
// fs2[2]();

//NOW we see the for loop with its different
//values of iterators
// 0
// 1
// 2

//48 - Function Factories

//Function Factory = a function that returns or
//mix other thing to me.

// function makeGreeting(language){
	
// 	return function(firstName, lastName){
		
// 		//language will look up the scope chain
// 		//and it will find its definition usage
// 		//on makeGreeting()
// 		if(language === 'en'){
// 			console.log('Hello ' + firstName + ' ' + lastName);
// 		}

// 		if(language === 'es'){
// 			console.log('Hola ' + firstName + ' ' + lastName)
// 		}
// 	}
// }

// //one execution context here = ('en')
// var greetEnglish = makeGreeting('en');

// //another execution context here = ('es')
// var greetSpanish = makeGreeting('es');

// //Closure = each of the execution context has 
// // its own variable environment

// //everytime we call a function we get its own
// //execution context and any function created
// //inside of that function will GET ITS 
// // OWN EXECUTION CONTEXT


// console.log(greetEnglish('Rick', 'Labate'));
// console.log(greetSpanish('Rick', 'Labate'));


// function makeAdder(x){
// 	return function(y){
// 		return x + y;
// 	}
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(10));

// In essence, makeAdder is a function factory — 
// it creates functions which can add a specific 
// value to their argument. In the above example 
// we use our function factory to create two new 
// functions — one that adds 5 to its argument, 
// and one that adds 10.

// add5 and add10 are both closures. 
// They share the same function body definition, 
// but store different environments. In add5's 
// environment, x is 5. As far as add10 is 
// concerned, x is 10.

//49 - Closures and Callbacks

// function sayHiLater(){

// 	var greeting = 'Hi!';

// 	//setTimeOut receives a function as a
// 	//parameter = First-class Function AND
// 	//a timer (3000) to setTime
// 	setTimeout(function(){
		
// 		//thanks to the closure, greeting
// 		//can go up inside the scope and find
// 		//variable inside sayHiLater()
// 		console.log(greeting);
// 	}, 3000);

// }

// sayHiLater();

// Callback Function:
// A function you give to a another function, to be
// run when the other function is finished

// So the function you call (i.e. invoke), 
// 'calls back' by calling the function you gave
// it when it finishes.

// function tellMeWhenDone(callback){
// 	//do some work
// 	var a = 1000;

// 	//do some work
// 	var b = 2000;

// 	//the 'callback', it runs the function
// 	//I give it!
// 	callback();
// } 

// tellMeWhenDone(function(){
// 	console.log('I am done!');
// });


// tellMeWhenDone(function(){
// 	alert('I am done!');
// });

//50 - call(), apply(), bind()

//Variable Environ. - 'this' - Outer Environment

//All functions have access to a special methods

// var person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	getFullName: function(){

// 		var fullName = this.firstName + ' ' + this.lastName;
// 		return fullName;
// 	}
// }

//this will fail
// var logName = function(name1, name2){

// 	//this is the reason: 'this' will refer to
// 	//the GLOBAL OBJECT because its outside of
// 	//the object 'person'.
// 	console.log('Logged:' + this.getFullName());
// }

// // console.log(logName());

// //at the console
// //Uncaught TypeError: this.getFullName is not a function

// //logName is not a method!

// //How to fix with bind();

// var logPersonName = logName.bind(person);

// //I'm calling logName as an object and 
// //call the METHOD of the object .bind(person)

// //the 'this' on logName will be referencing
// //the 'getFullName()' method in person!
// logPersonName();

//at the console
// Logged:John Doe

//alternative method

// var logName = function(name1, name2){

// 	//we substitute 'this' for person
// 	//because we bind(person) at the end
// 	console.log('Logged:' + person.getFullName());
// }.bind(person);

// logName();

// var logName = function(lang1, lang2){

// 	console.log('Logged:' + this.getFullName());
// 	console.log('Arguments: ' + lang1 + lang2);
// 	console.log('-------------');
// }

// var logPersonName = logName.bind(person);

// logPersonName('en ');

//bind() creates a copy and I can tell what 'this'
//variable is

//APPLY()

// var logName = function(lang1, lang2){

// 	console.log('Logged:' + this.getFullName());
// 	console.log('Arguments: ' + lang1 + ' ' + lang2);
// 	console.log('-------------');
// }

// var logPersonName = logName.bind(person);

// logPersonName('en');

// //the first paremeter will tell what 'this'
// //should be
// logName.call(person, 'en', 'es');

// //Apply is different because it awaits an
// //ARRAY [] of parameters
// logName.apply(person, ['br', 'it']);

// //Alternative Apply IIFE
// (function(lang1, lang2){
// 	console.log('Logged:' + this.getFullName());
// 	console.log('Arguments: ' + lang1 + ' ' + lang2);
// 	console.log('-------------');
// }).apply(person, ['jp', 'ch']);

// //function borrowing
// var person2 = {
// 	firstName: 'Jane',
// 	lastName: 'Doe'
// }

// //we borrow a function using apply()
// person.getFullName.apply(person2);

// console.log(person.getFullName.apply(person2));


// //at the console
// //Jane Doe

// //FUNCTION CURRYING:

// // Creating a copy of a function but with some
// // preset parameters

// // Very useful in mathematical situations

// //function currying with bind()

// //with bind() we create a whole copy of the object
// //you're creating a copy of the function

// function multiply(a, b){
// 	return a * b;
// }

// //we are hardcoding a value the variable a
// //using 'this' keyword
// // var multipleByTwo = multiply.bind(this, 2);

// // console.log(multipleByTwo(4));

// //at the console
// //8

// //we could just leave it 'a' and 'b' empty
// //just using 'this' keyword
// var multipleByTwo = multiply.bind(this);
// console.log(multipleByTwo(5, 2));

// //we take a function 'multiply()' and create
// //a new whole context using 'multiply' as 
// //basis

// var multipleByThree = multiply.bind(this);
// console.log(multipleByThree(3, 3));

//51 - Functional Programming

//First class functions - using functions as
//objects

//to avoid time consuming functions like this

// var arr1 = [1,2,3];
// console.log(arr1);

//creating an arr based on arr1
// var arr2 =  [];

// for(var i = 0; i < arr1.length; i++){
// 	arr2.push(arr1[i] * 2);
// }

// console.log(arr2);

//we put work into functions
//how much you can put into a function?

//We use First-class functions
//on First-class functions we can pass
//functions as parameters of another
//function

//this function serves like a MODEL for the other ones below
// function mapForEach(arr, fn){
// 	var newArr = [];
// 	for(var i = 0; i < arr.length; i++){
// 		//here's functional programming
// 		//we call a function parameter
// 		//with an array
// 		newArr.push(fn(arr[i]));
// 	}
// 	return newArr;
// }

// var arr1 = [1, 2, 3];
// // console.log(arr1);

// // after calling MODEL we ask EXTRA work with function(item)
// // var arr2 = mapForEach(arr1, function(item){
// // 	//it should return a boolean
// // 	return item * 2;
// // });

// // console.log(arr2);

// // function(item) = i on the array
// var arr3 = mapForEach(arr1, function(item){
// 	//it should return a boolean
// 	return item > 2;
// });

// console.log(arr3);

// // at the console
// // [ false, false, true ]

// var checkPastLimit = function(limiter, item){
// 	return item > limiter;
// }

// // bind to reference 'this' right

// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// //('this', 1) 1 = limiter
// console.log(arr4);

// //functional programming without BIND (all the time)

// var checkPastLimitSimplified = function(limiter){
// 	return function(limiter, item){
// 		return item > limiter;
// 	}.bind(this, limiter);
// };

// var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
// console.log(arr5);

//functions should NOT mutate data
//the core should NOT be mutated

//52 - Functional Programming (part 2)

//downloaded underscore.js

//notade code - http://underscorejs.org/docs/underscore.html

// var arr6 = _.map(arr1, function(item){
// 	return item * 3;
// });
// console.log(arr6);

// var arr7 = _.filter([2,3,4,5,6,7], function(item){
// 	return item % 2 === 0;
// });
// console.log(arr7);

//53 - Object-Oriented JS and Prototypal Inheritance

//Classical VS Prototypal Inheritance

// Inheritance:
// One object gets access to the properties and methods
// of another object

// Classical Inheritance:
// it's popular it's in C# and Java (very classical)
// 	- Verbose (downside)
// 	- keyword polution

// Prototypal Inheritance:
// 	- simple
// 	- flexible
// 	- extensible
// 	- easy to understand

//54 - Understanding the Prototype

// obj = {
// 	prop1: 'boo';
// }

// obj.prop1
// obj.prop2

// obj.proto. = Prototype

// each of object can have its own Prototype

// Prototype Chain = it's hidden from me its inside
// the JS engine 

// Prototype Chain NOT Scope Chain

// all objects can share the same Prototype if you want to

// obj -> special reference -> methods and 
// properties (down the chain)

// var person = {
// 	firstName: 'Default',
// 	lastName: 'Default',	
// 	getFullName: function(){
// 		return this.firstName + ' ' + this.lastName;
// 	}
// }

// var john = {
// 	firstName: 'John',
// 	lastName: 'Doe'
// }

// //DON'T DO THIS EVER! for demo purposes only!!!
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstName);

// //John
// //this happens because JS will search from TOP to bottom
// //for the firstName property

// var jane = {
// 	firstName: 'Jane'
// }

// //DON'T DO THIS
// jane.__proto__ = person;
// console.log(jane.getFullName());

//Jane Default

//55 - Everything in Javascript is an Object(or primitive)

// var a = {};
// var b = function(){};
// var c = [];

// //the variables are in memory

// //try this in the console
// a.__proto__
// a.__proto__.
// b.__proto__

// //all functions have their prototype set to this
// //PROTOTYPAL OBJECT

// c.__proto__.

// //all arrays in JS I can do .PUSH because of the array
// //in the prototype

// b.__proto__.proto__

//56 - Reflection and Extend

// Reflection:
// An object can look at itself, listing and changing its
// properties and methods.

// object -> look at its own properties and methods
// this is why we can use Extend

// var person = {
// 	firstName: 'Default',
// 	lastName: 'Default',	
// 	getFullName: function(){
// 		return this.firstName + ' ' + this.lastName;
// 	}
// }

// var john = {
// 	firstName: 'John',
// 	lastName: 'Doe'
// }

// //DON'T DO THIS EVER! for demo purposes only!!!
// // john.__proto__ = person;
// // console.log(john.getFullName());
// // console.log(john.firstName);

// //John
// //this happens because JS will search from TOP to bottom
// //for the firstName property


// //this will loop over all of the john object
// for(var prop in john){
// 	if(john.hasOwnProperty(prop))
// 	console.log(prop + ' : ' + john[prop]);
// }


// //console
// // firstName : John
// // app.js:1879 lastName : Doe

// //console
// // firstName : John
// // app.js:1878 lastName : Doe
// // app.js:1878 getFullName : function (){
// // 		return this.firstName + ' ' + this.lastName;
// // 	}

// //using underscore

// var jane = {
// 	address: '111 main st.',
// 	getFormalFullName: function(){
// 		return this.lastName + ', ' + this.firstName; 
// 	}
// }

// var jim = {
// 	getFirstName: function(){
// 		return firstName;
// 	}
// }

// //combines ALL OF THE OBJECTS LISTED
// _.extend(john, jane, jim);

// console.log(john);

//Object {firstName: "John", lastName: "Doe", 
// address: "111 main st."}address: "111 main st."
// firstName: "John"getFirstName: ()
// getFormalFullName: ()
// lastName: "Doe"__proto__: Object

//even though we didn't set john to have getFormalName()
//we used underscore _extend to inherit all the properties
//and john obj. still has his prototype
//the key to get all the other properties was list
//(john, jane, jim) on EXTEND! -> this is call:
//REFLECTION

//57 - Function Constructors, 'new' and the history
//of Javascript

// Building Object:
// We already seen that using object literal Notation
// but there a few ways to SET THE Prototype

// Function Constructors,'new', and the history of Javascript

// Brendan Ike created JS

// var john = new Person(); 
//this was created to attract Java developers
//this has some PROBLEMS

//Function Constructors
//function constructors start with a capitol letter
// function Person(){
// 	//this starts as an empty object
// 	console.log(this);

// 	this.firstName = 'John';
// 	this.lastName = 'Doe';

// 	//testing to see if this function gets invoked
// 	console.log('This Function was invoked');
// }

// var john = new Person();

// console.log(john);

//console
//Person {}
// This Function was invoked
// Person { firstName: 'John', lastName: 'Doe' }

//Function constructor
// is constructing an object USING a FUNCTION!

//we use parameters to have default values
// function Person(firstName, lastName){
// 	//this starts as an empty object
// 	console.log(this);

// 	this.firstName = firstName;
// 	this.lastName = lastName;

// 	//testing to see if this function gets invoked
// 	console.log('This Function was invoked');
// }

// var john = new Person('John', 'Doe');

// console.log(john);

// var jane = new Person('Jane', 'Doe');

// console.log(jane);

// Function Constructors:
// A normal function that is used to construct objects.

// The 'this' variable points a new empty object, and that
// object is returned from the function automatically.

//58 - Function Constructors and '.Prototype'

//console
// john.__proto__
//its empty!?

//Function = a special type of object
//Function has this list:
	// - Name or Anonymous
	// - Invocable () - code
	// - prototype = used ONLY by the new operator

// function Person(firstName, lastName){
// 	//this starts as an empty object
// 	console.log(this);

// 	this.firstName = firstName;
// 	this.lastName = lastName;

// 	//testing to see if this function gets invoked
// 	console.log('This Function was invoked');
// }

// Person.prototype.getFullName = function(){
// 	return this.firstName + ' ' + this.lastName;
// }

// var john = new Person('John', 'Doe');

// console.log(john);

// var jane = new Person('Jane', 'Doe');

// console.log(jane);

// //the object were created and you can still set properties
// //because we are using the Person prototype
// //methods go in the prototype
// Person.prototype.getFormalFullName = function(){
// 	return this.lastName + ' ' + this.firstName;
// }

// console.log(john.getFormalFullName());

//console
// Person {}
// app.js:2006 This Function was invoked
// app.js:2015 Person {firstName: "John", lastName: "Doe"}
// app.js:2000 Person {}
// app.js:2006 This Function was invoked
// app.js:2019 Person {firstName: "Jane", lastName: "Doe"}
// app.js:2025 Doe John

//59 - Dangerous Aside = 'new' and Functions


// function Person(firstName, lastName){
// 	//this starts as an empty object
// 	console.log(this);

// 	this.firstName = firstName;
// 	this.lastName = lastName;

// 	//testing to see if this function gets invoked
// 	console.log('This Function was invoked');
// }

// Person.prototype.getFullName = function(){
// 	return this.firstName + ' ' + this.lastName;
// }

// //what happens if we forget the 'new' keyword
// var john = Person('John', 'Doe');

// console.log(john);

// //what happens if we forget the 'new' keyword
// var jane = Person('Jane', 'Doe');

// console.log(jane);

// Person.prototype.getFormalFullName = function(){
// 	return this.lastName + ' ' + this.firstName;
// }

// console.log(john.getFormalFullName());

//console

//Uncaught TypeError: Cannot read property 'getFormalFullName' of undefined

//fix for this is using a CAPITOL LETTER to start the
//ES6 -> kills the functions constructors

//60 - Built-in Function Constructors

//try all of this at the console

// var a = new Number(3);
// //this is a function construction

// a.toFixed

// var a = new String("John");

// String.prototype.indexOf('o');

// String.prototype.indexOf("Jo");

// a.indexOf("o");

//Built in look like primitives but you're creating
//objects!

//  String.prototype.isLengthGreaterThan = function(limit){
//  	return this.length > limit;
//  }

// console.log("John".isLengthGreaterThan(3));

// //true

// Number.prototype.isPositive = function(){
// 	return this > 0;
// }

// 3.isPositive();

//error!

// var a = new Number(3);

// a.isPositive();

//true

//61 - Dangerous Aside = Built-in Function Constructors

//at the console
// var a = 3;

// var b = new Number(3); //this is not a number! 

// a == b
// //true

// a === b
//false //why? they're not the same type (primitive x obj)

//use literals!

//dates:

//moment.js

//62 - Dangerous Aside (Arrays and for..in)

//let's pretend we have a library
// Array.prototype.myCustomFeature = 'cool!';

// var arr = ['john', 'jane', 'jim'];

//loop through an array
// for(var prop in arr){
// 	console.log(prop + ': ' + arr[prop]);
// }

//property (prop) is a number
// 0: john
// 1: jane
// 2: jim

//Arrays are OBJECTS

//in case of Arrays DON'T USE for..in

//use i as iterator - the standard for loop

// for(var i = 0; i < arr.length; i++){

// }

//63 - Object.create and Pure Prototypal Inheritance

//another way to create objects
//Object.create = all new browser have

// var person = {
// 	firstName: 'Default',
// 	lastName: 'Default',
// 	//methods GO HERE! in the base object
// 	greet: function(){
// 		//use the this keyword to access the actual
// 		//execution context
// 		//to not go outside to window object
// 		return 'Hi' + ' ' + this.firstName;
// 	}
// }


// var john = Object.create(person);

// console.log(john);

//{} //EMPTY OBJECT!
// but the prototype access the properties greet(), for ex

// john.firstName = 'John';
// john.lastName = 'Doe';
// console.log(john);

//console
//john.greet();
// "Hi John"

//what if we're targeting OLD BROWSER?

// Polyfill:
// Code that adds a feature which the engine MAY lack.

//polyfill
// if(!Object.create){
// 	Object.create = function(o){
// 		if(arguments.length > 1){
// 			throw new Error('Object.create implementation' 
// 				+ ' only accepts the first parameter.');
// 		}
// 	function F(){}
// 	F.prototype = o;
// 	return new F();	
// 	};
// }

// var person = {
// 	firstName: 'Default',
// 	lastName: 'Default',
// 	//methods GO HERE! in the base object
// 	greet: function(){
// 		//use the this keyword to access the actual
// 		//execution context
// 		//to not go outside to window object
// 		return 'Hi' + ' ' + this.firstName;
// 	}
// }


// var john = Object.create(person);
// john.firstName = 'John';
// john.lastName = 'Doe';
// console.log(john);

//64 - ES6 and Classes
//Classes are a way to define a object

//ES6

// class Person {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	greet(){
// 		return 'Hi ' + firstName; 
// 	}
// }

// var john = new Person('John', 'Doe');

//CLASSES in JS = 'this' is AN OBJECT!!!

//Prototypal in ES6

//extends sets the Prototype(__proto__)
// class informalPerson extends Person{

// 	constructor(firstName, lastName){
// 		super(firstName, lastName);
// 	}

// 	greet(){
// 		return 'Yo ' + firstName;
// 	}
// }

//Syntatic Sugar:
// A different way to type something that doesn't
// change how it works under the hood.

//65 - Initialization

//simulation of data for the UI
// var people = [
// 	{
// 		firstName: 'John',
// 		lastName:'Doe',
// 		adresses: [
// 			'111 st',
// 			'222 st'
// 		]
// 	},
// 	{
// 		firstName: 'Jane',
// 		lastName:'Doe',
// 		adresses: [
// 			'333 st',
// 			'444 st'
// 		],
// 		greet: function(){
// 			return 'Hello';
// 		}
// 	},

// ]
// console.log(people);

//66 - 'typeof', 'instanceof' and Figuring Type of var

// var a = 3;
// console.log(typeof a);

// var b = "Hello";
// console.log(typeof b);

// var c = {};
// console.log(typeof c);

// var d = []; //Array are objects
// console.log(typeof d);
// //better way
// console.log(Object.prototype.toString.call(d));

// function Person(name){
// 	this.name = name;
// }

// var e = new Person('Jane');
// console.log(typeof e);
// console.log(e instanceof Person); //looks into Prototype Chain

// console.log(typeof undefined);
// console.log(typeof null); // a bug since the beginning

// var z = function(){}
// console.log(typeof z); //function

//67 - Strict MODE
//Strict Mode = to fight JS liberalism

// "use strict"; // at the top of file or top of function
// function logNewPerson(){
// 	"use strict";

// 	var person2;
// 	//intentional Mistyping 
// 	persom2 = {};
// 	console.log(persom2);
// }

// var person;

// //intentional Mistyping 
// persom = {};
// console.log(persom);
// logNewPerson();

//console throws an error thanks to "use strict"
//app.js:2341 Uncaught ReferenceError: persom2 is not defined

//69 - Learning from Other's good code
//Open source Education

//70 - Deep Dive into source code JQUERY

// var q = $('ul.people li');

// console.log(q);

//prevObject: jQuery.fn.init[1]

//how it works on the source code

// jQuery = function(selector, context){
// 	return new jQuery.fn.init(selector, context);
// }

// we don't need to use the new keyword because of the 
// return new jQuery.fn.init

//it's a function that returns an object doesn't it to
//use the NEW keyword

//jQuery is an object jQuery and it has lots of properties
//and functionalities

//jQuery.fn = jQuery.prototype 
//jQuery.fn = function PROTOTYPE of the jQuery

//jQuery.extend = jQuery.fn.extend = function(){
	//what is the target?
// 	target = arguments[0] || {}
// }

//target is the first arguments that we pass 
//arguments[0]

//there's a for() loop and a for(in) for all the 
//arguments!

//that's used everytime I attach an object to jQuery
//runs all these for loops to iterate through all the
//properties and methods of that particular object

//71 - Deep dive part 2

//function constructor

// init = jQuery.fn.init = function(selector, context){
// 	var match, elem;

// 	//took an empty object made into an array
// 	// and uses return to
// 	//populate that object
// 	return jQuery.makeArray(selector, this);
// }

//init.prototype = jQuery.fn;
//fn is the PROTOTYPE of jQuery

//72 - Deep dive part 3

// var q = $('ul.people').addClass('newclass').removeClass('people');

//Method Chanining:
// Calling one method after another, and each method 
// affects the parent object.

// So obj.method1().method2() where both method end up with
// a 'this' variable pointing at 'obj'.

// addClass() and removeClass() method uses return this 
// because it is a function related to the prototype of jQuery object 

// var q = $('ul.people li');

// console.log(q);

//73 - Let's build a framework/library (Requirements)
//the name is greetr!

//74 and 75 on greetr.js

// var g = G$('John', 'Doe');

// g.greet().setLang('es').greet(true);
//.greet(true) = greet(formal)

//G…r.init {firstName: "John", lastName: "Doe", language: "en"}

//79 - Using the Framework we created

// $('#login').click(function(){
	
// 	//create new 'Greetr' object (let's pretend we know the name from the login)
// 	var loginGrtr = G$('John', 'Doe');

// 	$('#logindiv').hide();

// 	//fire off an HTML greeting, passing the '#greeting' as the selector and
// 	//the chosen language, and log the welcome as well on the console
// 	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
// })

//81 - Typescript, ES6 and Transpiled Languages

// Transpile:
// Convert the syntax of one programming language, to another

// In this case languages that don't really ever run anywhere, but
// instead are processed by 'transpilers' that generate Javascript 

