import { c as chunk } from './chunk-91a9a131.js';
import { c as createButton } from './createButton-b310fb8b.js';
import { c as createLi } from './createLi-c54bf004.js';
import { c as createUl } from './createUl-4e8697eb.js';
import { o as onclick, T as sendEvent, i as insertElement, bn as places, t as createDocument, aO as retryAjax } from './calfSystem-579856fa.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-aa571bea.js';
import { g as groupViewStats } from './groupViewStats-28858eff.js';

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
//# sourceMappingURL=getGroupStats-dfbe6f40.js.map
