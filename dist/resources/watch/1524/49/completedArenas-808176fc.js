import { N as navigateTo, aD as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-579856fa.js';
import { c as createInput } from './createInput-d0e46520.js';
import { i as insertElementAfter } from './insertElementAfter-41f6284c.js';
import { i as insertElementBefore } from './insertElementBefore-c7161beb.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a16caebb.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-70b1463d.js';
import { i as interceptSubmit } from './interceptSubmit-9bdd8d86.js';
import './formToUrl-72736914.js';

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
//# sourceMappingURL=completedArenas-808176fc.js.map
