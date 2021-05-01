import { a as all } from './all-73a73e22.js';
import { au as loadScript, av as loadCss } from './calfSystem-6b7d7ae6.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-3ca0a92d.js.map
