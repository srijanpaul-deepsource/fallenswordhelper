import { a as addLogColoring } from './addLogColoring-979ca1ec.js';
import { T as getUrlParameter } from './calfSystem-6b7d7ae6.js';
import './createStyle-20851baf.js';
import './dataRows-14d51aab.js';
import './doBuffLinkClick-f2a9cc4e.js';
import './openQuickBuffByName-dc6e5aed.js';
import './fshOpen-2af77be9.js';
import './parseDateAsTimestamp-ec66e701.js';

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-0e8e2fd5.js.map
