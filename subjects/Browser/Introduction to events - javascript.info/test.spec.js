import { flushPromises } from "../../../utils/flush-promises";
import { render } from "../../../utils/render";

describe('Document - Javascript.info',() => {
  it('should be possible to remove an event listener with AbortController',() => {
    const button = render(`
      <button>Click!</button>
    `);

    const handler = vi.fn();

    const signal = new AbortController()

    button.addEventListener('click', handler, { signal: signal.signal });

    button.click();

    signal.abort(new Error('abort'));

    button.click();
    button.click();
    button.click();

    expect(handler).toBeCalledTimes(1);
  });

  it('should stop bubling', () => {
    const button = render(`
      <button>Click!</button>
    `);

    document.body.append(button);

    const handlerBody = vi.fn();

    document.body.addEventListener('click', handlerBody);

    const handlerButton = vi.fn();

    button.addEventListener('click', handlerButton);

    button.click();

    expect(handlerBody).toBeCalled();
    expect(handlerButton).toBeCalled();

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
    });

    // Reload event to change the order of events
    button.removeEventListener('click', handlerButton);
    button.addEventListener('click', handlerButton);

    button.click();
    button.click();
    button.click();

    expect(handlerBody).toBeCalledTimes(1);
    expect(handlerButton).toHaveBeenCalledTimes(1);
  });
});
 