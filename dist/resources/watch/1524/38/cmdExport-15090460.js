import { q as extend } from './calfSystem-a8d6dd2c.js';
import { i as indexAjaxJson } from './indexAjaxJson-8015c666.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-15090460.js.map
