import { b as bioEvtHdl, r as renderBio } from './render-4d5e4a90.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-06ff1f7b.js';
import './roundToString-29c5853e.js';
import './numberIsNaN-1e8b4508.js';
import './playerName-752bf5eb.js';
import './toLowerCase-5dc9e42d.js';

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
//# sourceMappingURL=bio-3031907b.js.map
