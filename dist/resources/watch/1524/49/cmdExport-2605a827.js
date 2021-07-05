import { q as extend } from './calfSystem-579856fa.js';
import { i as indexAjaxJson } from './indexAjaxJson-52989594.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-2605a827.js.map
