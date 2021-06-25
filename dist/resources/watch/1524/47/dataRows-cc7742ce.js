import { ai as arrayFrom } from './calfSystem-7a121553.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-cc7742ce.js.map
