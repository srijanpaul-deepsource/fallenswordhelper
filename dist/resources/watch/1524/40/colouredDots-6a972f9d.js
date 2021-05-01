import { b as batch } from './batch-51c0b95b.js';
import { F as querySelectorArray, I as getValue, bw as lastActivityRE, B as setInnerHtml } from './calfSystem-81938674.js';
import { o as onlineDot } from './onlineDot-71025c2d.js';

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
//# sourceMappingURL=colouredDots-6a972f9d.js.map
