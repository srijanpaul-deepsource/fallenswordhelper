import { c as chunk } from './chunk-b7db8c6b.js';
import { c as createButton } from './createButton-7be709fc.js';
import { c as createLi } from './createLi-bfbf0170.js';
import { c as createUl } from './createUl-68448850.js';
import { o as onclick, Y as sendEvent, i as insertElement, bg as places, t as createDocument, aH as retryAjax } from './calfSystem-81938674.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-7610a5fa.js';
import { g as groupViewStats } from './groupViewStats-7dc77e09.js';

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
//# sourceMappingURL=getGroupStats-34d2c3fd.js.map
