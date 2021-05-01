import { c as chunk } from './chunk-af680637.js';
import { c as createButton } from './createButton-c0a3df21.js';
import { c as createLi } from './createLi-d0bbd1f7.js';
import { c as createUl } from './createUl-cf071410.js';
import { o as onclick, Y as sendEvent, i as insertElement, bh as places, t as createDocument, aI as retryAjax } from './calfSystem-6b7d7ae6.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-dc6e5aed.js';
import { g as groupViewStats } from './groupViewStats-ef762114.js';

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
//# sourceMappingURL=getGroupStats-f60d44a7.js.map
