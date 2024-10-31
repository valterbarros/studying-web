console.log('start script');

// console.log('color', document.styleSheets[0].cssRules[0].style.color);

const start = Date.now();

// As html parser is sync on webkit styles will not be applied until the script is done
for (let i = 0; i < 3000000000; i++) {
  // do nothing
}

console.log('finish', Date.now() - start);

// console.log('script tag', document.body.style.color);

// Reset
window.onload = function () {
  reset.onclick = function () {
    window.location.reload();
    document.body.innerHTML = 'reloading...';
  }
}
