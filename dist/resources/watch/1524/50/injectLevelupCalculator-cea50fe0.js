import { a as asInt } from './asInt-01acea52.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, ca as defStatbarLevel } from './calfSystem-8168cf6d.js';
import { t as timeBox } from './timeBox-5c2c6603.js';
import { v as valueText } from './valueText-1a262227.js';
import './intValue-76dfee09.js';
import './padZ-a45d0ad0.js';

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
//# sourceMappingURL=injectLevelupCalculator-cea50fe0.js.map
