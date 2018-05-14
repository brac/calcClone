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
* pressing `AC` displays `0`
- pressing `AC` `8` `+/-` displays `-8`
- pressing `AC` `-5` `+/-` displays `5`
- pressing `AC` `99` `%` displays `0.99`
* pressing `AC` `9` `+` `9` `-` `3` `=` displays `15`
- pressing `AC` `6` `+` `=` displays `12`
* pressing `AC` `4` `x` `4` `=` displays `16`
- pressing `AC` `64` `+` `=` displays `128`
- pressing `AC` `9` `+` displays `9`
- pressing `AC` `8` `-` `5` `-` displays `3`
- pressing `AC` `9` `-` `5` `+` displays `4`
- pressing `AC` `9` `+` `9` `+` `+` `+` displays `18`
- pressing `AC` `5` `+` `3` `x` `6` `+` displays `23`
- pressing `AC` `9` `x` displays `9`
- pressing `AC` `3` `x` `5` `x` displays `15`
* pressing `AC` `6` `/` `3` displays `2`
- pressing `AC` `3` `x` `4` `x` `x` `x` displays `12`
- pressing `AC` `4` `+` `3` `x` `6` `x` displays `18`
- pressing `AC` `3` `+` `5` `x` displays `5`
- pressing `AC` `3` `+` `5` `x` `6` `x` displays `30`
- pressing `AC` `3` `+` `5` `x` `6` `x` `2` `+` displays `63`

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
  - Adjustment Functions
    * AC
    - +/-
    - %
  - Output View
    * Respond to key events
      * Select output view element
      * el.textContent(?) += keypress
    * Update when computation is complete
      * el.textContent(?) = value
    * Resizing


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
  - Constructors are optional for concrete classes. Subclass constructors must call `super` before setting fields or accessing `this`.

 - Fields (properties other than methods) must be set in the constructor. Fields that are never changed should be defined with `const` and private fields should have `private` and a trailing underscore. Fields are *never* set on a concrete class' prototype. Do not add or remove properties from an instance after the constructor is finished since it will hinder pptimization. If you must initialize a field later, set it to `undefined` in the constructor to prevent later shape changes. Look up `struct`

 - Computer properties should only be used in classes when the property is a symbol, and even then sparingly.

 - Where it does not interfere with readability, prefer module-local functions over private static methods.

 - Per-instance properties should be defined in the constructor after the call to the super class constructor, if there is a super class. Methods should be defined on the prototype of the constructor.

 - Do not manipulate prototypes directly

 - Do not use JavaScript getter and setter properties. They are potentially surprising and difficult to reason about, and have limited support in the compiler. Provide ordinary methods instead

 - The toString method may be overridden, but must always succeed and never have visible side effects.

#### Functions
  - Exported functions may be defined directly on the `exports` object:
```javascript
exports = {exportedFunction, anotherExportedFunction};
```
  - Prefer arrow functions over the function keyword, particularly for nested functions

  - When defining generator functions, attach the `*` to the `function` keyword when present, and separate it with a space from the name of the function. When using delegating yields, attach the `*` to the `yield` keyword.

  - Use JSDoc annotations for parameters, authors, everything. You can use inline annotation if you must as long as it is immediately before the parameter name. Below is a general example of JSDoc annotation, without the inline annotation just mentioned.
```javascript
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @this {Circle}
 * @param {number} r The desired radius of the circle.
 */
function Circle(r) {
    /** @private */ this.radius = r;
    /** @private */ this.circumference = 2 * Math.PI * r;
}
```
  - Optional parameters are permitted using the equals operator in the parameter list. Optional parameters must include spaces on both sides of the equals operator, be named exactly like required parameters (i.e., not prefixed with opt_), use the = suffix in their JSDoc type, come after required parameters, and not use initializers that produce observable side effects. All optional parameters must have a default value in the function declaration, even if that value is undefined.

```javascript
/**
 * @param {string} required This parameter is always needed.
 * @param {string=} optional This parameter can be omitted.
 * @param {!Node=} node Another optional parameter.
 */
function maybeDoSomething(required, optional = '', node = undefined) {}
```
  - Use default parameters sparingly. Prefer destructuring
  - Use a rest parameter instead of accessing arguments, ...
