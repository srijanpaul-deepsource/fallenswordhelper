import backpack from '../../ajaxQueue/backpack';
import partial from '../../common/partial';

function byFolder(items, folder) {
  return {
    id: folder.a,
    name: folder.n,
    items: items.filter((i) => i.f === folder.a),
  };
}

function addExtra(item) {
  if (item.x) {
    return { ...item, extra: { design: item.x.d, color: item.x.c } };
  }
  return item;
}

function formatResponse(json) {
  const itemsByFolder = json.folders.map(partial(byFolder, json.items.map(addExtra)));
  return { r: itemsByFolder, s: true };
}

export default function fetchinv() {
  return backpack().then(formatResponse);
}
