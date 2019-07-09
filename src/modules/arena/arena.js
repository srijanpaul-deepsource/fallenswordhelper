import allthen from '../common/allthen';
//#if _DEV  //  arenaFull
import arenaFull from './arenaFull';
//#endif
import doLvlFilter from './doLvlFilter';
import filterHeader from './filterHeader';
import {get} from 'idb-keyval';
import jQueryNotPresent from '../common/jQueryNotPresent';
import orderData from './orderData';
import partial from '../common/partial';
//#if _DEV  //  participants
import participants from './participants';
//#endif
import querySelectorArray from '../common/querySelectorArray';
import redoSort from './redoSort';
import {sendEvent} from '../support/fshGa';
import updateUrl from './updateUrl';
import view from '../app/arena/view';
import {fshArenaKey, tableOpts} from './assets';
import {
  setOpts,
  storeOpts
} from './setOpts';
//#if _BETA  //  Timing output
import {time, timeEnd} from '../support/debug';
//#endif

function removeHiddenRows() {
  const hiddenRows = querySelectorArray(
    '#arenaTypeTabs tr[style="display: none;"]');
  hiddenRows.forEach(n => n.remove());
}

function redoHead(i, e) { // jQuery
  var firstRow = $('tr', e).first();
  $('a', firstRow).contents().unwrap();
  $(e).prepend($('<thead/>').append(firstRow));
}

function prepareEnv() {
  filterHeader();
  storeOpts();
  doLvlFilter();
}

function arenaDataTable(tabs, [arena, obj, json]) { // jQuery
  const theTables = $('table[width="635"]', tabs);
  theTables.each(redoHead);
  setOpts(arena);
  orderData(theTables);
  //#if _DEV  //  participants
  arenaFull(obj);
  participants(json);
  //#endif
  prepareEnv();
  theTables.DataTable(tableOpts);
  redoSort(tabs);
  tabs.on('click', 'input.custombutton[type="submit"]', updateUrl);
}

function process(tabs, values) {
  //#if _BETA  //  Timing output

  time('arena.process');

  //#endif
  removeHiddenRows();
  arenaDataTable(tabs, values);
  //#if _BETA  //  Timing output

  timeEnd('arena.process');

  //#endif
}

export function injectArena() { // jQuery
  if (jQueryNotPresent()) {return;}
  var tabs = $('#arenaTypeTabs');
  if (tabs.length !== 1) { // Join error screen
    sendEvent('arena', 'Join error screen ?');
    return;
  }
  allthen([get(fshArenaKey), get('arenaFull'), view()], partial(process, tabs));
}
