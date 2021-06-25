import { b as bioEvtHdl, r as renderBio } from './render-8951ea1d.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-7a121553.js';
import './roundToString-042f58fd.js';
import './numberIsNaN-2f104aa2.js';
import './playerName-c1e4c230.js';

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
//# sourceMappingURL=bio-3e814743.js.map
