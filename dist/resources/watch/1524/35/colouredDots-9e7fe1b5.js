import { b as batch } from './batch-a1d0ca14.js';
import { I as getValue, ad as querySelectorAll, bw as lastActivityRE, B as setInnerHtml } from './calfSystem-06ff1f7b.js';
import { o as onlineDot } from './onlineDot-92c3f29d.js';

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
//# sourceMappingURL=colouredDots-9e7fe1b5.js.map
