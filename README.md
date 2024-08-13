A repo with some test cases about web in general, with purpose to study.

run docker:

```
docker build -t cypress-study .


docker run --rm --name cypress-study -v ${PWD}:/app -it cypress-study /bin/bash
```

main source: https://developer.mozilla.org/ and https://javascript.info/

Subjects

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
  - [ReadableStreamBYOBRequest: respond() method - Web APIs | MDN - 1](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respond) 
  - [ReadableByteStreamController: byobRequest property - Web APIs | MDN - 1](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest) 
  - [TransformStream: TransformStream() constructor - Web APIs | MDN - 2](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream) 
  - [ReadableStreamDefaultReader: releaseLock() method - Web APIs | MDN - 1](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/releaseLock) 
  - [ReadableStreamDefaultReader: cancel() method - Web APIs | MDN - 2](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/cancel) 
  - [ReadableStreamDefaultReader: read() method - Web APIs | MDN - 3](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read) 
  - [ReadableStream: tee() method - Web APIs | MDN - 3](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee) 
  - [TextEncoderStream: TextEncoderStream() constructor - Web APIs | MDN - 0](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream/TextEncoderStream) 
  - [ReadableStream: pipeThrough() method - Web APIs | MDN - 2](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough) 
  - [ReadableStreamDefaultController: enqueue() method - Web APIs | MDN - 1](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/enqueue) 
  - [Response: Response() constructor - Web APIs | MDN - 1](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) 
  - [ReadableStream() constructor - Web APIs | MDN - 4](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream) 
  - [ReadableByteStreamController - Web APIs | MDN - 3](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController) 

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
