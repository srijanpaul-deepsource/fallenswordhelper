import { b as bioEvtHdl, r as renderBio } from './render-dfa1bae4.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-8168cf6d.js';
import './roundToString-8226c38a.js';
import './numberIsNaN-bf55a311.js';
import './playerName-7c57da4d.js';

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
//# sourceMappingURL=bio-0b9e0d25.js.map
