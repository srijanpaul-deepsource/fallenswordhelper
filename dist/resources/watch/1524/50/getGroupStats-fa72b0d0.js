import { c as chunk } from './chunk-965f25a6.js';
import { c as createButton } from './createButton-6a95e33b.js';
import { c as createLi } from './createLi-f9399930.js';
import { c as createUl } from './createUl-7b37e822.js';
import { o as onclick, T as sendEvent, i as insertElement, bn as places, t as createDocument, aO as retryAjax } from './calfSystem-8168cf6d.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-380b0015.js';
import { g as groupViewStats } from './groupViewStats-70333bea.js';

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
//# sourceMappingURL=getGroupStats-fa72b0d0.js.map
