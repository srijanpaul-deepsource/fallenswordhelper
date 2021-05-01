import { N as arrayFrom } from './calfSystem-6b7d7ae6.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-14d51aab.js.map
