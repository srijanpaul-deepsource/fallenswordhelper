import { q as extend } from './calfSystem-6b7d7ae6.js';
import { i as indexAjaxJson } from './indexAjaxJson-28a71ea6.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-44d78de1.js.map
