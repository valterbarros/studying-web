A repo with some test cases about web in general, with purpose to study.

run docker:

```
docker build -t cypress-study .


docker run --rm --name cypress-study -v ${PWD}:/app -it cypress-study /bin/bash
```

run tests:

```
npm install

npm test:browser
npm test:noBrowser
```

main source: https://developer.mozilla.org/ and https://javascript.info/

## Subjects Javascript

classes:

- [this - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#bound_methods_in_classes)
- [Classes - javascript.info](https://javascript.info/classes)
- [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [Public class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [this | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [new - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [instanceof - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

functions:

- [Functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Function: prototype - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)
- [Function.prototype[@@hasInstance]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance)
- [Advanced working with functions javascript.info](https://javascript.info/advanced-functions)
  - [Recursion and stack](https://javascript.info/recursion)
  - [Rest parameters and spread syntax](https://javascript.info/rest-parameters-spread)
  - [Variable scope, closure](https://javascript.info/closure)
  - [The old "var"](https://javascript.info/var)
  - [Global object](https://javascript.info/global-object)
  - [Function object, NFE](https://javascript.info/function-object)
  - [The "new Function" syntax](https://javascript.info/new-function)
  - [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)
  - [Decorators and forwarding, call/apply](https://javascript.info/call-apply-decorators)
  - [Function binding](https://javascript.info/bind)
  - [Arrow functions revisited](https://javascript.info/arrow-functions)
- [The old "var"](https://javascript.info/var)
- [yield - JavaScript | MDN](https://support.atlassian.com/trello/docs/how-to-format-your-text-in-trello/)
- [Generators](https://javascript.info/generators)

inherit
- [new.target - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target) 
- [void operator - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) 
- [Prototypes, inheritance](https://javascript.info/prototypes) 
- [Object.prototype.isPrototypeOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)
- [Inheritance and the prototype chain - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Reflect.construct() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct)

symbols
- [Symbol type](https://javascript.info/symbol) 
- [Symbol - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 
- [Symbol.replace - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 
- [Symbol.species - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) 
- [Symbol() constructor - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) 
- [Symbol.for() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for) 
- [Symbol.keyFor() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor) 
- [Symbol.toPrimitive - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 
- [Symbol.unscopables - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)
- [Iteration protocols - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) 
- [Iterables](https://javascript.info/iterable) 
- [Async iteration and generators](https://javascript.info/async-iterators-generators) 

objects:
- [Object - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) 
  - [Object.prototype.valueOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 
  - [Object.prototype.toString() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 
  - [Object.isFrozen() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen) 
  - [Object.seal() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal#examples) 
  - [Object.isSealed() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) 
  - [Object.preventExtensions() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) 
  - [Object.groupBy() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy) 
  - [Object.prototype.constructor - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 
  - [Object.getPrototypeOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) 
  - [Object.setPrototypeOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 
  - [Object.is() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 
  - [Object.prototype.hasOwnProperty() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 
  - [Object.hasOwn() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) 
  - [Object.fromEntries() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) 
  - [Object.keys() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 
  - [Object.getOwnPropertySymbols() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 
  - [Object.getOwnPropertyNames() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) 
  - [Object.getOwnPropertyDescriptors() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) 
  - [Object.entries() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 
  - [Enumerability and ownership of properties - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) 
  - [Object.defineProperty() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 
  - [Object.defineProperties() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) 
  - [Object.is() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 
- [Reference Type - javascript.info](https://javascript.info/reference-type)

arrays

- [Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
- [Array.prototype.copyWithin() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) 
- [Array.prototype.toSpliced() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced) 
- [Array.prototype.fill() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) 
- [Array.prototype.lastIndexOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 
- [Array.prototype.reduceRight() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 
- [Array.fromAsync() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync) 
- [Array.prototype.concat() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 
- [Array.of() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of) 
- [Array.prototype.with() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

numbers

- [Number - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) 
- [Number.EPSILON - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) 
- [NaN - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) 
- [Number.parseFloat() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) 
- [Number.parseInt() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) 
- [Number.prototype.toFixed() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 
- [Math.trunc() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

operators

- [Expressions and operators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators) 
- [Destructuring assignment - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 
- [How to convert binary to decimal in JavaScript](https://byby.dev/js-binary-to-decimal) 
- [Default parameters - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment) 
- [Unsigned right shift (>>>) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) 
- [Right shift (>>) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift) 
- [Bitwise OR (|) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) 
- [Bitwise XOR (^) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) 
- [Bitwise AND (&) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) 
- [Bitwise NOT (~) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) 
- [Using Bitwise operators in JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/using-bitwise-operators-in-javascript) 
- [Equality comparisons and sameness - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) 
- [Greater than or equal (>=) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) 
- [Less than (<) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) 
- [Greater than (>) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than) 
- [typeof - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) 
- [Operator precedence - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [Equality (==) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) 
- [Unary plus (+) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Spread syntax (...) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 

strings

- [String - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) 
- [String.prototype.repeat() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) 
- [Intl.Collator - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) 
- [encodeURIComponent() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 
- [encodeURI() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 
- [String.raw() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw) 
- [String.prototype.localeCompare() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 
- [Template literals (Template strings) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 
- [String.prototype.normalize() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

booleans

- [Boolean - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 

dates

- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) 
  - [getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) 
  - [setTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime) 
  - [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) 
  - [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 
  - [Date.UTC()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC) 
  - [getTimezoneOffset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) 
  - [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) 

set and map

- [Set - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 
  - [A.union(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union) 
  - [A.difference(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) 
  - [A.isSupersetOf(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) 
  - [A.isSubsetOf(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) 
  - [A.symmetricDifference(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) 
  - [A.intersection(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) 
  - [A.isDisjointFrom(B)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) 
- [Map and Set](https://javascript.info/map-set) 
- [WeakMap and WeakSet](https://javascript.info/weakmap-weakset) 
- [WeakMap - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members) 

modules

- [Modules - Tutorial](https://javascript.info/modules) 
  - [Export and Import](https://javascript.info/import-export) 
  - [Dynamic imports](https://javascript.info/modules-dynamic-imports) 
  - [Modules, introduction](https://javascript.info/modules-intro) 

promises

- [Promises, async/await](https://javascript.info/async) 
  - [Error handling with promises](https://javascript.info/promise-error-handling) 
  - [Promise](https://javascript.info/promise-basics) 
  - [Introduction: callbacks](https://javascript.info/callbacks) 
  - [Promises chaining](https://javascript.info/promise-chaining) 
  - [Promise API](https://javascript.info/promise-api) 
  - [Promisification](https://javascript.info/promisify) 
  - [Microtasks](https://javascript.info/microtask-queue) 
  - [Async/await](https://javascript.info/async-await)

binary data

- [Binary data, files](https://javascript.info/binary) 
  - [TextDecoder and TextEncoder](https://javascript.info/text-decoder) 
  - [Blob](https://javascript.info/blob) 
  - [ArrayBuffer, binary arrays](https://javascript.info/arraybuffer-binary-arrays) 
  - [File and FileReader](https://javascript.info/file) 
- [JavaScript typed arrays - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays) 
- [DataView.prototype.getUint16() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16) 
- [DataView - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) 
- [ArrayBuffer - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 
- [File: File() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/File/File) 
- [TypedArray - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#browser_compatibility) 
- [Typed arrays - Binary data in the browser | Articles | web.dev](https://web.dev/articles/webgl-typed-arrays#a_discussion_of_endianness) 

regex

- [Regular expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) 
  - [exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 
  - [search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
  - [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 
  - [match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) 
  - [test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 
  - [matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 
  - [replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) 
  - [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 
  - [RegExp.prototype.unicode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) 
  - [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 
  - [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) 
  - [Groups and backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) 
  - [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) 
  - [Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) 
  - [Unicode character class escape: \p{...}, \P{...} - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) 
  - [Character class: [...], [^...] - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching) 
  - [RegExp.prototype.sticky - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#description) 
  - [RegExp: lastIndex - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 
  - [RegExp.prototype.global - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
- [Catastrophic backtracking](https://javascript.info/regexp-catastrophic-backtracking)

streams

- [Streams API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) 
  - [Streams API concepts](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts) 
  - [Using readable streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams) 
  - [Using readable byte streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) 
  - [Using writable streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_writable_streams)
  - [ReadableStreamBYOBRequest: respond() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respond) 
  - [ReadableByteStreamController: byobRequest property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest) 
  - [TransformStream: TransformStream() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream) 
  - [ReadableStreamDefaultReader: releaseLock() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/releaseLock) 
  - [ReadableStreamDefaultReader: cancel() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/cancel) 
  - [ReadableStreamDefaultReader: read() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read) 
  - [ReadableStream: tee() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee) 
  - [TextEncoderStream: TextEncoderStream() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream/TextEncoderStream) 
  - [ReadableStream: pipeThrough() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough) 
  - [ReadableStreamDefaultController: enqueue() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/enqueue) 
  - [Response: Response() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) 
  - [ReadableStream() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream) 
  - [ReadableByteStreamController - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController) 

others
 
- [JavaScript data types and data structures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_coercion) 
- [Standard built-in objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) 
- [Shallow copy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) 
- [Deep copy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)
- [Garbage collection](https://javascript.info/garbage-collection) 
- [Proxy and Reflect](https://javascript.info/proxy) 


Time total MDN: 771m

Time total javascript.info: 282m

Total all: 1053m

## Subjects Web

history of web

- [JavaScript - MDN Web Docs Glossary: Definitions of Web-related terms](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) 
- [A HISTÓRIA COMPLETA: JAVASCRIPT](https://www.youtube.com/watch?v=QM83eQ7Kpbg&t=21s) 
- [The history of the web (Chrome University 2019)](https://www.youtube.com/watch?v=kNzoswFIU9M&list=PLNYkxOF6rcICgS7eFJrGDhMBwWtdTgzpx&index=2&ab_channel=ChromeforDevelopers)

dom

- [ Document javascript.info](https://javascript.info/document) 
  - [ Browser environment, specs](https://javascript.info/browser-environment) 
  - [DOM tree](https://javascript.info/dom-nodes) 
  - [Walking the DOM](https://javascript.info/dom-navigation) 
  - [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom) 
  - [Node properties: type, tag and contents](https://javascript.info/basic-dom-node-properties) 
  - [Attributes and properties](https://javascript.info/dom-attributes-and-properties) 
  - [Modifying the document](https://javascript.info/modifying-document) 
  - [Styles and classes](https://javascript.info/styles-and-classes) 
  - [Element size and scrolling](https://javascript.info/size-and-scroll) 
  - [Window sizes and scrolling](https://javascript.info/size-and-scroll-window) 
  - [Coordinates](https://javascript.info/coordinates)
- [Selection and Range](https://javascript.info/selection-range) 

events

- [Introduction to Events](https://javascript.info/events) 
  - [Introduction to browser events](https://javascript.info/introduction-browser-events) 
  - [Bubbling and capturing](https://javascript.info/bubbling-and-capturing) 
  - [Event delegation](https://javascript.info/event-delegation) 
  - [Browser default actions](https://javascript.info/default-browser-action) 
  - [Dispatching custom events](https://javascript.info/dispatch-events) 
  [UI Events](https://javascript.info/event-details) 
  - [Mouse events](https://javascript.info/mouse-events-basics) 
  - [Moving the mouse: mouseover/out, mouseenter/leave](https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave) 
  - [Pointer events](https://javascript.info/pointer-events) 
  - [Keyboard: keydown and keyup](https://javascript.info/keyboard-events) 
  - [Scrolling](https://javascript.info/onscroll)

html elements

- [Form controls](https://javascript.info/forms-controls) 
  - [Focusing: focus/blur](https://javascript.info/focus-blur) 
  - [Events: change, input, cut, copy, paste](https://javascript.info/events-change-input) 
  - [Forms: event and method submit](https://javascript.info/forms-submit) 
  - [Form properties and methods](https://javascript.info/form-elements) 
- [Document and resource loading](https://javascript.info/loading) 
  - [Page: DOMContentLoaded, load, beforeunload, unload](https://javascript.info/onload-ondomcontentloaded) 
  - [Scripts: async, defer](https://javascript.info/script-async-defer) 
  - [Resource loading: onload and onerror](https://javascript.info/onload-onerror)
- [Web Components - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) 
  - [HTMLElement: attachInternals() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals) 
  - [:state()](https://developer.mozilla.org/en-US/docs/Web/CSS/:state) 
  - [::part](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) 
  - [:host()](https://developer.mozilla.org/en-US/docs/Web/CSS/:host) 
  - [slotchange](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/slotchange_event) 
  - [:host-context()](https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context) 
- [The Story of Web Components](https://www.youtube.com/watch?v=fKqgdT-KLrM)
- [How To Build Sortable Drag & Drop With Vanilla Javascript](https://www.youtube.com/watch?v=jfYWwQrtzzY&ab_channel=WebDevSimplified) 
- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) 
  - [Recommended Drag Types - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_nodes) 
  - [File drag and drop - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
- [How was this not in the browser before???](https://www.youtube.com/watch?v=FFxhkWk3I7U) 
- [Using the Popover API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) 
  - [HTMLElement.popover](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/popover) 
  - [HTMLButtonElement.popoverTargetAction](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/popoverTargetAction) 
  - [HTMLInputElement.popoverTargetElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/popoverTargetElement) 
  - [popovertarget](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#popovertarget) 
  - [@starting-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) 
  - [popovertargetaction](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#popovertargetaction) 
  - [::backdrop](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) 
  - [popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) 
  - [HTMLInputElement.popoverTargetAction](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/popoverTargetAction) 
  - [HTMLButtonElement.popoverTargetElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/popoverTargetElement) 
  - [transition-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior) 
- [Solving Clickjacking - HTTP 203](https://www.youtube.com/watch?v=EIH6IQgwdAc&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=62)

network request
- [Network requests](https://javascript.info/network) 
  - [Fetch](https://javascript.info/fetch) 
  - [FormData](https://javascript.info/formdata) 
  - [Fetch: Download progress](https://javascript.info/fetch-progress) 
  - [Fetch: Abort](https://javascript.info/fetch-abort) 
  - [Fetch: Cross-Origin Requests](https://javascript.info/fetch-crossorigin) 
  - [Fetch API](https://javascript.info/fetch-api) 
  - [URL objects](https://javascript.info/url) 
  - [XMLHttpRequest](https://javascript.info/xmlhttprequest) 
  - [Resumable file upload](https://javascript.info/resume-upload) 
  - [Long polling](https://javascript.info/long-polling) 
  - [WebSocket](https://javascript.info/websocket) 
  - [Server Sent Events](https://javascript.info/server-sent-events) 
  - [Streaming requests with fetch](https://www.youtube.com/watch?v=G9PpImUEeUA&ab_channel=ChromeforDevelopers%20-%2022)

css

- [Kevin Powell Css](https://www.youtube.com/@KevinPowell) 
- [Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU&ab_channel=KevinPowell) 
- [Learn how to use Media queries & Container queries](https://www.youtube.com/watch?v=2rlWBZ17Wes&ab_channel=KevinPowell) 
- [Are you using the right CSS units?](https://www.youtube.com/watch?v=N5wpD9Ov_To&ab_channel=KevinPowell) 
- [Avoid These 5 Awful CSS Mistakes](https://www.youtube.com/watch?v=rxnX1jdoI6c&ab_channel=KevinPowell) 
- [min-content, max-content, fit-content - intrinsic sizing with CSS](https://www.youtube.com/watch?v=DM244V9KvNs) 
- [Selectors, pseudo elements, etc](https://www.youtube.com/watch?v=UWFrl79092w&ab_channel=KevinPowell) 
- [Inheritance, cascade, box model, specificity](https://www.youtube.com/watch?v=JnTPd9G6hoY&ab_channel=KevinPowell) 
- [No more specificity issues?! (or all new ones 🤔) - A look at CSS Cascade Layers](https://www.youtube.com/watch?v=NDNRGW-_1EE&ab_channel=KevinPowell) 
- [The secret to mastering CSS layouts](https://www.youtube.com/watch?v=vHuSz4fRM88&ab_channel=KevinPowell) 
- [Unfamiliar CSS patterns that improve on the classics](https://www.youtube.com/watch?v=OtqZKLdDNXY) 
- [Incredible scroll-based animations with CSS-only](https://www.youtube.com/watch?v=UmzFk68Bwdk&t=15s&ab_channel=KevinPowell) 
- [Avoiding layout shift by putting the CSS in charge - HTTP 203](https://www.youtube.com/watch?v=7EKEav7Io5Y&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=21) 
- [CSS building blocks - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks) 
- [Cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) 
- [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) 
- [Handling different text directions](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) 
- [Overflowing content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content) 
- [Images, media, and form elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements) 
- [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

canvas

- [Canvas](https://www.youtube.com/@ChrisCourses) 
  - [HTML5 Canvas Tutorial for Complete Beginners](https://www.youtube.com/watch?v=EO6OkltgudE&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=1&ab_channel=ChrisCourses) 
  - [Drawing On HTML5 Canvas for Complete Beginners](https://www.youtube.com/watch?v=83L6B13ixQ0&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=2&ab_channel=ChrisCourses) 
  - [Animating HTML5 Canvas for Complete Beginners](https://www.youtube.com/watch?v=yq2au9EfeRQ&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=3&ab_channel=ChrisCourses) 
  - [Interacting with HTML5 Canvas for Complete Beginners](https://www.youtube.com/watch?v=vxljFhP2krI&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=4&ab_channel=ChrisCourses) 
  [How to Code: Collision Detection](https://www.youtube.com/watch?v=XYzA_kPWyJ8&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=6&ab_channel=ChrisCourses) 
  [How to Code: Collision Detection Part II](https://www.youtube.com/watch?v=789weryntzM&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=8&ab_channel=ChrisCourses) 
  [Create Effect Cursor Like Spider Man Using Canvas HTML5 And Javascript](https://www.youtube.com/watch?v=Djbg_ry-CrA&t=41s&ab_channel=LunDev) 
  [Collision detection canvas js](https://youtu.be/_MyPLZSGS3s?si=iZvfbru3V00OqyvR) 
  [Canvas - Images and Image Data - Episode 4](https://www.youtube.com/watch?v=HjxrSMgQLQU&ab_channel=SteveGriffith-Prof3ssorSt3v3)
  [@supports - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) 

svg

- [SVG Tutorial](https://svg-tutorial.com/) 
  - [Why would you code an image?](https://svg-tutorial.com/svg/basic-shapes) 
  - [How to Build a Christmas Tree with SVG](https://svg-tutorial.com/svg/polygon) 
  - [How to Make a Gingerbread Figure with SVG](https://svg-tutorial.com/svg/gingerbread-figure) 
  - [How to Build a House with SVG](https://svg-tutorial.com/svg/house) 
  - [How to Draw Basic Paths with SVG](https://svg-tutorial.com/svg/basic-path) 
  - [How to use the transform property of SVG elements](https://svg-tutorial.com/svg/transform) 
  - [How to Draw a Clock with SVG and JavaScript](https://svg-tutorial.com/svg/clock) 
  - [SVG + JavaScript tutorial: How to Code an Animated Watch](https://www.youtube.com/watch?v=ULomsOSk4JA&t=15s&ab_channel=HunorM%C3%A1rtonBorb%C3%A9ly) 
  - [How to reuse image elements with SVG](https://svg-tutorial.com/svg/use) 
  - [How to Draw a Forest with SVG](https://svg-tutorial.com/svg/forest) 
  - [How to Animate an SVG with CSS](https://svg-tutorial.com/svg/css-animation) 
  - [How to Draw Quadratic Bézier Curves with SVG](https://svg-tutorial.com/svg/quadratic-bezier) 
  - [How to Draw Cubic Bézier Curves with SVG](https://svg-tutorial.com/svg/cubic-bezier) 
  - [How to Draw a Bell with SVG](https://svg-tutorial.com/svg/bell) 
  - [How to Draw an Arc with SVG](https://svg-tutorial.com/svg/arc) 
  - [Paths - SVG: Scalable Vector Graphics | MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#arcs) 
  - [How to Draw a Bear with SVG](https://svg-tutorial.com/svg/bear) 
  - [How to Use Gradients with SVG](https://svg-tutorial.com/svg/gradient) 
  - [How to Add Animation on Hover of an SVG element](https://svg-tutorial.com/svg/animation-on-hover) 
  - [How to Inline SVG in CSS](https://svg-tutorial.com/svg/svg-in-css) 
  - [How to Draw Text Along a Path with SVG](https://svg-tutorial.com/svg/text-path) 
  - [How to Animate Along a Path with SVG](https://svg-tutorial.com/svg/path-based-animation) 
  - [How to use clip-path with SVG](https://svg-tutorial.com/svg/clip-path) 
  - [How to Add Interaction to SVG elements with JavaScript](https://svg-tutorial.com/svg/interaction) 
  - [How to Generate an SVG Diagram from JavaScript](https://svg-tutorial.com/svg/data-driven-diagram) 
  - [How to Break Down an SVG Image into Multiple Components](https://svg-tutorial.com/svg/multiple-components) 

animations

- [Animating with the Web Animations API](https://www.youtube.com/playlist?list=PL7zSj-5INGTv3jQIIUKIy8XOkB9FUz-ol) 
  - [Animating with the Web Animations API - Part 1: Overview](https://www.youtube.com/watch?v=6VUVaTdsuMA&list=PL7zSj-5INGTv3jQIIUKIy8XOkB9FUz-ol&index=8&pp=iAQB) 
  - [Animating with the Web Animations API - Part 2: Animating the Street](https://www.youtube.com/watch?v=90RuWkC2CLo&list=PL7zSj-5INGTv3jQIIUKIy8XOkB9FUz-ol&index=7&pp=iAQB) 
  - [Animating with the Web Animations API - Part 3: Animating the Scooter](https://www.youtube.com/watch?v=3sIhTN_2V2I&list=PL7zSj-5INGTv3jQIIUKIy8XOkB9FUz-ol&index=6&pp=iAQB) 
  - [Animating with the Web Animations API - Part 4: Animating the Background](https://www.youtube.com/watch?v=Ls1q6PNgXgE&list=PL7zSj-5INGTv3jQIIUKIy8XOkB9FUz-ol&index=5&pp=iAQB) 
  - [Animating with the Web Animations API - Part 5: Animating the Foreground](https://www.youtube.com/watch?v=AhBlB5kmfNo&list=PL7zSj-5INGTv3jQIIUKIy8XOkB9FUz-ol&index=4) 
  [Using the Web Animations API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) 
  - [Animation.pause()](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause) 
  - [Animation.play()](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play) 
  - [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) 
  - [Animation.reverse()](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse) 
  - [Animation.finish()](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish) 
  - [Document.getAnimations](https://developer.mozilla.org/en-US/docs/Web/API/Document/getAnimations) 
  - [Animation.cancel()](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel) 
  - [animation-timing-function - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) 
  - [animation-fill-mode - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) 
  - [animation-composition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-composition) 
  - [animation-timeline - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) 
  - [animation-range - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range)

service worker

- [Understanding Service Workers](https://www.youtube.com/playlist?list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj) 
  - [Service Workers - Registration, LifeCycle, Events, and Dev Tools](https://www.youtube.com/watch?v=NJRu3pmmN-4&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=1&pp=iAQB) 
  - [Service Workers - The Cache API](https://www.youtube.com/watch?v=Gu0t2EW2kfU&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=2&pp=iAQB) 
  - [Service Workers - waitUntil, skipWaiting, and claim methods](https://www.youtube.com/watch?v=nhkpOK3NfW0&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=3&pp=iAQB) 
  - [Service Workers - How to Integrate Caches in the Worker](https://www.youtube.com/watch?v=ZoucFUOHGhk&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=4&pp=iAQB) 
  - [Service Workers - The Storage API](https://www.youtube.com/watch?v=2FDpVXSBRyo&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=5&t=845s&pp=iAQB) 
  - [Service Workers - Controlling Every Fetch Call](https://www.youtube.com/watch?v=ZY0WTY-g_js&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=6&pp=iAQB) 
  - [Service Workers - When Fetch Goes Wrong](https://www.youtube.com/watch?v=MXw4Uh7pnLI&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=7&pp=iAQB) 
  - [Service Workers - Messaging between Tabs and Service Workers](https://www.youtube.com/watch?v=ISBjiYYqx6s&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=8&pp=iAQB) 
  - [Service Workers Simplified with Caching Strategies](https://www.youtube.com/watch?v=q5RLP-CDMvs&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=14) 
  - [Custom Service Worker Redirects 12](https://www.youtube.com/watch?v=mNkJOghRLsM&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&index=15&pp=iAQB) 
  [Using Web Workers - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 
  [The main thread is overworked & underpaid (Chrome Dev Summit)](https://www.youtube.com/watch?v=7Rrv9qFMWNM) 
  [Cache - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Cache) 
  - [Cache.add(request)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/add) 
  - [Cache.put(request, response)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/put) 
  - [Cache.match(request, options)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match) 
  - [Cache.addAll(requests)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll) 
  - [CacheStorage.open()](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open) 
  - [Cache.matchAll(request, options)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/matchAll) 
  - [Cache.keys(request, options)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/keys) 
  - [Cache.delete(request, options)](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete)

web auth

- [Create a passkey for passwordless logins | Articles | web.dev](https://web.dev/articles/passkey-registration) 
- [Web Authentication API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API) 
  - [navigator.credentials.get()](https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get) 
  - [navigator.credentials.create()](https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create) 
  - [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) 
  - [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) 
  - [AuthenticatorResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse)

 
- [Debugging memory leaks - HTTP 203](https://www.youtube.com/watch?v=YDU_3WdfkxA&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=25) 
- [Web Security - HTTP203](https://www.youtube.com/watch?v=GJRkEYRHVsk&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=85) 

media source
- [MediaSource - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource) 
  - [MediaSource.activeSourceBuffers](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/activeSourceBuffers) 
  - [MediaSource.readyState](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/readyState) 
  - [MediaSource.duration](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration) 
  - [HTMLMediaElement.srcObject](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject) 
  - [MediaSource.handle](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/handle) 
  - [MediaSource.sourceBuffers](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/sourceBuffers) 
  - [MediaSource.endOfStream()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/endOfStream)
    - [MediaSource.endOfStream()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/endOfStream) 
  - [MediaSource.isTypeSupported()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/isTypeSupported_static) 
  - [MediaSource.addSourceBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/addSourceBuffer) 
  - [MediaSource.setLiveSeekableRange()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/setLiveSeekableRange) 
  - [MediaSource.clearLiveSeekableRange()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/clearLiveSeekableRange) 
  - [MediaSource.removeSourceBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/removeSourceBuffer) 

- [You Don't Need a Dependency - Clipboard API](https://www.youtube.com/watch?v=6vcCTymhIXY&t=278s&ab_channel=Syntax) 

file system

- [File System API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) 
  - [Window.showSaveFilePicker()](https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker) 
  - [StorageManager.getDirectory()](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/getDirectory) 
  - [flush()](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemSyncAccessHandle/flush) 
  - [window.showOpenFilePicker()](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker) 
  - [FileSystemDirectoryHandle](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryHandle) 
  - [FileSystemSyncAccessHandle](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemSyncAccessHandle) 
  - [FileSystemSyncAccessHandle](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemSyncAccessHandle) 
  - [FileSystemHandle](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle) 
  - [write()](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemSyncAccessHandle/write) 
  - [FileSystemWritableFileStream](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream) 
  - [FileSystemWritableFileStream](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream) 
  - [DataTransferItem.getAsFileSystemHandle()](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle) 
  - [DataTransferItem.getAsFileSystemHandle()](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle) 
  - [FileSystemFileHandle](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle) 
  - [window.showDirectoryPicker()](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker) 

media devices

- [MediaDevices: getUserMedia() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) 

full screen api

- [Fullscreen API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) 
  - [Element.requestFullscreen()](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen) 
  - [Document.fullscreenElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement) 
  - [Document.exitFullscreen()](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen) 
  - [ShadowRoot.fullscreenElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/fullscreenElement) 
  - [Document.fullscreenEnabled](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled) 
  - [fullscreenerror](https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenerror_event) 
  - [fullscreenchange](https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event) 
- [EditContext API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EditContext_API) 

edit context api

- [EditContext](https://developer.mozilla.org/en-US/docs/Web/API/EditContext) 
- [TextFormat](https://developer.mozilla.org/en-US/docs/Web/API/TextFormat)

window management api

- [Window Management API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API) 
  - [Window.getScreenDetails()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getScreenDetails) 
  - [ScreenDetails](https://developer.mozilla.org/en-US/docs/Web/API/ScreenDetails) 
  - [Window.screen.isExtended](https://developer.mozilla.org/en-US/docs/Web/API/Screen/isExtended) 
  - [ScreenDetailed](https://developer.mozilla.org/en-US/docs/Web/API/ScreenDetailed) 
  - [Using the Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API/Using) 

crypto

- [Crypto - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) 
  - [Crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) 
  - [RandomSource](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) 

picture in picture

- [Picture-in-Picture API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API) 
  - [Document.pictureInPictureElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/pictureInPictureElement) 
  - [PictureInPictureWindow](https://developer.mozilla.org/en-US/docs/Web/API/PictureInPictureWindow) 
  - [Document.exitPictureInPicture()](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitPictureInPicture) 
  - [HTMLVideoElement.disablePictureInPicture](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/disablePictureInPicture) 
  - [HTMLVideoElement.requestPictureInPicture()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestPictureInPicture) 
  - [Document.pictureInPictureEnabled](https://developer.mozilla.org/en-US/docs/Web/API/Document/pictureInPictureEnabled) 
  - [onresize](https://developer.mozilla.org/en-US/docs/Web/API/PictureInPictureWindow/resize_event) 
  - [enterpictureinpicture](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event) 
  - [leavepictureinpicture](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) 
  - [ShadowRoot.pictureInPictureElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/pictureInPictureElement) 

screen wake API

- [Screen Wake Lock API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API) 
  - [Navigator.wakelock](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/wakeLock) 
  - [WakeLockSentinel](https://developer.mozilla.org/en-US/docs/Web/API/WakeLockSentinel) 
  - [Permissions-Policy: screen-wake-lock](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy/screen-wake-lock) 
  - [WakeLockSentinel.release()](https://developer.mozilla.org/en-US/docs/Web/API/WakeLockSentinel/release) 
  - [navigator.wakeLock.request()](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock/request)
