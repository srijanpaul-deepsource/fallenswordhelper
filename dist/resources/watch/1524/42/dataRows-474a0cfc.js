import { N as arrayFrom } from './calfSystem-78c09adf.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-474a0cfc.js.map
