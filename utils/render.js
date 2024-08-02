const parser = new DOMParser;

/**
 * 
 * @param {string} htmlText 
 * @returns { HTMLElement }
 */
export const render = (htmlText) => {
  const dom = parser.parseFromString(htmlText, 'text/html');

  return dom.body.childElementCount === 1 ? dom.body.firstChild : dom.body.children;
};
