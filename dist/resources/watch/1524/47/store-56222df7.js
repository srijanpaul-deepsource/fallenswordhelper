import { c as closest } from './closest-4542e515.js';
import { aE as defTd, H as getTextTrim, F as querySelectorArray } from './calfSystem-7a121553.js';
import { f as fshArenaKey } from './assets-e9494ccd.js';
import { g as get, s as set } from './idb-a4bd5e0c.js';

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
//# sourceMappingURL=store-56222df7.js.map
