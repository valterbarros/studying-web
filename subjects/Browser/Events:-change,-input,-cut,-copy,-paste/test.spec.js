import { render } from '../../../utils/render';
import { userEvent, commands } from '@vitest/browser/context' 

describe('Events: change, input, cut, copy, paste - javascript.info', () => {
  it('should be possible to listen for events', async () => {
    const i1 = render('<input value="text2">click</input>');
    const i2 = render('<input value="text2">click</input>');

    const handler = vi.fn();

    i2.addEventListener('paste', (e) => handler({ isTrusted: e.isTrusted }));

    document.body.append(i1, i2);

    i1.select();

    await userEvent.click(i1);

    await userEvent.keyboard(`{Control>}X{/Control}`);

    await userEvent.click(i2);

    await userEvent.keyboard(`{Control>}V{/Control}`);

    expect(handler).toBeCalledWith({ isTrusted: true })
    expect(i2).not.toBeDisabled();
  });

  it('should be possible to use navigator.clipboard', async () => {
    const i1 = render('<input>click</input>');

    document.body.append(i1);

    i1.select();

    await userEvent.click(i1);

    await commands.clipBoardPermission();

    await navigator.clipboard.writeText('123')

    await userEvent.keyboard(`{Control>}V{/Control}`);

    expect(i1).toHaveValue('123')
  });
});
