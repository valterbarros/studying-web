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
});
