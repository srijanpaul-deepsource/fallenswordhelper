import { b as batch } from './batch-f8494b3a.js';
import { I as getValue, ad as querySelectorAll, bw as lastActivityRE, B as setInnerHtml } from './calfSystem-a8d6dd2c.js';
import { o as onlineDot } from './onlineDot-e36f81bc.js';

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
//# sourceMappingURL=colouredDots-72ef4469.js.map
