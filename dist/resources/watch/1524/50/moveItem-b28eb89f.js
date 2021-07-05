import { d as dialog } from './dialog-7b91fd18.js';
import { i as indexAjaxJson } from './indexAjaxJson-8e794cab.js';

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
//# sourceMappingURL=moveItem-b28eb89f.js.map
