import { b as bioEvtHdl, r as renderBio } from './render-2d46abea.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-a8d6dd2c.js';
import './roundToString-a20f2465.js';
import './numberIsNaN-30cde299.js';
import './playerName-48998b79.js';
import './toLowerCase-b0c4634d.js';

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
//# sourceMappingURL=bio-87676e59.js.map
