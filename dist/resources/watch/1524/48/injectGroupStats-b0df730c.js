import { a as addCommas } from './addCommas-5de3e9c4.js';
import { g as getMercStats } from './getMercStats-4b264746.js';
import { g as groupViewStats } from './groupViewStats-d9b4a7a6.js';
import { y as jQueryNotPresent, B as setInnerHtml } from './calfSystem-2bd62864.js';
import './intValue-9eb5015a.js';

let groupStats;

function displayStat(el, groupStat, mercStat) {
  setInnerHtml(`<span class="fshBlue">${addCommas(groupStat)}</span> ( ${
    addCommas(groupStat - mercStat)} )`, el);
}

function parseMercStats(mercStats) {
  displayStat(groupStats.attackElement, groupStats.attack, mercStats.attack);
  displayStat(groupStats.defenseElement, groupStats.defense, mercStats.defense);
  displayStat(groupStats.armorElement, groupStats.armor, mercStats.armor);
  displayStat(groupStats.damageElement, groupStats.damage, mercStats.damage);
  displayStat(groupStats.hpElement, groupStats.hp, mercStats.hp);
}

function injectGroupStats() { // jQuery
  if (jQueryNotPresent()) { return; }
  groupStats = groupViewStats(document);
  if (groupStats.attackElement) {
    getMercStats().then(parseMercStats);
  }
}

export default injectGroupStats;
//# sourceMappingURL=injectGroupStats-b0df730c.js.map
