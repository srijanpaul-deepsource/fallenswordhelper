import { a as all } from './all-9f53e8b3.js';
import { au as loadScript, av as loadCss } from './calfSystem-78c09adf.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-a50ce2bc.js.map
