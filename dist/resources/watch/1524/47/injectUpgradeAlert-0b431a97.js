import { u as indexAjaxData, j as jQueryPresent, a as add, I as getValue, a8 as now } from './calfSystem-7a121553.js';
import { n as notGoldUpgradesPage, p as parseGoldUpgrades, d as displayUpgradeMsg } from './parseGoldUpgrades-2e3c9bcf.js';

function upgradesGold() {
  return indexAjaxData({
    cmd: 'points',
    type: 1,
  });
}

function asyncParse(data) {
  add(3, parseGoldUpgrades, [data]);
}

function checkLastUpgrade() {
  const lastUpgradeCheck = getValue('lastUpgradeCheck');
  if (lastUpgradeCheck && now < lastUpgradeCheck) { return; }
  upgradesGold().then(asyncParse);
}

function notUpgradesPage() {
  if (getValue('needToDoUpgrade')) {
    displayUpgradeMsg();
    return;
  }
  checkLastUpgrade();
}

function injectUpgradeAlert() {
  if (jQueryPresent() && notGoldUpgradesPage()) {
    notUpgradesPage();
  }
}

export default injectUpgradeAlert;
//# sourceMappingURL=injectUpgradeAlert-0b431a97.js.map
