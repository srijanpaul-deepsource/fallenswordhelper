import allthen from '../../common/allthen';
import calf from '../../support/calf';
import fetchinv from '../../app/guild/fetchinv';
import getInventory from '../../ajax/getInventory';
import loadInventory from '../../app/profile/loadInventory';
import partial from '../../common/partial';
import report from '../../app/guild/inventory/report';

export var theInv;
var composed = [];

function cacheTheInv(data) {
  theInv = data;
}

function doInventory() {
  return getInventory().then(cacheTheInv);
}

function itemsFromFolder(el) {return el.items;}

function composedPot(el) {return el.t === 15;}

function getComposedFromBp(data) {
  if (!Array.isArray(data.r)) {return;}
  composed = Array.prototype.concat.apply([], data.r.map(itemsFromFolder))
    .filter(composedPot);
}

function doComposedFromBp() {
  return loadInventory().then(getComposedFromBp);
}

function getComposedFromGs(data) {
  if (!Array.isArray(data.r)) {return;}
  composed = composed.concat(data.r.filter(composedPot));
}

function doGs() {
  return fetchinv().then(getComposedFromGs);
}

function doReport() {
  return report().then(getComposedFromGs);
}

function thisPot(inv_id, pot) {return pot.a === inv_id;}

function addComposedName(item) {
  if (item.type === 15) {
    var cp = composed.find(partial(thisPot, item.inv_id));
    item.item_name = cp.n;
  }
}

function gotSomeStuff() {
  theInv.items.forEach(addComposedName);
}

export function buildInv() {
  var prm = [doInventory()];
  if (calf.subcmd === 'invmanagernew') {
    prm.push(doComposedFromBp());
  }
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(doGs());
    prm.push(doReport());
  }
  return allthen(prm, gotSomeStuff);
}