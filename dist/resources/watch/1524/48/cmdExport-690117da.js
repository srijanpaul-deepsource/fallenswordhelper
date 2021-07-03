import { q as extend } from './calfSystem-2bd62864.js';
import { i as indexAjaxJson } from './indexAjaxJson-ff53f4ae.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-690117da.js.map
