import { flushPromises } from "../../../utils/flush-promises";

describe('Server Sent Events - javascript.info', () => {
  it('should receive a event from server', async () => {
    const eventSource = new EventSource(`${import.meta.env.VITE_HOST_PUBLIC}/digits`);

    const handlerOnOpen = vi.fn();
    eventSource.onopen = handlerOnOpen;

    const handlerOnMessage = vi.fn();
    
    eventSource.onmessage = handlerOnMessage;
    
    const handlerByeEvent = vi.fn();

    eventSource.addEventListener('bye', function(e) {
      console.log(e.data);
      handlerByeEvent(e.data)
    });
    
    await vi.waitFor(() => expect(handlerOnOpen).toBeCalled());
    expect(handlerByeEvent).toBeCalledWith('bye-bye')
    expect(handlerOnMessage).toBeCalled();

    await flushPromises();

    eventSource.close();
  });
});
