import { t as timeBox, a as asInt } from './timeBox-4f4735eb.js';
import { K as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bV as defStatbarLevel } from './calfSystem-81938674.js';
import { v as valueText } from './valueText-41c5c37f.js';
import './intValue-e485889b.js';
import './padZ-827c036e.js';

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
//# sourceMappingURL=injectLevelupCalculator-9e906fd8.js.map
