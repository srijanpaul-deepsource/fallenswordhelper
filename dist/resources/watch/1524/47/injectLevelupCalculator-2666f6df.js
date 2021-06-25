import { a as asInt } from './asInt-c60be2df.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bZ as defStatbarLevel } from './calfSystem-7a121553.js';
import { t as timeBox } from './timeBox-479b145a.js';
import { v as valueText } from './valueText-74225f5e.js';
import './intValue-e4ce6bb5.js';
import './padZ-65ad9136.js';

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
//# sourceMappingURL=injectLevelupCalculator-2666f6df.js.map
