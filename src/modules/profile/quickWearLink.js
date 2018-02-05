import {createSpan} from '../common/cElement';
import insertQuickWear from '../quickWear/quickWear';
import jQueryDialog from '../chrome/jQueryDialog';
import {sendEvent} from '../support/fshGa';

export default function quickWearLink() {
  // quick wear manager link
  var node = document.querySelector('#profileRightColumn ' +
    'a[href="index.php?cmd=profile&subcmd=togglesection&section_id=2"]');
  if (!node) {return;}
  var wrap = createSpan({innerHTML: '&nbsp;['});
  var qw = createSpan({className: 'sendLink', innerHTML: 'Quick&nbsp;Wear'});
  wrap.appendChild(qw);
  wrap.insertAdjacentText('beforeend', ']');
  node.parentNode.appendChild(wrap);
  qw.addEventListener('click', function() {
    sendEvent('profile', 'insertQuickWear');
    jQueryDialog(insertQuickWear);
  });
}
