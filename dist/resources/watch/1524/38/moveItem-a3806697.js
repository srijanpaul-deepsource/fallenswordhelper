import { d as dialog } from './dialog-e89b7ecf.js';
import { i as indexAjaxJson } from './indexAjaxJson-8015c666.js';

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
//# sourceMappingURL=moveItem-a3806697.js.map
