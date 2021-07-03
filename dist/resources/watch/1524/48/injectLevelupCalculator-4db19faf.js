import { a as asInt } from './asInt-996743a7.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, ca as defStatbarLevel } from './calfSystem-2bd62864.js';
import { t as timeBox } from './timeBox-55e3e28c.js';
import { v as valueText } from './valueText-91a223ca.js';
import './intValue-9eb5015a.js';
import './padZ-b9e73e86.js';

function injectLevelupCalculator() {
  const nextGain = getElementsByClassName('stat-xp-nextGain');
  if (nextGain.length === 0) { return; }
  insertHtmlBeforeEnd(getElementById(defStatbarLevel),
    `<dt class="stat-xp-nextLevel">Next Level At</dt>${
      timeBox(
        valueText(nextGain),
        Math.ceil(asInt('stat-xp-remaining') / asInt('stat-xp-gainPerHour')),
      )}`);
}

export default injectLevelupCalculator;
//# sourceMappingURL=injectLevelupCalculator-4db19faf.js.map
