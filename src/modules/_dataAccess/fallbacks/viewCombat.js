import combatView from '../../ajax/combatView';
import createDocument from '../../system/createDocument';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';
import sendEvent from '../../analytics/sendEvent';

function getId(e) {
  return Number(e.getAttribute('background').match(/\/(\d+)/)?.[1]);
}

function getResult(script, e) {
  const thisRe = new RegExp(`${e} = (\\d+)`);
  return Number(script.match(thisRe)[1]);
}

function gettokens(spec) {
  const matchTokens = [[18, 'leeched'], [21, 'Spell']]
    .map(([id, token]) => [
      id,
      spec.includes(token),
      spec.split(' ')[0],
      spec.split('\'')[1],
    ])
    .find(([, match]) => match);
  if (!matchTokens) {
    sendEvent('Logs', 'Missing PvP Special', spec);
    return { id: -1, params: ['-1', '-1'] };
  }
  return { id: matchTokens[0], params: [matchTokens[2], matchTokens[3]] };
}

function formatSpecial(pCC) {
  const divs = querySelectorArray('#specialsDiv', pCC);
  const texts = divs.map(getTextTrim);
  const filtered = texts.filter((t) => ['leeched', 'Spell'].some((s) => t.includes(s)));
  return filtered.map(gettokens);
}

function attacker(header) {
  return {
    id: getId(header.rows[1].cells[0]),
    name: getTextTrim(header.rows[0].cells[0]),
  };
}

function defender(header) {
  return {
    id: getId(header.rows[1].cells[2]),
    name: getTextTrim(header.rows[0].cells[2]),
  };
}

function doBase(id, pCC) {
  const header = pCC.children[0].rows[5].cells[0].children[0];
  return {
    attacker: attacker(header),
    defender: defender(header),
    id: Number(id),
    specials: formatSpecial(pCC),
  };
}

function doscript(pCC) {
  const script = getText(pCC.children[1]);
  return {
    gold_gain: getResult(script, 'goldGain'),
    gold_stolen: getResult(script, 'goldStolen'),
    pvp_prestige_gain: getResult(script, 'prestigeGain'),
    pvp_rating_change: getResult(script, 'pvpRatingChange'),
    winner: getResult(script, 'winner'),
    xp_gain: getResult(script, 'xpGain'),
  };
}

function reportObject(id, pCC) {
  return { ...doBase(id, pCC), ...doscript(pCC) };
}

function parseReport(id, html) {
  const doc = createDocument(html);
  const pCC = getElementById('pCC', doc);
  return {
    r: {
      combat: reportObject(id, pCC),
    },
    s: true,
  };
}

export default async function viewCombat(id) {
  const html = await combatView(id);
  return parseReport(id, html);
}
