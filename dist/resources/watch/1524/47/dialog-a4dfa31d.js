import { d as dialogMsg } from './dialogMsg-edbc265b.js';

function dialog(data) {
  if (data.r !== 0) {
    dialogMsg(data.m);
  }
  return data;
}

export { dialog as d };
//# sourceMappingURL=dialog-a4dfa31d.js.map
