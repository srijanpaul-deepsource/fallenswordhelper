import { f as insertHtmlBeforeEnd, h as hasClass, H as getTextTrim } from './calfSystem-2bd62864.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-88623c19.js';

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
//# sourceMappingURL=doBuffLinkClick-d68f6f15.js.map
