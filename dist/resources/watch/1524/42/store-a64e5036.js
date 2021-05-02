import { c as closestTd } from './closestTd-ce06a14f.js';
import { f as fshArenaKey } from './assets-62f5bf10.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-78c09adf.js';
import { g as get, s as set } from './idb-364f7bbb.js';
import './closest-9a08f4fa.js';

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
//# sourceMappingURL=store-a64e5036.js.map
