import { O as navigateTo, ay as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-78c09adf.js';
import { c as createInput } from './createInput-de57287a.js';
import { i as insertElementAfter } from './insertElementAfter-9e420b6a.js';
import { i as insertElementBefore } from './insertElementBefore-34b77984.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-e5f49ac0.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-2dbd04e3.js';
import { i as interceptSubmit } from './interceptSubmit-415e0c7c.js';
import './formToUrl-82de8371.js';

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
//# sourceMappingURL=completedArenas-80622f17.js.map
