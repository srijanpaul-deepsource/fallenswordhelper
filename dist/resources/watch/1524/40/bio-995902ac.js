import { b as bioEvtHdl, r as renderBio } from './render-69966bce.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-81938674.js';
import './roundToString-2195a730.js';
import './numberIsNaN-2764ce9c.js';
import './playerName-eb2e25a5.js';
import './toLowerCase-d053e281.js';

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
//# sourceMappingURL=bio-995902ac.js.map
