import { t as timeBox, a as asInt } from './timeBox-7538f294.js';
import { K as getElementsByClassName, z as getElementById, f as insertHtmlBeforeEnd } from './calfSystem-6b7d7ae6.js';
import { i as intValue } from './intValue-af3aed3f.js';
import { v as valueText } from './valueText-bb32e8fa.js';
import './padZ-9d438f6a.js';

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
//# sourceMappingURL=injectStaminaCalculator-8dc44fae.js.map
