import { b as bioEvtHdl, r as renderBio } from './render-25a6faf9.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-78c09adf.js';
import './roundToString-334a34af.js';
import './numberIsNaN-484c0124.js';
import './playerName-bb0f99eb.js';
import './toLowerCase-8d8df902.js';

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
//# sourceMappingURL=bio-5a0453f5.js.map
