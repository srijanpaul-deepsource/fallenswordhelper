import allthen from '../../common/allthen';
import {cdn} from '../../system/system';
import chunk from '../../common/chunk';
import {componentList} from './prepareComponentList';
import {daDestroyComponent} from '../../_dataAccess/_dataAccess';
import deleteVisible from './deleteVisible';
import {isArray} from '../../common/isArray';
import partial from '../../common/partial';
import updateUsedCount from './updateUsedCount';

function doSpinner(td) {
  td.innerHTML = '';
  td.className = 'guildTagSpinner';
  td.style.backgroundImage = 'url(\'' + cdn +
    'ui/misc/spinner.gif\')';
}

function destroyed(data) {
  if (data.s && isArray(data.r)) {
    deleteVisible(data.r);
    updateUsedCount(data.r.length);
  }
}

function removeSpinner(td) {td.parentNode.remove();}

function destroy(el) {
  return daDestroyComponent(el).then(destroyed);
}

export default function delCompType(target) { // jQuery.min
  var toDelete = componentList[target.dataset.compid].del;
  var td = target.parentNode;
  doSpinner(td);
  var prm = chunk(30, toDelete).map(destroy);
  allthen(prm, partial(removeSpinner, td));
}
