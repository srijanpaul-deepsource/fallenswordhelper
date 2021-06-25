import { q as extend } from './calfSystem-7a121553.js';
import { i as indexAjaxJson } from './indexAjaxJson-0d19fdb7.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-3ffe3d8a.js.map
