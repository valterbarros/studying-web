const red = 'rgb(255, 0, 0)';

customElements.define('x-element', class extends HTMLElement {
  constructor() {
    super();
    
    const internals = this.attachInternals();
    internals.states.add('checked');
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>
        :host(:state(checked)) {
          color: ${red};
        }
      </style>

      <p part="para">Para</p>
    `
  }

  get para() {
    return this.shadowRoot.querySelector('p');
  }
});

customElements.define('x-input', class extends HTMLElement {
  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    
    this._internals = this.attachInternals();

  }
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
  }
});

describe('::state', () => {
  it('should match color seted with :state selector', async () => {
    const el = document.createElement('x-element');
    document.body.append(el);
  
    await vi.waitFor(() => expect(getComputedStyle(el).color).toBe(red));
  });
});

// TODO: not working
describe.skip('AttachInternals', () => {
  it('should be possible to use custom element integrated with form', () => {
    const el = document.createElement('x-input');
    const form = document.createElement('form');

    form.append(el);

    document.body.append(form);

    expect(el._internals.form).toBeInstanceOf(HTMLFormElement)
  });

  it('should participe on form data', async () => {
    const form = document.createElement('form');

    const el = document.createElement('x-input');
    form.append(el);

    const input = document.createElement('input')
    input.value = 123
    input.name = 'nome'
    form.append(input)

    document.body.append(form);

    el._internals.setFormValue('123');

    const fd = new FormData(form);
    
    const data = {};
    fd.forEach((value, key) => data[key] = value);

    await vi.waitFor(() => expect(data).toHaveProperty('12322'));
  });
});

describe('::part', () => {
  it('should be possible to style using ::part', () => {
    const el = document.createElement('x-element');
    const div = document.createElement('div');
    div.style = `
      x-element::part(para) {
        color: ${red};
      }
    `;

    div.append(el);

    document.body.append(div);

    expect(getComputedStyle(el.para).color).toBe(red);
  });
});
