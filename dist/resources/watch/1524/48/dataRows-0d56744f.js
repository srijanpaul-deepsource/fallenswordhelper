import { aj as arrayFrom } from './calfSystem-2bd62864.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-0d56744f.js.map
