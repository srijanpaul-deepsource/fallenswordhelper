import { c as closest } from './closest-0e1c7a1d.js';
import { aF as defTd, H as getTextTrim, F as querySelectorArray } from './calfSystem-579856fa.js';
import { f as fshArenaKey } from './assets-f2535d93.js';
import { g as get, s as set } from './idb-597cc5e6.js';

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
//# sourceMappingURL=store-4fa11ec5.js.map
