// Copy and paste on browser devtools to work

const mozillaLinks = ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#bound_methods_in_classes",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal#examples",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",
"https://developer.mozilla.org/en-US/docs/Web/API/File/File",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#browser_compatibility",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#description",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global",
"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API",
"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts",
"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams",
"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams",
"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_writable_streams",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respond",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest",
"https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/releaseLock",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/cancel",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee",
"https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream/TextEncoderStream",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/enqueue",
"https://developer.mozilla.org/en-US/docs/Web/API/Response/Response",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream",
"https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_coercion",
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",
"https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy",
"https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy"]

const jsInfoLinks = [
  "https://javascript.info/classes",
  "https://javascript.info/advanced-functions",
  "https://javascript.info/recursion",
  "https://javascript.info/rest-parameters-spread",
  "https://javascript.info/closure",
  "https://javascript.info/var",
  "https://javascript.info/global-object",
  "https://javascript.info/function-object",
  "https://javascript.info/new-function",
  "https://javascript.info/settimeout-setinterval",
  "https://javascript.info/call-apply-decorators",
  "https://javascript.info/bind",
  "https://javascript.info/arrow-functions",
  "https://javascript.info/var",
  "https://javascript.info/generators",
  "https://javascript.info/prototypes",
  "https://javascript.info/symbol",
  "https://javascript.info/iterable",
  "https://javascript.info/async-iterators-generators",
  "https://javascript.info/reference-type",
  "https://javascript.info/map-set",
  "https://javascript.info/weakmap-weakset",
  "https://javascript.info/modules",
  "https://javascript.info/import-export",
  "https://javascript.info/modules-dynamic-imports",
  "https://javascript.info/modules-intro",
  "https://javascript.info/async",
  "https://javascript.info/promise-error-handling",
  "https://javascript.info/promise-basics",
  "https://javascript.info/callbacks",
  "https://javascript.info/promise-chaining",
  "https://javascript.info/promise-api",
  "https://javascript.info/promisify",
  "https://javascript.info/microtask-queue",
  "https://javascript.info/async-await",
  "https://javascript.info/binary",
  "https://javascript.info/text-decoder",
  "https://javascript.info/blob",
  "https://javascript.info/arraybuffer-binary-arrays",
  "https://javascript.info/file",
  "https://javascript.info/regexp-catastrophic-backtracking",
  "https://javascript.info/garbage-collection",
  "https://javascript.info/proxy"
];

const calculateTime = (text) => {
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  return Math.round(wordCount / 200);
}

const calculateFromLinks = async (links) => {
  const parse = new DOMParser();

  // e.preventDefault();
  // e.target.disabled = true;

  // const links = Array.from(document.querySelectorAll('a:has(input[type="checkbox"]:checked)'));

  let linksMarkdown = ''
  let totalTime = 0;
  
  const promises = links.map(async (link) => {
    const delay = new Promise((resolve) => setTimeout(resolve, 100))
    const res = await fetch(link);
    const text = await res.text()

    const doc = parse.parseFromString(text, 'text/html')

    if (doc.body.querySelector('article')) {
      const bodyContent = doc.body.querySelector('article').textContent;

      const title = doc.head.querySelector('title')

      const readingTime = calculateTime(bodyContent);
      // linksMarkdown += `[${link.textContent}](${link}) - ${readingTime} minutos \n`;
      // Provisory
      linksMarkdown += `=HYPERLINK("${link}", "- ${title?.textContent} - ${readingTime}") \n`;

      totalTime += readingTime;
    }
  });

  await Promise.all(promises);

  console.log(linksMarkdown);
  console.log('Total time: ', totalTime);

  // await setClipboard(linksMarkdown);
  // e.target.disabled = false;
  // showNotification();
}

calculateFromLinks(jsInfoLinks);
