import { b as batch } from './batch-9678ee7c.js';
import { F as querySelectorArray, I as getValue, bC as lastActivityRE, B as setInnerHtml } from './calfSystem-8168cf6d.js';
import { o as onlineDot } from './onlineDot-8bd2ce97.js';

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
//# sourceMappingURL=colouredDots-6f9f4605.js.map