```javascript
/**
 * @param {!Array<string>} array This is an ordinary parameter.
 * @param {...number} numbers The remainder of arguments are all numbers.
 */
function variadic(array, ...numbers) {}
```
  - Function calls may use the spread operator (...)
```javascript
function myFunction(...elements) {}
myFunction(...array, ...iterable, ...generator());
```

#### String literals
  - Use single quotes for string literals.
  - Use template strings over complex string concatenation.
  - No line continuations, ending a line inside a string literal with a backslash, instead concat multiple strings.

#### Number Literals
  - Numbers may be specified in decimal, hex, octal, or binary. Use exactly 0x, 0o, and 0b prefixes, with lowercase letters, for hex, octal, and binary, respectively. Never include a leading zero unless it is immediately followed by x, o, or b

#### Control Structures
  - `for`-`of` loops should be preferred when possible
  - `for`-`in` loops may only be used on dict-style objects, never an array
  - Prefer `for`-`of` and `Object.keys` over `for`-`in` when possible

#### Exceptions
  - Always throw `new Error()`, never string literals or objects.
  - Custom exceptions are great, use when native Error is not enough.
  - Prefer throwing exceptions over ad-hoc error-handling approaches (such as passing an error container reference type, or returning an object with an error property).
  - Never have an empty catch block, unless documented clearly, but still probably not.
  - Every swtich case will end with a `break`, `return` or `throw`. If it doesn't then it is considered to 'fall-through' to the next case block. This is ok as longas it is commented with `//fall through` where the exit keywould would normally be.
  - The `default` case is always present, even if it is empty

#### this
  - Only use `this` in class constructors and methods or in arrow functions defined within class constructors and methods. Any other use much have an explict `@this` declared.
  - Never use `this` to refer to the global object, the context of an `eval`, the target of an event, or unnecessarily `call()ed` or `apply()ed` functions

#### Disallowed!
  - Do not use `with`
  - Do not use `eval`
  - Do not use `Function(...string)`
  - Do not use automatic semicolon insertion, insert your own
  - Do not use non-standard features
  - Do not use `new` on primitve object wrappers, `Number`, `String` etc.
  - Do not modify builtin types by adding methods to constructors or prototypes
  - Do not add symbols to the global object unless absolutely necessary.

#### Naming
  - Be as descriptive as possible
  - It is better to be readable than concise
  - Package names are lowerCamelCase
  - Class, interface, record and typedef names are UpperCamelCase
  - Type names are typically nouns or noun phrases
  - Method names are lowerCamelCase
  - Method names are typically verbs
  - Enum names are UpperCamelCase
  - Constant names are CONSTANT_CASE. Only name a constant as such if is not going to change, not mearly if you do not intend for it to change
  - Local aliases should be used when they improve readability over fully-qualified names.
  - Non-constant names are lowerCamelCase, usually nouns
  - Parameters names are lowerCamelCase
  - Local variable name names are lowerCamelCase
  - Template parameter names should be concise, single word and all caps; `TYPE` or `THIS`

### JSDoc
Used on all classes, fields and methods.

Basic example:
```javascript
/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {number} arg A number to do something to.
 */
function doSomething(arg) { … }
```
or
```javascript
/** @const @private {!Foo} A short bit of JSDoc. */
this.foo_ = foo;
```
Many tools extract data from JSDoc comments so it is important to be careful about these.

If you need to split your comment into multiple lines then use the `/**` and `*/`

JSDoc is written in Markdown, though it may include HTML if necessary. So be sure to include hypens and approrpaite Markdown syntax so your metadata will provide the correct values.

- JSDoc tags
  - the @private, @const identifers. Simple tags that do not require additional data may be combined onto the same line:
