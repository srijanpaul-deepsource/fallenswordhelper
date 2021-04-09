import { O as navigateTo, ap as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-a8d6dd2c.js';
import { c as createInput } from './createInput-97498782.js';
import { i as insertElementAfter } from './insertElementAfter-3e821691.js';
import { i as insertElementBefore } from './insertElementBefore-71272774.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-3c169c12.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-4b5958d4.js';
import { i as interceptSubmit } from './interceptSubmit-b6bcec0e.js';
import './formToUrl-438642ae.js';

function gotoPage(pageId) {
  navigateTo(`${arenaUrl}completed&page=${pageId}`);
}

const lastPage = () => getText(querySelector('#pCC input[value="Go"]')
  .parentNode.previousElementSibling).replace(/\D/g, '');

function injectStartButton() {
  const prevButton = querySelector('#pCC input[value="<"]');
  if (prevButton) {
    const startButton = createInput({ type: 'button', value: '<<' });
    insertElementBefore(startButton, prevButton);
    insertHtmlAfterEnd(startButton, '&nbsp;');
    onclick(startButton, partial(gotoPage, 1));
  }
}

function gotoLastPage() { gotoPage(lastPage()); }

function injectFinishButton() {
  const nextButton = querySelector('#pCC input[value=">"]');
  if (nextButton) {
    const finishButton = createInput({ type: 'button', value: '>>' });
    insertElementAfter(finishButton, nextButton);
    insertHtmlBeforeBegin(finishButton, '&nbsp;');
    onclick(finishButton, gotoLastPage);
  }
}

function completedArenas() {
  injectStartButton();
  injectFinishButton();
  interceptSubmit();
}

export default completedArenas;
//# sourceMappingURL=completedArenas-98d5175b.js.map
