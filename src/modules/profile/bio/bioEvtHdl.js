import formatCost from './formatCost';
import getBuffsToBuy from './getBuffsToBuy';
import {getElementById} from '../../common/getElement';
import getPrice from './getPrice';
import getText from '../../common/getText';

var buffCost = {count: 0, buffs: {}};

function buffRows(pair) {
  return '<tr><td>' + pair[0] + '</td><td>: ' + pair[1][0] +
    pair[1][1] + '</td></tr>';
}

function totalCost(prev, pair) {
  prev[pair[1][1]] += pair[1][0];
  return prev;
}

function hazBuffs() {
  var myEntries = Object.entries(buffCost.buffs);
  var totalText = formatCost(myEntries.reduce(totalCost,
    {k: 0, fsp: 0, stam: 0, unknown: 0}));
  getElementById('buffCost').innerHTML = '<br><span class="tip-static" ' +
    'data-tipped="This is an estimated cost based on how the script finds ' +
    'the cost associated with buffs from viewing bio. It can be incorrect, ' +
    'please use with discretion.<br><hr><table border=0>' +
    myEntries.map(buffRows).join('') + '</table><b>Total: ' + totalText +
    '</b>">Estimated Cost: <b>' + totalText + '</b></span>';
  buffCost.buffCostTotalText = totalText;
}

function updateBuffCost() { // Legacy
  if (buffCost.count > 0) {
    hazBuffs();
  } else {
    getElementById('buffCost').innerHTML = '';
    buffCost.buffCostTotalText = '';
  }
}

function priceUnit(price) {
  if (price[0].includes('k')) {
    return 'k';
  }
  if (price[0].includes('f')) {
    return 'fsp';
  }
  return 'stam';
}

function getBuffCost(buffNameNode) {
  var price = getPrice(buffNameNode);
  var type;
  var cost;
  if (price) {
    type = priceUnit(price);
    cost = price[0].match(/([+-]?[.\d]+)/)[0];
  } else {
    type = 'unknown';
    cost = '1';
  }
  buffCost.buffs[getText(buffNameNode)] = [parseFloat(cost), type];
  buffCost.count += 1;
}

function toggleBuffsToBuy(buffNameNode) { // Legacy
  var selected = buffNameNode.classList.contains('fshBlue');
  buffNameNode.classList.toggle('fshBlue');
  buffNameNode.classList.toggle('fshYellow');
  var buffName = getText(buffNameNode);
  if (selected) {
    getBuffCost(buffNameNode);
  } else {
    buffCost.count -= 1;
    delete buffCost.buffs[buffName];
  }
  updateBuffCost();
}

function closestSpan(el) {
  if (!el.tagName || el.tagName === 'SPAN') {return el;}
  return closestSpan(el.parentNode);
}

function isBuffLink(buffNameNode) {
  return buffNameNode.classList &&
    buffNameNode.classList.contains('buffLink');
}

export default function bioEvtHdl(e) {
  // This is also called by bio preview
  if (e.target.id === 'fshSendBuffMsg') {
    getBuffsToBuy(buffCost);
    return;
  }
  var buffNameNode = closestSpan(e.target);
  if (isBuffLink(buffNameNode)) {
    toggleBuffsToBuy(buffNameNode);
  }
}