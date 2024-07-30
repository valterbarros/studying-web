import { render } from "../../../utils/render";

describe('Document - Javascript.info',() => {
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
});
