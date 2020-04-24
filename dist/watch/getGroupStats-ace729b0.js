import { ab as fallback, b0 as places, b1 as createLi, o as onclick, u as partial, au as openQuickBuffByName, i as insertElement, v as createDocument, a$ as retryAjax } from './calfSystem-69cf053a.js';
import { c as createUl } from './createUl-4e841e5c.js';
import { c as createButton } from './createButton-99f8b0e1.js';
import { g as groupViewStats } from './groupViewStats-57b18b1e.js';

function batchUp(acc, curr, i) {
  const slot = Math.floor(i / 16);
  acc[slot] = fallback(acc[slot], []);
  acc[slot].push(curr);
  return acc;
}

function makeButtons(acc, curr, i) {
  const theNames = curr.join(',');
  const modifierWord = places[i];
  const li = createLi();
  const btn = createButton({
    className: 'fshBl fshBls tip-static',
    dataset: { tipped: 'Quick buff functionality from HCS only does 16' },
    textContent: `Buff ${modifierWord} 16`,
  });
  onclick(btn, partial(openQuickBuffByName, theNames));
  insertElement(li, btn);
  insertElement(acc, li);
  return acc;
}

function doBuffLinks(members) {
  // quick buff only supports 16
  const shortList = members.reduce(batchUp, []).reduce(makeButtons, createUl());
  return shortList;
}

function parseGroupStats(html) {
  const doc = createDocument(html);
  return groupViewStats(doc);
}

function getGroupStats(viewStats) {
  return retryAjax(viewStats).then(parseGroupStats);
}

export { doBuffLinks as d, getGroupStats as g };
//# sourceMappingURL=getGroupStats-ace729b0.js.map
