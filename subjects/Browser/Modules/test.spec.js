const alertMock = vi.fn();
vi.stubGlobal('alert', alertMock);

describe('Modules', () => {
  it('should module be evaluated only once', async () => {
    const script = document.createElement('script')
    script.src = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/module.js`;
    script.type = 'module'; 

    const script2 = document.createElement('script')
    script2.src = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/module.js`;
    script2.type = 'module'; 

    document.head.appendChild(script);
    document.head.appendChild(script2);

    await vi.waitFor(() => expect(window.count).toBe(1));
  });

  it('should return url page', async () => {
    const script = document.createElement('script')
    script.type = 'module'; 
    script.innerHTML = `
      alert(import.meta.url)
    `;

    document.head.appendChild(script);

    const spy = vi.spyOn(window, 'alert')

    await vi.waitFor(() => {
      expect(spy.mock.calls[0][0]).includes('__vitest_test__/__test__/')
    });
  });

  it('should be possible to dinammicaly import', async () => {
    const spy = vi.spyOn(window, 'alert');

    const script = document.createElement('script');
    script.innerHTML = `
      import('http://127.0.0.1:5500/fixtures/module.js').then(alert)
    `;

    document.head.appendChild(script);

    await vi.waitFor(() => {
      expect(spy.mock.calls[0][0]).toHaveProperty('object');
    });
  });
});
