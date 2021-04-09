import { c as closestTd } from './closestTd-f2a7c998.js';
import { f as fshArenaKey } from './assets-40e3d434.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-a8d6dd2c.js';
import { g as get, s as set } from './idb-84403669.js';
import './closest-4ebdb6d3.js';

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
//# sourceMappingURL=store-b2bdffe8.js.map
