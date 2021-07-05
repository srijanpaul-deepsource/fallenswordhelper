import { a as addCommas } from './addCommas-b66fde4c.js';
import { g as getMercStats } from './getMercStats-5f7f13d9.js';
import { g as groupViewStats } from './groupViewStats-70333bea.js';
import { y as jQueryNotPresent, B as setInnerHtml } from './calfSystem-8168cf6d.js';
import './intValue-76dfee09.js';

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
//# sourceMappingURL=injectGroupStats-d10d3ee0.js.map
