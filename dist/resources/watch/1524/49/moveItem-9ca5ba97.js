import { d as dialog } from './dialog-7f115b68.js';
import { i as indexAjaxJson } from './indexAjaxJson-52989594.js';

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
//# sourceMappingURL=moveItem-9ca5ba97.js.map
