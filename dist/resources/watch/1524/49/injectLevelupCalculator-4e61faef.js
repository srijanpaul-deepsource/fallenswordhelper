import { a as asInt } from './asInt-17af841c.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, ca as defStatbarLevel } from './calfSystem-579856fa.js';
import { t as timeBox } from './timeBox-7956cb75.js';
import { v as valueText } from './valueText-5694c75c.js';
import './intValue-f11572ef.js';
import './padZ-3a27e144.js';

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
//# sourceMappingURL=injectLevelupCalculator-4e61faef.js.map
