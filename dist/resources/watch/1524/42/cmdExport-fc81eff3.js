import { q as extend } from './calfSystem-78c09adf.js';
import { i as indexAjaxJson } from './indexAjaxJson-d434bd9e.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-fc81eff3.js.map
