import { E as querySelector, ac as cmdUrl, i as insertElement, o as onclick, T as sendEvent, Z as jQueryDialog, cg as insertQuickWear } from './calfSystem-8168cf6d.js';
import { c as createSpan } from './createSpan-94249871.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-41408406.js';

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
//# sourceMappingURL=quickWearLink-5e1d805f.js.map
