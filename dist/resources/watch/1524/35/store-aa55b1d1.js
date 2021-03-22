import { c as closestTd } from './closestTd-9ac01ab3.js';
import { f as fshArenaKey } from './assets-716577f9.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-06ff1f7b.js';
import { g as get, s as set } from './idb-7e618446.js';
import './closest-1ff01e01.js';

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
//# sourceMappingURL=store-aa55b1d1.js.map
