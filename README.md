# Mac Calculator Clone
## An Exercise with the DOM

### Goal:
To build a clone of the mac calculator as a web app.

### Process:
This will be done in 3 linear stages, each one building upon the last.

### Stage 1, The Front End
Using only `HTML` and `CSS` I will build a clone of the OSX calculator interface. [Reference Image](https://cloud.githubusercontent.com/assets/8385/22572099/6786dd74-e957-11e6-9340-278e63aa3809.png)

#### Skills
Demonstrate the following skills
- HTML/CSS positioning
- CSS text/type styling
- Web Fonts
- Proper HTML formatting
- Proper CSS Formatting
- Proper DOM positioning of assets
- Positioning with `inline`, `block` and `inline-block`
- CSS pseudo-selectors
- CSS transitions
- Chrome Dev Tools Element Tab
* [normalize.css](https://necolas.github.io/normalize.css/)
- NOT use any other css frameworks or libraries
- NOT use any JavaScript
- NOT use images
- NOT use `<table>` tags
- NOT use `<form>` tags
- NOT use `<input>` tags

#### Resources
Font          : [Roboto](https://fonts.google.com/specimen/Roboto)
Style Guide   : [Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
normalize.css : [Normalize.css](https://necolas.github.io/normalize.css/)

#### Specs
* Calculator positioned in the center, vertically and horizontally
* Window will scroll if it is too small for the calculator, vertically and horizontally
* Buttons have a CSS transition, 100ms, to a slightly darker color on hover
* Buttons have a CSS transition, 100ms, to a slightly darker color on click
* Class names are name-spaced under `.calculator-…`
* Stylesheet contains little to no duplicate style declarations

### The Plan
Read the style guide
* Look up
  * Style Guide
    * See notes Below
  * HTML web fonts
    * ```@import url('https://fonts.google.com/specimen/Roboto')```; [Source](https://stackoverflow.com/questions/14676613/how-to-import-google-web-font-in-css-file)
  * inline, block and inline-block
    * [Source](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1)
  * CSS pseudo-selectors
  * CSS transitions
    * [Source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
  * Normalize
    ```<link type="text/css" rel="stylesheet" href="normalize.css"/>```
  * Scroll function
     * [Overflow-y](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp)
     * [Overflow-x](https://www.w3schools.com/cssref/css3_pr_overflow-x.asp)

*Build*
  * Structure
    * Normalize
    * Roborto
  * Container
    * Centered
    * Drop Shadow
  * Output View
    * Position
    * style
  * Top Keys
    * Position
      * block/inline block?
    * style
  * Function keys
    * Position
      * block/inline block?
    * style
  * Keypad
    * Position
      * block/inline block?
    * style
  * Hover Effect
  * Click Effect
  * Transitions
  * Keypad symbols



#### Style Guide Notes
*HTML*
  - Always use https:// for images or other media files.
  - lowercase for html/css
  * Use `<meta charset="utf-8">`
  - Use the following TODO sytax: `{# TODO(john.doe): revisit centering #}`
  * Use HTML5 `<!DOCTYPE html>`
  - Use the appropriate elements for what they are meant for; heading element for heading
  - Provide multimedia fallback, even just ```alt=""``` properties
  - Keep structure (markup), presentation (styling), and behavior (scripting) apart
  - Do not use entity references; `&#x263a;`
  - Omit optional tags (optional)
  - Omit type attributes for style sheets and scripts; `<link rel="stylesheet" href="https://www.google.com/css/maia.css">`
  - If line wrapping break with 4 additional spaces instead of 2 like a tab
  - When quoting attributes values, use double quotation marks
*CSS*
  - Use meaningful or generic ID and class names
  - Use ID and class names that are as short as possible but as long as necessary
  - Avoid qualifying ID and class names with type selectors
```
/* Not recommended */
ul#example {}
div.error {}

/* Recommended */
#example {}
.error {}
```
  - Use shorthand properties where possible; `font: 100%/1.6 palatino, georgia, serif;`
  - Omit unit specification after “0” values, unless required
  - Omit leading “0”s in values
  - Use 3 character hexadecimal notation where possible; bad: `#eebbcc`, good: `#ebc`
  - Prefix selectors with an application-specific prefix (optional)
  - Separate words in ID and class names by a hyphen
  - Avoid user agent detection as well as CSS “hacks”
  - Alphabetize declarations
  - Indent all block content
  - Use a semicolon after every declaration
  - Use a space after a property name’s colon
  - Use a space after a property name’s colon
  - Separate selectors and declarations by new lines
  - Separate rules by new lines
  - Use single ('') rather than double ("") quotation marks for attribute selectors and property values
  - Group sections by a section comment

**Be consistent**
With your own code or the code around you. If it's not yours then adjust your style for ease of reading.


### Goal:
Add `JavaScript` to make the calculator work.

### Stage 2
The Back End, well kinda.

### Skills
- ES5 syntax
* Registering event listeners
* Binding to the DOM Ready event
- JavaScript closures
* JavaScript callbacks
* JavaScript formatting
* Event Delegation
* Event bubbling
* Querying the DOM API
* Manipulating the DOM using the DOM API
- Avoiding using the DOM for state
- Store the state of your calculator in `JavaScript`
- NOT use `jQuery` or any other `JavaScript` libraries or frameworks
- NOT use `ES6`
- NOT store or read state from the DOM

### Sepcs
* Your `JavaScript` is written in `ES5`
- Your `JavaScript` follows this [style guide](https://google.github.io/styleguide/jsguide.html)
* Your JavaScript defines 1 or less global variables
* Typing a relevant key at any point is reflected on the calculator
* Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active
* The state of the calculator is not be stored in the `DOM`
* The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
* When the length of the number displayed exceeds the width available, the font-size deterministically drops

Calculator functionality and behavior is consistent with [Mac calculator rules](#calculator-rules-and-examples):
* pressing `AC` displays `0`
* pressing `AC` `8` `+/-` displays `-8`
* pressing `AC` `-5` `+/-` displays `5`
* pressing `AC` `99` `%` displays `0.99`
* pressing `AC` `9` `+` `9` `-` `3` `=` displays `15`
* pressing `AC` `6` `+` `=` displays `12`
* pressing `AC` `4` `x` `4` `=` displays `16`
* pressing `AC` `64` `+` `=` displays `128`
* pressing `AC` `9` `+` displays `9`
* pressing `AC` `8` `-` `5` `-` displays `3`
* pressing `AC` `9` `-` `5` `+` displays `4`
* pressing `AC` `9` `+` `9` `+` `+` `+` displays `18`
- pressing `AC` `5` `+` `3` `x` `6` `+` displays `23`  //order of operations
* pressing `AC` `9` `x` displays `9`
* pressing `AC` `3` `x` `5` `x` displays `15`
* pressing `AC` `6` `/` `3` displays `2`
* pressing `AC` `3` `x` `4` `x` `x` `x` displays `12`
* pressing `AC` `4` `+` `3` `x` `6` `x` displays `18`
* pressing `AC` `3` `+` `5` `x` displays `8`
- pressing `AC` `3` `+` `5` `x` `6` `x` displays `30`  //order of operations
- pressing `AC` `3` `+` `5` `x` `6` `x` `2` `+` displays `63` //order of operations

###Plan
Look up
  * [JS Style Guide](https://google.github.io/styleguide/jsguide.html)
  * Listen for keypress
  * Make button flash active on keypress
  * Difference between ES5 and ES6
      No Fat Arrows
      No Promises
      No const or let

Build
  * Determining when a key was clicked
    * addEventListeners the parent element
    * check element textContent (or value?)
  * Key Press functionality
    * Which keyboard key was pressed
  * State
    * Hold the data in memory
    * Solving in the right order - but not in the correct order of operations
    * Storing sequential key presses
  * Mathematical Functions
    * Addition
    * Subtraction
    * Multiplication
    * Division
    * Equals
  * Adjustment Functions
    * AC
    * +/-
    * %
  * Output View
    * Respond to key events
      * Select output view element
      * el.textContent(?) += keypress
    * Update when computation is complete
      * el.textContent(?) = value
    * Resizing



#### Stage 3
The Second Calculator

In stage 3 you are going to add a second calculator to the page. Both calculators will be exactly the same but work independently. This will likely require you to refactor some of the JavaScript you wrote in stage 2.

![two-calculators-in-browser](https://cloud.githubusercontent.com/assets/8385/22572109/72df42ba-e957-11e6-8c9e-c9efd39045c1.png)

### In this stage you will be using at least the following skills:

* Event delegation
* JavaScript Constructors
* Componentization
* Composition

### During this stage you should…

* duplicate the HTML for the calculator
* NOT try and render a calculator from `JavaScript`
* NOT use `jQuery` or any other `JavaScript` libraries or frameworks
* consider using a constructor called `Calculator`
* NOT give each calculator a unique `id` or `classname`

### You're done when…

* Each calculator acts independently.
* Clicking anywhere on a calculator focuses that calculator.
* Typing a relevant key affects the focused calculator.
* Use event delegation to avoid binding a `click` event listener to each button
* The focused calculator is `opacity: 1`
* The not-focused calculator is `opacity: 0.5`

### The Plan
* Look Up
  * Componentization
  * Composition
  * Javascript Focus element

  * Build
    * HTML duplication
    * Calculator constructor
    * On Focus
    * Accept Any Input
    * Accept Independent Input

  * Adjust
    * Remove external variable, implement pure functions


### Notes
- Componentization
  The goal of web components is to reduce complexity by isolating a related group of HTML, CSS, and JavaScript to perform a common function within the context of a single page. [Source](https://blogs.windows.com/msedgedev/2015/07/14/bringing-componentization-to-the-web-an-overview-of-web-components/)

  Taking modules and making them seperate, movable things that can be accessed via a browser. Often this may include a function that returns a block of HTML markup through a string literal.

  For example a page displaying various cards. The cards are generated from a function that returns the markup for each card, and that function get's it's data from a database or somethhing.

- Composition
  Functional composition centers around pure functions. Remeber these will always return the same output given the same input. [Source](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)

  For example
```javascript
var total = 0;

for (var i = 0; i < expenses.length; i++) {
total += expenses[i].price;
}

console.log(total); // 620.99
```
  This is a way to get all the data from one property of a group of objects, but it's not functional. It also relies on external variables that we have no way to determining the state on. You'll need to change these same things in your own calculator

  Instead, we use methods like `.map` and `.reduce`
```javascript
const sumAll = (arr) => arr
.map((item) => item.price)
.reduce((acc, price) => acc + price, 0);

let total = sumAll(expenses); // 620.99
```
  Now this is a better example of functional composition. Note that at the end we are adding the number of each price to `acc` which has an initial value of 0. Tricky tricky....

  Another example
```javascript
var getHousehold = (src) => {
  return src.filter((item) => {
    return item.type === 'Household';
  });
};
```
  Can be better written like:
```javascript
const getHousehold = (src) =>
  src.filter((item) => item.type === 'Household');
```
  Now we have a function that will compute the total and another function that will build an array of numbers. So we can put those together like this:
```javascript
let householdExpenses = sumAll(getHousehold(expenses)); // 600
```

  We can compose these together. I'm unsure if you need to write you own compose function, but what it would do is take multiple functions, and then return a function that is of both auguments applied. Like this:
```javascript
var compose = function(f, g) {
  return function(x) {
    return g(f(x));
  }
};
```
  Continuing with the expense example you could wrtie this:
```javascript
const sumOfHousehold = compose(getHousehold, sumAll);
console.log(sumHouseholdExpenses);
```
  Compose may be a special keyword, try it out. You may also be able to use composing to get the ordre of operatinos working. Compose is also similar to `pipe`, but in reverse.

  You can only compose functions that are pure functions, or you should. [Source](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504)

  Here is an example of functional composition:
```javascript
const formalGreeting = (name) => `Hello ${name}`
const casualGreeting = (name) => `Sup ${name}`
const male = (name) => `Mr. ${name}`
const female = (name) => `Mrs. ${name}`
const doctor = (name) => `Dr. ${name}`
const phd = (name) => `${name} PhD`
const md = (name) => `${name} M.D.`
formalGreeting(male(phd("Chet"))) // => "Hello Mr. Chet PhD"
```
  Note how we are continually returning an increasingly long string that will make up our total greeting. This is good but you could handle all the cases with a `pipe`. This is more of a theory than a keyword and works b/c functions in JS are first class, meaning that they can be passed as arguments to other functions and returned.

  A pipe is a function that will return a function which will pipe through the data of 2 or more functions. Like chaining results with promises, but with function calls. [Source](https://vanslaars.io/post/create-pipe-function/)

  More on [Functional Composition](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)


- More notes on Functional Composition
  Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.

  Put simply, a composition of functions `f` and `g` can be defined as `f(g(x))`, which evaluates from the inside out — right to left. In other words, the evaluation order is: x, g then f. [Source](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

  You've been doing this somewhat but should strive to do more. For example:
```javascript
const toSlug = input => encodeURIComponent(
input.split(' ')
.map(str => str.toLowerCase())
.join('-')
);
```
  The above could be flattened to this
```javascript
const toSlug = pipe(
split(' '),
map(toLowerCase),
join('-'),
encodeURIComponent
);
```

- Object Composition
  This is different than functional composition, and object compisition an alternative to classical inhertiance. Classical inheritance is the process of adding methods to prototypes of constructors and using the `new` and `this` keyword.

  Object composition does not use these but rather uses `return Object.assign(state, canCast(state))` (for example) to return a new object from essentially a constructor function. [Source](https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6)

  'Favor object composition over class inheritance.' ~ Gang of Four, “Design Patterns”.

  Three methods of object composition

  * Aggreation
    When an object is formed from an enumerable collection of subobjects. In other words, an object which contains other objects. Each subobject retains its own reference identity, such that it could be destructured from the aggregation without information loss.

  * Concatenation
    When an object is formed by adding new properties to an existing object. Properties can be concatenated one at a time or copied from existing objects, e.g., jQuery plugins are created by concatenating new methods to the jQuery delegate prototype, jQuery.fn.

  * Delegation
    When an object forwards or delegates to another object. e.g., Ivan Sutherland’s Sketchpad (1962) included instances with references to “masters” which were delegated to for shared properties. Photoshop includes “smart objects” that serve as local proxies which delegate to an external resource. JavaScript’s prototypes are also delegates: Array instances forward built-in array method calls to Array.prototype, objects to Object.prototype, etc...














