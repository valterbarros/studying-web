describe('Fetch API - javascript.info', () => {
  it('should get only if cache', () => {
    // As this file is not at cache yet that would cause a error
    const res = fetch(`${import.meta.url}/json-response.json`, { cache: 'only-if-cached', mode: 'same-origin' })

    expect(res).rejects.toThrowError('Failed to fetch');
  });
});
