import { z as getElementById, f as insertHtmlBeforeEnd, W as scouttowerUrl, ao as cdn } from './calfSystem-a8d6dd2c.js';

function scoutTowerLink() {
  const spoils = getElementById('minibox-spoilsofwar');
  if (spoils) {
    const parent = spoils.children[1].children[0];
    insertHtmlBeforeEnd(parent, `&nbsp;<a href="${scouttowerUrl
    }" class="tip-static" data-tipped="View Scout Report">`
      + '<img id="fshScoutTower" '
      + `src="${cdn}/structures/27.png"></a>`);
  }
}

export default scoutTowerLink;
//# sourceMappingURL=scoutTowerLink-ccc10595.js.map
