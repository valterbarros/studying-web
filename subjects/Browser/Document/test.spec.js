import { render } from "../../../utils/render";

describe('Introduction to events - javascript.info',() => {
  it('should be possible to navigate through rows and cells from table',() => {
    const table = render(`
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thread>

        <tbody>
          <tr>
            <td>Row 1 - Cell 1</td>
            <td>Row 1 - Cell 2</td>
          </tr>

          <tr>
            <td>Row 2 - Cell 1</td>
            <td>Row 2 - Cell 2</td>
          </tr>
      </table>  
    `);

    expect(table.rows.length).toBe(3);
    expect(table.rows[0].cells.length).toBe(2);
  });

  it('should be possible to get closest ancestor',() => {
    const div = render(`
      <span class="container">
        <div class="row">
          <p>Paragraph</p>
        </div>
      </span>
    `);

    const p = div.querySelector('p');

    expect(p.closest('.container')).toBeInstanceOf(HTMLSpanElement);
  });

  it('should be possible to get resolved css values',() => {
    const container = render(`
      <div style="font-size: 20px;">
        <span style="height: 1em;"></span>
      </div>
      `);

    document.body.append(container);

    expect(getComputedStyle(container.querySelector('span')).height).toBe('20px');

    container.remove();
  });
});
