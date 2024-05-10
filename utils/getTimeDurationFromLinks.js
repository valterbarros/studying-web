// Copy and paste on browser devtools to work

const jsLinks = [
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

calculateFromLinks(jsLinks);
