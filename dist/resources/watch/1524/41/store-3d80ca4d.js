import { c as closestTd } from './closestTd-cb39b3db.js';
import { f as fshArenaKey } from './assets-cf4c1cc6.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-6b7d7ae6.js';
import { g as get, s as set } from './idb-abe33202.js';
import './closest-865e9de8.js';

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
//# sourceMappingURL=store-3d80ca4d.js.map
