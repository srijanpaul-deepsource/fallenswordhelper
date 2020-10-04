import { G as getValue, ac as querySelectorAll, bq as lastActivityRE, A as setInnerHtml } from './calfSystem-975d976a.js';
import { o as onlineDot } from './onlineDot-dc6c8ae7.js';
import { b as batch } from './batch-09b88166.js';

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
    querySelectorAll('#pCC a[data-tipped*="Last Activity"]'),
    0,
    changeOnlineDot,
  ]);
}

export { colouredDots as c };
//# sourceMappingURL=colouredDots-ea1c9313.js.map