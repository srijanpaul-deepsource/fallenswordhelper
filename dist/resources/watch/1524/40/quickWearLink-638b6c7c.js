import { E as querySelector, aa as cmdUrl, i as insertElement, o as onclick, Y as sendEvent, Z as jQueryDialog, cc as insertQuickWear } from './calfSystem-81938674.js';
import { c as createSpan } from './createSpan-615a174b.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-34e49f39.js';

function openQwDialog() {
  sendEvent('profile', 'insertQuickWear');
  jQueryDialog(insertQuickWear);
}

function quickWearLink() {
  // quick wear manager link
  const node = querySelector(`#profileRightColumn a[href="${cmdUrl
  }profile&subcmd=togglesection&section_id=2"]`);
  if (!node) { return; }
  const wrap = createSpan({ innerHTML: '&nbsp;[' });
  const qw = createSpan({ className: 'sendLink', innerHTML: 'Quick&nbsp;Wear' });
  insertElement(wrap, qw);
  insertTextBeforeEnd(wrap, ']');
  insertElement(node.parentNode, wrap);
  onclick(qw, openQwDialog);
}

export default quickWearLink;
//# sourceMappingURL=quickWearLink-638b6c7c.js.map
