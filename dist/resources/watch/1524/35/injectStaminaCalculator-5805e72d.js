import { t as timeBox, a as asInt } from './timeBox-0841a95d.js';
import { K as getElementsByClassName, z as getElementById, f as insertHtmlBeforeEnd } from './calfSystem-06ff1f7b.js';
import { i as intValue } from './intValue-1ce02c09.js';
import { v as valueText } from './valueText-3865740e.js';
import './padZ-3a7e6015.js';

function getStamVals(staminaMouseover) {
  return /([,0-9]+)\s\/\s([,0-9]+)/.exec(
    valueText(getElementsByClassName('stat-name', staminaMouseover)),
  );
}

function maxStamAt(nextGain, stamVals) {
  return `<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${
    timeBox(
      valueText(nextGain),
      // get the max hours to still be inside stamina maximum
      Math.floor(
        (intValue(stamVals[2]) - intValue(stamVals[1]))
        / asInt('stat-stamina-gainPerHour'),
      ),
    )}`;
}

function injectStaminaCalculator() {
  const nextGain = getElementsByClassName('stat-stamina-nextGain');
  if (nextGain.length === 0) { return; }
  const staminaMouseover = getElementById('statbar-stamina-tooltip-stamina');
  const stamVals = getStamVals(staminaMouseover);
  if (stamVals) {
    insertHtmlBeforeEnd(staminaMouseover, maxStamAt(nextGain, stamVals));
  }
}

export default injectStaminaCalculator;
//# sourceMappingURL=injectStaminaCalculator-5805e72d.js.map
