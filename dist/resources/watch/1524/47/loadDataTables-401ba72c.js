import { a as all } from './all-ceaf9817.js';
import { ay as loadScript, az as loadCss } from './calfSystem-7a121553.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-401ba72c.js.map
