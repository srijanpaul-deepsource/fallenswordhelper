import formatCost from './formatCost';
import getBuffsToBuy from './getBuffsToBuy';
import {getElementById} from '../../common/getElement';
import getPrice from './getPrice';
import getText from '../../common/getText';

var buffCost = {count: 0, buffs: {}};

function hazBuffs() { // Legacy
  var total = {k: 0, fsp: 0, stam: 0, unknown: 0};
  var html = 'This is an estimated cost based on how the script finds ' +
    'the cost associated with buffs from viewing bio.' +
    'It can be incorrect, please use with discretion.<br><hr>' +
    '<table border=0>';

  Object.keys(buffCost.buffs).forEach(function(buff) {
    total[buffCost.buffs[buff][1]] += buffCost.buffs[buff][0];
    html += '<tr><td>' + buff + '</td><td>: ' + buffCost.buffs[buff][0] +
      buffCost.buffs[buff][1] + '</td></tr>';
  });

  var totalText = formatCost(total);

  html += '</table><b>Total: ' + totalText + '</b>';
  getElementById('buffCost').innerHTML = '<br/><span ' +
    'class="tip-static" data-tipped="' + html + '">Estimated Cost: <b>' +
    totalText + '</b></span>';
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
    cost = price[0].match(/([+-]{0,1}[.\d]+)/)[0];
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

function getBuffNameNode(e) {
  var buffNameNode = e.target;
  while (buffNameNode.tagName && buffNameNode.tagName !== 'SPAN') {
    buffNameNode = buffNameNode.parentNode;
  }
  return buffNameNode;
}

function isBuffLink(buffNameNode) {
  return buffNameNode.classList &&
    buffNameNode.classList.contains('buffLink');
}

export default function bioEvtHdl(e) {
  // This is also called by bio preview
  var buffNameNode = getBuffNameNode(e);
  if (isBuffLink(buffNameNode)) {
    toggleBuffsToBuy(buffNameNode);
  } else if (e.target.id === 'fshSendBuffMsg') {
    getBuffsToBuy(buffCost);
  }
}
