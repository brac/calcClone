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
- Your `JavaScript` is written in `ES5`
- Your `JavaScript` follows this [style guide](https://google.github.io/styleguide/jsguide.html)
- Your JavaScript defines 1 or less global variables
- Typing a relevant key at any point is reflected on the calculator
- Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active
- The state of the calculator is not be stored in the `DOM`
- The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
- When the length of the number displayed exceeds the width available, the font-size deterministically drops

Calculator functionality and behavior is consistent with [Mac calculator rules](#calculator-rules-and-examples):
- pressing `AC` displays `0`
- pressing `AC` `8` `+/-` displays `-8`
- pressing `AC` `-5` `+/-` displays `5`
- pressing `AC` `99` `%` displays `0.99`
- pressing `AC` `9` `+` `9` `-` `3` `=` displays `15`
- pressing `AC` `6` `+` `=` displays `12`
- pressing `AC` `4` `x` `4` `=` displays `16`
- pressing `AC` `64` `+` `=` displays `128`
- pressing `AC` `9` `+` displays `9`
- pressing `AC` `8` `-` `5` `-` displays `3`
- pressing `AC` `9` `-` `5` `+` displays `4`
- pressing `AC` `9` `+` `9` `+` `+` `+` displays `18`
- pressing `AC` `5` `+` `3` `x` `6` `+` displays `23`
- pressing `AC` `9` `x` displays `9`
- pressing `AC` `3` `x` `5` `x` displays `15`
- pressing `AC` `6` `/` `3` displays `2`
- pressing `AC` `3` `x` `4` `x` `x` `x` displays `12`
- pressing `AC` `4` `+` `3` `x` `6` `x` displays `18`
- pressing `AC` `3` `+` `5` `x` displays `5`
- pressing `AC` `3` `+` `5` `x` `6` `x` displays `30`
- pressing `AC` `3` `+` `5` `x` `6` `x` `2` `+` displays `63`

###Plan
Look up
  - [JS Style Guide](https://google.github.io/styleguide/jsguide.html)
  - Listen for keypress
  - Make button flash active on keypress - logic?
  * Difference between ES5 and ES6
      No Fat Arrows
      No Promises
      No const or let

Build
  - Determining when a key was clicked
    - addEventListeners the parent element
    - check element textContent (or value?)
  - Key Press functionality
    - Which keyboard key was pressed
  - State
    - Hold the data in memory?
    - Storing sequential key presses
  - Mathematical Functions
    - Addition
    - Subtraction
    - Multiplication
    - Division
    - Equals
  - Adjustment Functions
    - AC
    - +/-
    - %
  - Output View
    - Respond to key events
      - Select output view element
      - el.textContent(?) = mathResult/keyPress
    - Update when computation is complete
      - el.textContent(?) = mathResult/keyPress
    - Resizing
      - If string

### Style Guides Notes
[Javascript](https://google.github.io/styleguide/jsguide.html)

#### File Basics
- File names must all be lowercase and can include `_`s or `-`.
- Files are encoded in **UTF-8**

#### Special Charactes
- Use special escape sequences (`\'`, `\"`, `\b`) instead of the numeric escape (e.g `\x0a`, `\u00a`, `\u{a}`)
- For special characters use the acutal Unicode Character or the equivalent hex, `\u221e`, whichver ie eaiser to read and understand.

#### Source File Basics
- A Source File consists of in this order:
    1. License or Copyright info
    2. `@fileoverview` JSDoc [source](https://google.github.io/styleguide/jsguide.html#jsdoc-top-file-level-comments)
          A bunch of info about the module
          `/**
              * @fileoverview Description of file, its uses and information
              * about its dependencies.
              * @package
          */`
    3. `goog.module` statement [source](https://google.github.io/styleguide/jsguide.html#file-goog-module)
          * The namespace for the module
          `goog.module('search.urlHistory.UrlHistoryService');`
            * Note Do not use ES6 Modules or the `export` and `import` keywords.
    4. `goog.require` statements
      - Importing frameworkes or the like. 80 column limit not applied like the above `goog.module`.
        Must be top level, cannot defined within a funciton. If storing into a variable it must be the same name as the module.
          `goog.require('my.framework)`
    5. The file's implementation



#### Formatting
- Braces
  - Use Braces for all control structures, `if`, `else`, `for`, `do`, `while` etc.
  - A single line if statement with no wrapping is an exception
  - Use K&R Style, Egyptian Style, or what you've been doing.
```javascript
 method(foo) {
  if (condition(foo)) {
    try {
      // Note: this might fail.
      something();
    } catch (err) {
      recover();
    }
  }
}
```
- Indents
  - 2 spaces
  - Literals are block like, so same indents
  - Function expressions are defined the same way whn passed as a parameter. Indent by 2.
  - Switch statements are the same
- Statements
  - Each Statment is follwed by a line break
  - Every statment must be terminated with a semicolor (!!)
  - Column lime of 80 chacaters, so line wrap if you gotta. There are some exceptions
- Line Wrapping
  - Prefer to break at a higher syntatic level
```javascript
currentEstimate =
    calc(currentEstimate + x * currentEstimate) /
        2.0f;
```
  - Use 4 spaces for indenting line wrapped code
  - Don't horizontily align
- Whitespace
  - Use a blank line between consecutive methods in a class or object literal, within method bodies or before/after the last method in a class or object.
  - Trailing whitespace is forbidden
  - Don't use horizontal alingment b/c future edits will unalign it
  - Use leading white spaces around `{`, before any reserved word, aftera  comma, semicolon etc.
  - Put long function arguments in a rectangle shape, meaning 4 spaces indent, one line per parameter.
  - Use Group Parens
- Comments
  - Do it like this
```javascript
/*
 * This is
 * okay.
 */

// And so
// is this.

/* This is fine, too. */

someFunction(obviousParam, true /* shouldRender */, 'hello' /* name */);
```
- Javascript Language Features
  - Use `const` and `let`
  - Do not use `var`
  - Every local variable declaration declares only one variable. Do not use `let a = 1, b = 2;`
  - Declare variables when needed so they are initialized as soon as possible and to minimize their scope.
  - Declare type as needed
  - Use a trailing comma on an array or object literal after the last element before the closing bracket.
  - Do not use the `new Array()` constructor
  - Do not define or use non-numeric properties on an array. Use `Map` or an object instead.
  - Use Descturctring and leave out the unneeded elemenets. You can also use descturctring for function parameters, even specifying an option parameter and the default, which goes on the left:
```javascript
/** @param {!Array<number>=} param1 */
function optionalDestructuring([a = 4, b = 2] = []) { … };
```
  - Array literals may include the spread operator (...) to flatten elements out of one or more other iterables.
```javascript
[...foo]   // preferred over Array.prototype.slice.call(foo)
[...foo, ...bar]   // preferred over foo.concat(bar)
```
  - Do not use the `Object` constructor
  - Do not mix quoted and unquoted keys. They are slightly different so don't mix them in the same object.
  - You can use computed keys (property names). They are treated as quoted keys.
  - You can use the `method` shorthand instead of a color and function or arrow function. This will also all `this` to refer to the literal itself rather than the scrop outside the object literal that an arrow function would give you
```javascript
return {
  stuff: 'candy',
  method() {
    return this.stuff;  // Returns 'candy'
  },
};
```
  - Shorthand properties are allowed on objects
```javascript
const foo = 1;
const bar = 2;
const obj = {
  foo,
  bar,
  method() { return this.foo + this.bar; },
};
assertEquals(3, obj.method());
```
  - Destructured objects may also be used as function params:
```javascript
/**
 * @param {string} ordinary
 * @param {{num: (number|undefined), str: (string|undefined)}=} param1
 *     num: The number of times to do something.
 *     str: A string to do stuff to.
 */
function destructured(ordinary, {num, str = 'some default'} = {})
```
  -




























#### Stage 3
The Second Calculator

