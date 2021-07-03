import { b as bioEvtHdl, r as renderBio } from './render-b5b027af.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-2bd62864.js';
import './roundToString-a22b7b5d.js';
import './numberIsNaN-68797c81.js';
import './playerName-5ee9cf5c.js';

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
//# sourceMappingURL=bio-d8147557.js.map
