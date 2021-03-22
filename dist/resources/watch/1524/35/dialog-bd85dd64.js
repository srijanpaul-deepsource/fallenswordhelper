import { d as dialogMsg } from './dialogMsg-eb4e9d8f.js';

function dialog(data) {
  if (data.r !== 0) {
    dialogMsg(data.m);
  }
  return data;
}

export { dialog as d };
//# sourceMappingURL=dialog-bd85dd64.js.map
