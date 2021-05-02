import { f as fshOpen } from './fshOpen-cce15559.js';
import { M as quickbuffUrl } from './calfSystem-78c09adf.js';

function openQuickBuffByName(aPlayerName, buffList) {
  let passthru = '';
  if (buffList) { passthru = `&blist=${buffList}`; }
  fshOpen(`${quickbuffUrl}&players=${aPlayerName}${passthru}`,
    'fsQuickBuff', 618, 1000, ',scrollbars');
}

export { openQuickBuffByName as o };
//# sourceMappingURL=openQuickBuffByName-12ed0f8e.js.map
