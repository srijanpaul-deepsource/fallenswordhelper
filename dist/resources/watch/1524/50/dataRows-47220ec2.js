import { aj as arrayFrom } from './calfSystem-8168cf6d.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-47220ec2.js.map
