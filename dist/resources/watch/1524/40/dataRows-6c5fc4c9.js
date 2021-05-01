import { N as arrayFrom } from './calfSystem-81938674.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-6c5fc4c9.js.map
