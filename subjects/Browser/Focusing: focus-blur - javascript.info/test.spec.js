import { render } from '../../../utils/render';
import { userEvent } from '@testing-library/user-event';

const controller = new AbortController();
const signal = controller.signal;

describe('Focusing: focus-blur - javascript.info', () => {
  afterAll(() => controller.abort());

  it('should focusin event bubbles', async () => {
    const handler = vi.fn();
    document.body.addEventListener('focusin', handler, { signal });

    const el = render(`<button>button!</button>`);
    document.body.append(el);

    await userEvent.click(el);

    expect(handler).toBeCalled();
    expect(el).toHaveFocus();
  });

  it('should focus event not bubbles', async () => {
    const handler = vi.fn();
    document.body.addEventListener('focus', handler, { signal });

    const el = render(`<button>button!</button>`);
    document.body.append(el);

    await userEvent.click(el);

    expect(handler).not.toBeCalled();
    expect(el).toHaveFocus();
  });
});
