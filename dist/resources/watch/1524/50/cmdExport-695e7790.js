import { q as extend } from './calfSystem-8168cf6d.js';
import { i as indexAjaxJson } from './indexAjaxJson-8e794cab.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-695e7790.js.map
