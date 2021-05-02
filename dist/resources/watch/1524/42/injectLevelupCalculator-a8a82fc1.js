import { t as timeBox, a as asInt } from './timeBox-dde80eda.js';
import { K as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bW as defStatbarLevel } from './calfSystem-78c09adf.js';
import { v as valueText } from './valueText-1ac982fa.js';
import './intValue-9eb8a210.js';
import './padZ-babdd575.js';

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
//# sourceMappingURL=injectLevelupCalculator-a8a82fc1.js.map
