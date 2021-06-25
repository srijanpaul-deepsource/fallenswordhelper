import { d as dialog } from './dialog-a4dfa31d.js';
import { i as indexAjaxJson } from './indexAjaxJson-0d19fdb7.js';

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
//# sourceMappingURL=moveItem-7316c42a.js.map
