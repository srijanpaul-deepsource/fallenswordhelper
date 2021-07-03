import { E as querySelector, ac as cmdUrl, i as insertElement, o as onclick, T as sendEvent, Z as jQueryDialog, cg as insertQuickWear } from './calfSystem-2bd62864.js';
import { c as createSpan } from './createSpan-1b6c0349.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-d974fc3f.js';

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
//# sourceMappingURL=quickWearLink-b8d6a5e2.js.map
