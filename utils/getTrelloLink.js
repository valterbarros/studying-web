const list = document.querySelector('[data-list-id="654187b735df8e6b30b5f3ae"]')
var lastIndex = 0;
let finalString = '';

const closeModal = async () => {
    const closeIcon = () => document.querySelector('.icon-md.icon-close.dialog-close-button.js-close-window.dialog-close-button--card-cover');

    return await new Promise((res) => {
      setTimeout(function myself() {
          const close = closeIcon();
          if (!close) setTimeout(myself, 500)
          res(close?.click())
      }, 500)
    });
}
const openModal = (link) => link.click()

const getMarkDownLink = async () => {
    return await new Promise((res) => {
        setTimeout(() => {
            const highligthLink = document.querySelector('a[href^=https]');
            const title = document.querySelector('.card-detail-title-assist.js-title-helper');
    
            if (!highligthLink) return;
    
            const href = highligthLink.href;

            finalString += `[${title.textContent}](${href}) \n`
        }, 100)
    });
}


const navigate = async () => {
    const links = [...list.querySelectorAll('a[data-testid="card-name"]')].slice(lastIndex);

    for ([index, link] of links.entries()) {
        lastIndex = index;

        openModal(link);
        getMarkDownLink();
        await closeModal();
    }

    console.log(finalString)
}


navigate();

console.log('after click')