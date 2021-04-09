import { c as chunk } from './chunk-f19f9471.js';
import { c as createButton } from './createButton-13c14e58.js';
import { c as createLi } from './createLi-b5d4554f.js';
import { c as createUl } from './createUl-2235e90a.js';
import { o as onclick, Y as sendEvent, i as insertElement, ba as places, t as createDocument, aA as retryAjax } from './calfSystem-a8d6dd2c.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-959a1b6e.js';
import { g as groupViewStats } from './groupViewStats-dd7c8bca.js';

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
//# sourceMappingURL=getGroupStats-c12432a6.js.map
