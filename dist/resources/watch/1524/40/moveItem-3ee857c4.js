import { d as dialog } from './dialog-17ce66e6.js';
import { i as indexAjaxJson } from './indexAjaxJson-4d37c260.js';

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
//# sourceMappingURL=moveItem-3ee857c4.js.map
