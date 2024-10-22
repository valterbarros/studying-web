// TODO: link inside src etc dont work because is blob: url
// document.addEventListener('click', async (e) => {
//   e.preventDefault();
//   if (!e.target.matches('a[href]')) return;

//   const parser = new DOMParser();

//   console.log('click', e.target.href);
  
//   const res = await fetch(e.target.href);
//   const html = await res.text();

//   const doc = parser.parseFromString(html, 'text/html');
  
//   console.log(doc.documentElement.ownerDocument.lastChild.outerHTML);
//   // return;
//   doc.documentElement.ownerDocument.body.insertAdjacentHTML('afterBegin', `
//     <a style="
//       padding: 10px;
//       position: absolute;
//       background: grey;
//       color: white;"
//       href="${location.href}"
//     >
//       Voltar
//     </a>
//   `);

//   console.log(doc.documentElement.ownerDocument.lastChild.outerHTML);
  

//   const blob = new Blob([doc.documentElement.ownerDocument.lastChild.outerHTML], { type: 'text/html' });

//   window.open(URL.createObjectURL(blob), '_self');
// });

// function getResult(htmlString) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, "text/html");
//   return { title: doc.title, main: doc.querySelector("body") };
// }

// navigation.addEventListener('navigate', (navigateEvent) => {
//   // if (shouldNotIntercept(navigateEvent)) return;
//   const url = new URL(navigateEvent.destination.url);

//   console.log('navigate');
  

//   // if (url.pathname.startsWith('/')) {
//     navigateEvent.intercept({
//       async handler() {
//         // The URL has already changed, so quickly show a placeholder.
//         // renderArticlePagePlaceholder();
//         // Then fetch the real data.
//         const page = await fetch(url.pathname);
//         const html = await page.text();
//         const { title, main } = getResult(html);

//         document.title = title;
//         console.log(main);
        
//         document.querySelector("body").replaceWith(main.cloneNode(true));
//       },
//     });
//   // }
// });
