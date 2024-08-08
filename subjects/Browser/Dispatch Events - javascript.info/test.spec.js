import { render } from "../../../utils/render";

describe('Dispatch Events - javascript.info',() => {
  it('should be possible to prevent/cancel a custom event',() => {
    // const wrapper = render('<div>wrapper</div>');
    const elem = render('<div>element</div>');

    elem.addEventListener('hello', (event) => {
      event.preventDefault();
    });

    const isCancelled = elem.dispatchEvent(new CustomEvent('hello', {
      cancelable: true,
    }));    

    expect(isCancelled).toBe(false);
  });
});
