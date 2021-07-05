import { f as insertHtmlBeforeEnd, h as hasClass, H as getTextTrim } from './calfSystem-8168cf6d.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-380b0015.js';

function doBuffLink(playerLink) {
  insertHtmlBeforeEnd(playerLink.parentNode,
    ' <button class="fshBl fshBls">[b]</button>');
}

const isBuffLink = (target) => hasClass('fshBl', target)
  && target.previousElementSibling;

function doBuffLinkClick(e) {
  if (isBuffLink(e.target)) {
    openQuickBuffByName(getTextTrim(e.target.previousElementSibling));
  }
}

export { doBuffLinkClick as a, doBuffLink as d };
//# sourceMappingURL=doBuffLinkClick-903fcb0c.js.map
