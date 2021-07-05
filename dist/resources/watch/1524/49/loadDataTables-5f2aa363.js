import { a as all } from './all-bb953856.js';
import { az as loadScript, aA as loadCss } from './calfSystem-579856fa.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-5f2aa363.js.map
