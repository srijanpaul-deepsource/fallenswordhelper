import { E as querySelector, ad as pointsUrl, H as getTextTrim } from './calfSystem-2bd62864.js';

function highlightPvpProtection() {
  const pvpp = querySelector(`#profileLeftColumn a[href="${pointsUrl}"]`);
  if (pvpp && getTextTrim(pvpp.parentNode.nextSibling) !== 'N/A') { // Text Node
    pvpp.parentNode.parentNode.style.cssText = 'border: 3px solid red'; // TODO
  }
}

export default highlightPvpProtection;
//# sourceMappingURL=highlightPvpProtection-f21f8c19.js.map
