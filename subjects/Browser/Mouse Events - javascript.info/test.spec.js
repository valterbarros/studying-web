import { render } from "../../../utils/render";

describe('Mouse Events - javascript.info',() => {
  it.skip('should clientY/X be window-relative size',() => {
    const el = render(`<div style="height: ${window.innerHeight * 2}px">Element</div>`);

    document.body.replaceChildren(el);
    document.body.style.overflow = 'auto';

    el.dispatchEvent(new MouseEvent({
      clientY: 10,
      clientX: 10,
    }));

    const handler = vi.fn();

    el.addEventListener('click', (e) => {
      console.log(e.clientX);
      
      handler({ clientX: e.clientX, clientY: e.clientY });
    });

    el.click();

    expect(handler).toBeCalledWith(expect.objectContaining({
      clientX: 0,
      clientY: 0,
    }));

    document.body.scrollTo({top: 150})

    console.log(window.innerHeight, document.body.scrollHeight, document.body.scrollTop);

    el.click();

    // always returns 0 ;/ because it is syntetic not a real event
    expect(handler).toHaveBeenLastCalledWith(expect.objectContaining({
      clientX: 0,
      clientY: 0,
    }));
  });
});
