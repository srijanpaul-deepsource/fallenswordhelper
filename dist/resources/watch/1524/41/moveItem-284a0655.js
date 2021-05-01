import { d as dialog } from './dialog-1254e587.js';
import { i as indexAjaxJson } from './indexAjaxJson-28a71ea6.js';

function moveItem(invIdList, folderId) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    inv_list: JSON.stringify(invIdList),
    folder_id: folderId,
    ajax: 1,
  }).then(dialog);
}

export { moveItem as m };
//# sourceMappingURL=moveItem-284a0655.js.map
