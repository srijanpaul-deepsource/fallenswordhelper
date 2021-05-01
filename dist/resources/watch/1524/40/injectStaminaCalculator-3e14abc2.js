import { t as timeBox, a as asInt } from './timeBox-4f4735eb.js';
import { K as getElementsByClassName, z as getElementById, f as insertHtmlBeforeEnd } from './calfSystem-81938674.js';
import { i as intValue } from './intValue-e485889b.js';
import { v as valueText } from './valueText-41c5c37f.js';
import './padZ-827c036e.js';

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
//# sourceMappingURL=injectStaminaCalculator-3e14abc2.js.map
