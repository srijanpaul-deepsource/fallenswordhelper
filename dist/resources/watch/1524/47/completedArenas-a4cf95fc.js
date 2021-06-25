import { N as navigateTo, aC as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-7a121553.js';
import { c as createInput } from './createInput-7d0d9c43.js';
import { i as insertElementAfter } from './insertElementAfter-8028e664.js';
import { i as insertElementBefore } from './insertElementBefore-165ce171.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0c908a83.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-eb4b2f2c.js';
import { i as interceptSubmit } from './interceptSubmit-59d68b59.js';
import './formToUrl-c26b8bfa.js';

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
//# sourceMappingURL=completedArenas-a4cf95fc.js.map
