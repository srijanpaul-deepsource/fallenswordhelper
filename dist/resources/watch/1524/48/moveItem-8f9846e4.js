import { d as dialog } from './dialog-3056695b.js';
import { i as indexAjaxJson } from './indexAjaxJson-ff53f4ae.js';

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
//# sourceMappingURL=moveItem-8f9846e4.js.map
