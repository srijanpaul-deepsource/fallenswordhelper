import { c as chunk } from './chunk-c0e724c2.js';
import { c as createButton } from './createButton-807f5892.js';
import { c as createLi } from './createLi-b5e42de2.js';
import { c as createUl } from './createUl-8f2e09e7.js';
import { o as onclick, T as sendEvent, i as insertElement, bm as places, t as createDocument, aN as retryAjax } from './calfSystem-7a121553.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-e7c218f3.js';
import { g as groupViewStats } from './groupViewStats-075ab53c.js';

function getListItem(words, names) {
  const li = createLi();
  const btn = createButton({
    className: 'fshBl fshBls',
    textContent: words,
  });
  onclick(btn, (evt) => {
    evt.target.blur();
    openQuickBuffByName(names);
    sendEvent('doBuffLinks', words);
  });
  insertElement(li, btn);
  return li;
}

function makeButtons(acc, curr, i) {
  insertElement(acc, getListItem(`Buff ${places[i]} 16`, curr.join(',')));
  return acc;
}

function doBuffLinks(members) {
  const chunks = chunk(16, members);
  const ul = createUl();
  if (chunks.length > 1) {
    insertElement(ul, getListItem('Buff All', members.join(',')));
  }
  return chunks.reduce(makeButtons, ul);
}

function parseGroupStats(html) {
  const doc = createDocument(html);
  return groupViewStats(doc);
}

function getGroupStats(viewStats) {
  return retryAjax(viewStats).then(parseGroupStats);
}

export { doBuffLinks as d, getGroupStats as g };
//# sourceMappingURL=getGroupStats-30aa5b00.js.map
