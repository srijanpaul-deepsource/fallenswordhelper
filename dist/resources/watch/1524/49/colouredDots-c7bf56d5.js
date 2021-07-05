import { b as batch } from './batch-e040f528.js';
import { F as querySelectorArray, I as getValue, bC as lastActivityRE, B as setInnerHtml } from './calfSystem-579856fa.js';
import { o as onlineDot } from './onlineDot-4f22fad0.js';

function getPlayers() {
  return querySelectorArray('#pCC a[data-tipped*="Last Activity"]');
}

function changeOnlineDot(contactLink) {
  const lastActivity = lastActivityRE.exec(contactLink.dataset.tipped);
  setInnerHtml(onlineDot({
    min: lastActivity[3],
    hour: lastActivity[2],
    day: lastActivity[1],
  }), contactLink.parentNode.previousElementSibling);
}

function colouredDots() {
  if (!getValue('enhanceOnlineDots')) { return; }
  batch([
    5,
    3,
    getPlayers(),
    0,
    changeOnlineDot,
  ]);
}

export { colouredDots as c, getPlayers as g };
//# sourceMappingURL=colouredDots-c7bf56d5.js.map
