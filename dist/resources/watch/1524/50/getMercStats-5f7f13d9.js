import { u as indexAjaxData, bo as mercRE, b4 as defenderMultiplier, s as partial, t as createDocument, F as querySelectorArray } from './calfSystem-8168cf6d.js';

function addMercStat(mouseover, stat, i) {
  return stat
    + Math.round(Number(mercRE[i].exec(mouseover)[1]) * defenderMultiplier);
}

function addMercStats(acc, merc) {
  return acc.map(partial(addMercStat, merc.dataset.tipped));
}

function addAllMercStats(mercElements) {
  return mercElements.reduce(addMercStats, [0, 0, 0, 0, 0]);
}

function transform(mercTotal) {
  return {
    attack: mercTotal[0],
    defense: mercTotal[1],
    armor: mercTotal[2],
    damage: mercTotal[3],
    hp: mercTotal[4],
  };
}

function parseMercStats(html) {
  const doc = createDocument(html);
  const mercElements = querySelectorArray('#pCC img[src*="/merc/"]', doc);
  const mercTotal = addAllMercStats(mercElements);
  return transform(mercTotal);
}

function getMercStats() {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'mercs',
  }).then(parseMercStats);
}

export { getMercStats as g };
//# sourceMappingURL=getMercStats-5f7f13d9.js.map
