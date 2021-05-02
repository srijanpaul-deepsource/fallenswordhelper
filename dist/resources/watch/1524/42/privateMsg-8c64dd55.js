import { a as addLogColoring } from './addLogColoring-0fab59e2.js';
import { T as getUrlParameter } from './calfSystem-78c09adf.js';
import './createStyle-1fb13266.js';
import './dataRows-474a0cfc.js';
import './doBuffLinkClick-59b95a18.js';
import './openQuickBuffByName-12ed0f8e.js';
import './fshOpen-cce15559.js';
import './parseDateAsTimestamp-fbfe3b0c.js';

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-8c64dd55.js.map
