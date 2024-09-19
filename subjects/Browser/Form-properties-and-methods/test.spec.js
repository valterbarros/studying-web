import { render } from '../../../utils/render';

describe('Form properties and methods - javascript.info', () => {
  it('should be possible to navigate through form elements', () => {
    const el = render(`
      <form name="my">
        <input type="text" name="name"/>
        
        <input name="send" type="submit">
      </form>
    `);

    document.body.replaceChildren(el);

    expect(document.forms.my.name).toBeInstanceOf(HTMLInputElement);
    expect(document.forms.my.send).toBeInstanceOf(HTMLInputElement);
    expect(document.forms).toHaveLength(1);
  });

  it('should be possible to create option with sintax sugar',() => {
    const option = new Option('text', 'value', true, true);

    const el = render(`
      <select>
      </select>
    `);

    el.appendChild(option.cloneNode(true));
    el.appendChild(option.cloneNode(true));

    document.body.replaceChildren(el);

    expect(el).toBeInstanceOf(HTMLSelectElement);
    expect(el.selectedIndex).toBe(1);
  });
});