```javascript
/**
 * Place more complex annotations (like "implements" and "template")
 * on their own lines.  Multiple simple tags (like "export" and "final")
 * may be combined in one line.
 * @export @final
 * @implements {Iterable<TYPE>}
 * @template TYPE
 */
class MyClass {
  /**
   * @param {!ObjType} obj Some object.
   * @param {number=} num An optional number.
   */
  constructor(obj, num = 42) {
    /** @private @const {!Array<!ObjType|number>} */
    this.data_ = [obj, num];
  }
}
```
  - Line wrap block tags with four spaces
  - Top Level Comments:
    - A file may have a top-level file overview. A copyright notice , author information, and default visibility level are optional. File overviews are generally recommended whenever a file consists of more than a single class definition. The top level comment is designed to orient readers unfamiliar with the code to what is in this file. If present, it may provide a description of the file's contents and any dependencies or compatibility information. Wrapped lines are not indented.

```javascript
/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @package
 */
```
  - Classes, interfaces and records must be documented with a description and any template parameters, implemented interfaces, visibility, or other appropriate tags.
```javascript
/**
 * A fancier event target that does cool things.
 * @implements {Iterable<string>}
 */
class MyFancyTarget extends EventTarget {
  /**
   * @param {string} arg1 An argument that makes this more interesting.
   * @param {!Array<number>} arg2 List of numbers to be processed.
   */
  constructor(arg1, arg2) {
    // ...
  }
};
```
  - Enums and typedefs must be documented
```javascript
/**
 * A useful type union, which is reused often.
 * @typedef {!Bandersnatch|!BandersnatchType}
 */
let CoolUnionType;


/**
 * Types of bandersnatches.
 * @enum {string}
 */
const BandersnatchType = {
  /** This kind is really frumious. */
  FRUMIOUS: 'frumious',
  /** The less-frumious kind. */
  MANXOME: 'manxome',
};
```
  - Parameter and return types must be documented
```javascript
/** This is a class. */
class SomeClass extends SomeBaseClass {
  /**
   * Operates on an instance of MyClass and returns something.
   * @param {!MyClass} obj An object that for some reason needs detailed
   *     explanation that spans multiple lines.
   * @param {!OtherClass} obviousOtherClass
   * @return {boolean} Whether something occurred.
   */
  someMethod(obj, obviousOtherClass) { ... }

  /** @override */
  overriddenMethod(param) { ... }
}

/**
 * Demonstrates how top-level functions follow the same rules.  This one
 * makes an array.
 * @param {TYPE} arg
 * @return {!Array<TYPE>}
 * @template TYPE
 */
function makeArray(arg) { ... }
```
  - Property types must be documented
```javascript
/** My class. */
class MyClass {
  /** @param {string=} someString */
  constructor(someString = 'default string') {
    /** @private @const */
    this.someString_ = someString;

    /** @private @const {!OtherType} */
    this.someOtherThing_ = functionThatReturnsAThing();

    /**
     * Maximum number of things per pane.
     * @type {number}
     */
    this.someProperty = 4;
  }
}

/**
 * The number of times we'll try before giving up.
 * @const
 */
MyClass.RETRY_COUNT = 33;
```
  - Always specify template parameters
```javascript
const /** !Object<string, !User> */ users = {};
const /** !Array<string> */ books = [];
```

### Policies
#### Be Consistent
Do what the code base is doing, and be consistent in all you do.

Use all the warnings `--warning_level=VERBOSE`

#### When encountering a Warning
  - Undersatnd it
  - Fix it or Work around it
  - Determine if it is a false alarm
    - Add a comment to concince the reader it is false and then supress the warning and apply the `@supress` annotation
  - Leave a TODO comment as a last resort. Do not suppress the warning it should remain visible until take care of properly.
  - Suppress a warning at the narrowest resonable scope

#### Deprecation
  - Mark deprecated methods, classes or interfaces with `@deprecated` annotations.

#### Reformatting existing code
1. It is not required to change all existing code to meet current style guidelines. Avoid undue code churn
2. Do not make lots of style changes if they are not critical to the central focus of your task.

#### Yet More
  - Decalre variables as close as possible to first use
  - Do not use blocked scoped functins. Insted assing the function to a `var`.
```javascript
if (x) {
  var foo = function() {};
}
```



















#### Stage 3
The Second Calculator

