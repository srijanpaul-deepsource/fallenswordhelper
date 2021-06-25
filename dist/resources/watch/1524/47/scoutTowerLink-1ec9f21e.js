import { z as getElementById, f as insertHtmlBeforeEnd, W as scouttowerUrl, aB as cdn } from './calfSystem-7a121553.js';

function scoutTowerLink() {
  const spoils = getElementById('minibox-spoilsofwar');
  if (!spoils) { return; }
  const content = spoils.children[1];
  if (!content) { return; }
  const parent = content.children[0];
  insertHtmlBeforeEnd(parent, `&nbsp;<a href="${
    scouttowerUrl}" data-tooltip="View Scout Report"><img id="fshScoutTower" src="${
    cdn}/structures/27.png"></a>`);
}

export default scoutTowerLink;
//# sourceMappingURL=scoutTowerLink-1ec9f21e.js.map
