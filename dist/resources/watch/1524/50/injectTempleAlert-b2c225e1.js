import { c as calf, y as jQueryNotPresent, a9 as now, I as getValue, u as indexAjaxData, bY as parseTemplePage, bZ as displayDisconnectedFromGodsMessage } from './calfSystem-8168cf6d.js';

function checkLastUpdate(templeAlertLastUpdate) {
  return !templeAlertLastUpdate || now > templeAlertLastUpdate;
}

function doWeNeedToParse() {
  if (checkLastUpdate(getValue('lastTempleCheck'))) {
    indexAjaxData({ cmd: 'temple' }).then(parseTemplePage);
  } else if (getValue('needToPray')) {
    displayDisconnectedFromGodsMessage();
  }
}

function injectTempleAlert() { // jQuery
  // Checks to see if the temple is open for business.
  if (calf.cmd === 'temple' || jQueryNotPresent()) { return; }
  doWeNeedToParse();
}

export default injectTempleAlert;
//# sourceMappingURL=injectTempleAlert-b2c225e1.js.map
