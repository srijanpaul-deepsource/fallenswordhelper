import { N as arrayFrom } from './calfSystem-a8d6dd2c.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-eabcdbb4.js.map
