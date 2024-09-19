import { flushPromises } from "../../../utils/flush-promises";

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
  assignedNodesCount = 0;

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    
    this._internals = this.attachInternals();

  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>
        :host(:invalid) input {
          border: 1px solid ${red};
        }
      </style>

      <slot name="input">
        <input type="text" />
      </slot>
    `;

    shadowRoot.querySelector('input').addEventListener('input', (e) => {
      console.log('input', e.target.value);
      
      this._internals.setFormValue(e.target.value);
    });

    const slot = shadowRoot.querySelector('slot');

    slot.addEventListener('slotchange', (e) => {
      let nodes = slot.assignedNodes();

      this.assignedNodesCount = nodes.length;
    });
  }
});

describe('::state', () => {
  it('should match color seted with :state selector', async () => {
    const el = document.createElement('x-element');
    document.body.append(el);
  
    await vi.waitFor(() => expect(getComputedStyle(el).color).toBe(red));
  });
});

describe('AttachInternals', () => {
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
    // Setting name as .name doesnt not work
    el.setAttribute('name', 'data');
    form.append(el);

    const input = document.createElement('input')
    input.value = 123
    input.name = 'nome'
    form.append(input)

    document.body.append(form);

    el._internals.setFormValue('456');

    const fd = new FormData(form);
    
    const data = {};
    fd.forEach((value, key) => data[key] = value);

    await vi.waitFor(() => expect(data).toHaveProperty('data'));
  });

  it.only('should be possible to set validity state', async () => {
    const form = document.createElement('form');

    const el = document.createElement('x-input');
    // Setting name as .name doesnt not work
    el.setAttribute('name', 'data');
    form.append(el);

    const input = document.createElement('input')
    input.value = 123
    input.name = 'nome'
    form.append(input)

    document.body.append(form);

    el._internals.setValidity({ valueMissing: true }, 'Error');

    expect(form.checkValidity()).toBe(false);
    expect(el.matches(':invalid')).toBe(true);
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

describe('slotchange', () => {
  it('should return slots on change', async () => {
    document.body.innerHTML = `
      <x-input>
        <input slot="input" type="text" />
      </x-input>
    `;

    await flushPromises();

    const xInput = document.querySelector('x-input');
    
    expect(xInput.assignedNodesCount).toBe(1);
    
    const slotInput = document.querySelector('[slot="input"]');
    
    slotInput.removeAttribute('slot');

    await vi.waitFor(() => expect(xInput.assignedNodesCount).toBe(0));
  });
});
