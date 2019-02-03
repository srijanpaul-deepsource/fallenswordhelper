import {cmdUrl} from '../support/constants';
import {createSpan} from '../common/cElement';
import insertElement from '../common/insertElement';
import insertQuickWear from '../notepad/quickWear/quickWear';
import insertTextBeforeEnd from '../common/insertTextBeforeEnd';
import jQueryDialog from '../chrome/jQueryDialog';
import on from '../common/on';
import querySelector from '../common/querySelector';
import {sendEvent} from '../support/fshGa';

function openQwDialog() {
  sendEvent('profile', 'insertQuickWear');
  jQueryDialog(insertQuickWear);
}

export default function quickWearLink() {
  // quick wear manager link
  var node = querySelector('#profileRightColumn a[href="' + cmdUrl +
    'profile&subcmd=togglesection&section_id=2"]');
  if (!node) {return;}
  var wrap = createSpan({innerHTML: '&nbsp;['});
  var qw = createSpan({className: 'sendLink', innerHTML: 'Quick&nbsp;Wear'});
  insertElement(wrap, qw);
  insertTextBeforeEnd(wrap, ']');
  insertElement(node.parentNode, wrap);
  on(qw, 'click', openQwDialog);
}
