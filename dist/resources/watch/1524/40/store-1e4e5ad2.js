import { c as closestTd } from './closestTd-2f0c272b.js';
import { f as fshArenaKey } from './assets-5392162d.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-81938674.js';
import { g as get, s as set } from './idb-5e72df32.js';
import './closest-abbeba17.js';

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
//# sourceMappingURL=store-1e4e5ad2.js.map
