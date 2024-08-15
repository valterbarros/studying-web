describe('Fetch - javascript.info', () => {
  it('should be possible check headers before get body', async () => {
    const res = await fetch(import.meta.env.VITE_HOST_FIXTURES);

    expect(res.headers.get('Content-Type')).not.toBeNull();
  });
});