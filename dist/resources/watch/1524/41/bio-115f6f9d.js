import { b as bioEvtHdl, r as renderBio } from './render-6c55a6a0.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-6b7d7ae6.js';
import './roundToString-86837998.js';
import './numberIsNaN-9d4c441b.js';
import './playerName-87d5a31b.js';
import './toLowerCase-39a6c297.js';

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
//# sourceMappingURL=bio-115f6f9d.js.map
