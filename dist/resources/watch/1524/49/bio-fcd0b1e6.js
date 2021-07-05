import { b as bioEvtHdl, r as renderBio } from './render-1872511c.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-579856fa.js';
import './roundToString-98c640ba.js';
import './numberIsNaN-9a364388.js';
import './playerName-8c7974a3.js';

function doRender(bioCell) {
  const bioContents = renderBio(bioCell.innerHTML);
  if (bioContents) {
    setInnerHtml(bioContents, bioCell);
  }
}

function profileRenderBio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  doRender(bioCell);
  onclick(bioCell, bioEvtHdl);
}

export default profileRenderBio;
//# sourceMappingURL=bio-fcd0b1e6.js.map
