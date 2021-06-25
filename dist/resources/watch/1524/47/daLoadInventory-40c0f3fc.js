import { s as partial, bw as profile, $ as $dataAccess } from './calfSystem-7a121553.js';
import { b as backpack } from './backpack-ece8b1e9.js';

function byFolder(items, folder) {
  return {
    id: folder.a,
    name: folder.n,
    items: items.filter((i) => i.f === folder.a),
  };
}

function formatResponse(json) {
  const itemsByFolder = json.folders.map(partial(byFolder, json.items));
  return { r: itemsByFolder, s: true };
}

function fetchinv() {
  return backpack().then(formatResponse);
}

function loadInventory() {
  return profile({ subcmd: 'loadinventory' });
}

function daLoadInventory() {
  return $dataAccess(loadInventory, fetchinv);
}

export { daLoadInventory as d };
//# sourceMappingURL=daLoadInventory-40c0f3fc.js.map
