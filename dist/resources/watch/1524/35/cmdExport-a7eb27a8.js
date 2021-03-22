import { q as extend } from './calfSystem-06ff1f7b.js';
import { i as indexAjaxJson } from './indexAjaxJson-d3f06031.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-a7eb27a8.js.map
