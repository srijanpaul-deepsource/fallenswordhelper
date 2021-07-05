import { a as addLogColoring } from './addLogColoring-d62fec4d.js';
import { a as addLogWidgets } from './addLogWidgets-cd309233.js';
import { S as getUrlParameter, k as on, p as pCC, o as onclick, N as navigateTo, O as indexPhp } from './calfSystem-8168cf6d.js';
import './createStyle-fad5ff5e.js';
import './dataRows-47220ec2.js';
import './doBuffLinkClick-903fcb0c.js';
import './openQuickBuffByName-380b0015.js';
import './fshOpen-90a0d847.js';
import './parseDateAsTimestamp-a0e15282.js';
import './insertHtmlAfterEnd-4f6ecf31.js';
import './currentGuildId-c09348df.js';
import './getMembrList-fd4387c1.js';
import './cmdExport-695e7790.js';
import './indexAjaxJson-8e794cab.js';
import './idb-d2486026.js';
import './closestTr-d78cbeea.js';
import './closest-06418423.js';
import './addCommas-b66fde4c.js';
import './myStats-7ee65501.js';
import './getProfile-fa8e82d0.js';
import './playerName-7c57da4d.js';

let thisType;
let injectType;
let prevPage;
let nextPage;

const strategies = [
  ['All', () => ''],
  ['<', () => `${prevPage}${injectType}`],
  ['>', () => `${nextPage}${injectType}`],
];

function clickHandler(e) {
  if (e.target.tagName !== 'INPUT') { return; }
  const thisStrategy = strategies.find(([label]) => label === e.target.value);
  if (thisStrategy) {
    e.stopPropagation();
    navigateTo(`${indexPhp}?cmd=log${thisStrategy[1]()}`);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const myParams = new URLSearchParams(new FormData(e.target));
  const targetType = myParams.get('type');
  if (targetType !== thisType) { myParams.delete('type'); }
  navigateTo(`${indexPhp}?${myParams.toString()}`);
}

function fixFilters() {
  thisType = getUrlParameter('type');
  injectType = thisType ? `&type=${thisType}` : '';
  const pageNo = getUrlParameter('page');
  prevPage = pageNo ? `&page=${Number(pageNo) - 1}` : '';
  nextPage = pageNo ? `&page=${Number(pageNo) + 1}` : '&page=2';
  on(pCC, 'submit', submitHandler);
  onclick(pCC, clickHandler, true);
}

function playerLog() {
  addLogColoring('PlayerLog', 1, 3);
  addLogWidgets();
  fixFilters();
}

export default playerLog;
//# sourceMappingURL=playerLog-c20522ce.js.map
