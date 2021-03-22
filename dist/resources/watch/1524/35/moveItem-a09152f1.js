import { d as dialog } from './dialog-bd85dd64.js';
import { i as indexAjaxJson } from './indexAjaxJson-d3f06031.js';

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
//# sourceMappingURL=moveItem-a09152f1.js.map
