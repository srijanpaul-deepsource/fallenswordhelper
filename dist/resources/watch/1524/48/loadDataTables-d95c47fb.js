import { a as all } from './all-f24d81d0.js';
import { az as loadScript, aA as loadCss } from './calfSystem-2bd62864.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-d95c47fb.js.map
