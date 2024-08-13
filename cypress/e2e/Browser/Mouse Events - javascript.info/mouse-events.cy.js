import { render } from "../../../../utils/render";

const abortContr = new AbortController();

describe('Mouse Events - javascript.info', () => {
  it('should clientY/X be window-relative size', () => {
    const el = render(`<div id="first" style="height: ${2000 * 2}px">Element</div>`);
    
    const handler = cy.stub();
    const scrollSize = 500;
    const mouseMove = 50;

    cy.document().then((doc) => {
      doc.body.appendChild(el);
      doc.body.style.overflow = 'auto';

      doc.addEventListener('click', (e) => {
        handler(e.clientY, e.pageY);
      }, { signal: abortContr.signal });

      cy.get('body').click(49, mouseMove, { force: true });

      cy.get('body').click(49, mouseMove, { force: true });

      cy.scrollTo(0, scrollSize);

      cy.get('body').click(49, mouseMove, { force: true });

      cy.wait(0).then(() => {
        expect(handler).to.be.calledWith(mouseMove - scrollSize, mouseMove);
        abortContr.abort();
      });
    });
  });
});
