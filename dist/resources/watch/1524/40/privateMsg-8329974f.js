import { a as addLogColoring } from './addLogColoring-3220df5b.js';
import { T as getUrlParameter } from './calfSystem-81938674.js';
import './createStyle-f626bc66.js';
import './dataRows-6c5fc4c9.js';
import './doBuffLinkClick-78e2b94d.js';
import './openQuickBuffByName-7610a5fa.js';
import './fshOpen-9656868c.js';
import './parseDateAsTimestamp-b3a45b02.js';

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-8329974f.js.map
