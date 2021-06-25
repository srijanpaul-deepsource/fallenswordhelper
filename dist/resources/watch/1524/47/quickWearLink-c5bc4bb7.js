import { E as querySelector, ab as cmdUrl, i as insertElement, o as onclick, T as sendEvent, Y as jQueryDialog, cf as insertQuickWear } from './calfSystem-7a121553.js';
import { c as createSpan } from './createSpan-bcdf48f3.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-e3c0faff.js';

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
//# sourceMappingURL=quickWearLink-c5bc4bb7.js.map
