describe('WebSocket - javascript.info', () => {
  it('should have some properties', async () => {
    const ws = new WebSocket('ws://nexiste3242341-1');

    const error = vi.fn();
    ws.onerror = error;

    expect(ws).toHaveProperty('onmessage');
    expect(ws).toHaveProperty('onclose');
    expect(ws).toHaveProperty('onerror');
    expect(ws).toHaveProperty('onopen');

    await vi.waitFor(() => expect(error).toBeCalled());
  });

  it('should be abble to connect', async () => {
    const socket = new WebSocket(import.meta.env.VITE_HOST_WS);

    socket.binaryType = 'blob';

    socket.onopen = () => socket.send('message');

    const handlerMessage = vi.fn();

    socket.onmessage = (e) => {
      handlerMessage(e.data)
    }

    await vi.waitFor(() => expect(socket.readyState).toBe(WebSocket.OPEN));
    expect(handlerMessage).toBeCalledWith(expect.any(Blob));

    socket.close();
  });

  it('should be possible to receive as arrayBuffer', async () => {
    const socket = new WebSocket(import.meta.env.VITE_HOST_WS);

    socket.binaryType = 'arraybuffer';

    socket.onopen = () => socket.send('message');

    const handlerMessage = vi.fn();

    socket.onmessage = (e) => {
      handlerMessage(e.data)
    }

    await vi.waitFor(() => expect(handlerMessage).toBeCalledWith(expect.any(ArrayBuffer)));

    socket.close();
  });
});
