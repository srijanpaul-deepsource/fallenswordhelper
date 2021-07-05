import { a as all } from './all-9b215cd1.js';
import { az as loadScript, aA as loadCss } from './calfSystem-8168cf6d.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-da90f31c.js.map
