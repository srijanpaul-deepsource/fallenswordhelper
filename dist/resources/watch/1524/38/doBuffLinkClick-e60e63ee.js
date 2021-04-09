import { f as insertHtmlBeforeEnd, h as hasClass, H as getTextTrim } from './calfSystem-a8d6dd2c.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-959a1b6e.js';

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
//# sourceMappingURL=doBuffLinkClick-e60e63ee.js.map
