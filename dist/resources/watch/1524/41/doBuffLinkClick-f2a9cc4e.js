import { f as insertHtmlBeforeEnd, h as hasClass, H as getTextTrim } from './calfSystem-6b7d7ae6.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-dc6e5aed.js';

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
//# sourceMappingURL=doBuffLinkClick-f2a9cc4e.js.map
