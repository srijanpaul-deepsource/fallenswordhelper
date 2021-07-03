import { c as closest } from './closest-3a475e96.js';
import { aF as defTd, H as getTextTrim, F as querySelectorArray } from './calfSystem-2bd62864.js';
import { f as fshArenaKey } from './assets-7b5d479d.js';
import { g as get, s as set } from './idb-9e22c871.js';

function closestTd(el) {
  return closest(defTd, el);
}

function getCount(moveImg) {
  return /(\d)$/.exec(getTextTrim(closestTd(moveImg)))[1];
}

function getCounts(acc, moveImg) {
  const moveId = /(\d+)\.png/.exec(moveImg.src)[1];
  acc[moveId] = Number(getCount(moveImg));
  return acc;
}

function gotMoves(_arena) {
  const arena = _arena || {};
  const arenaMoves = querySelectorArray('#pCC img[vspace="4"]').slice(1);
  arena.moves = arenaMoves.reduce(getCounts, {});
  set(fshArenaKey, arena);
}

function storeMoves() {
  get(fshArenaKey).then(gotMoves);
}

export default storeMoves;
//# sourceMappingURL=store-95dbeb40.js.map
