import * as debug from './debug';
import * as layout from './layout';

var times = {};
var refAry = ['www.lazywebtools.co.uk', 'refreshthing.com'];

function isAuto() { // Native
  var docRef = document.referrer
    .match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  docRef = docRef ? docRef[1] : docRef;
  return refAry.indexOf(docRef) !== -1;
}

export function start(category, variable, label) { // Native
  if (isAuto() || typeof ga === 'undefined') {return;}
  times[category + ':' + variable + ':' + label] =
    performance.now() * 1000;
}

export function end(category, variable, label) { // Native
  if (isAuto() || typeof ga === 'undefined') {return;}
  var myTime = Math.round(performance.now() * 1000 -
    times[category + ':' + variable + ':' + label]) / 1000;
  if (myTime > 10) {
    ga('fshApp.send', 'timing', category, variable, Math.round(myTime),
      label);
  }

  //#if _BETA
  debug.log(variable, myTime + 'ms');
  //#endif

}

function fixupUrl() { // Native
  var origPath = window.location.pathname + window.location.search;
  var page = origPath.replace(/&m=.*/, '')
    .replace(/&subcmd=&.*/, '')
    .replace(/&subcmd2=&.*/, '')
    .replace(/&[a-z_]+_id=.+/, '')
    .replace(/&id=.+/, '')
    .replace(/&target_player=.+/, '')
    .replace(/&[a-z]+_username=.+/, '')
    .replace(/\?cmd=auctionhouse.+/, '\?cmd=auctionhouse')
    .replace(/&subcmd=[0-9a-f]{32}/, '')
    .replace(/&search_active=.+/, '')
    .replace(/&letter=.+/, '')
    .replace(/&guild_name=.+/, '')
    .replace(/&user=.+/, '')
    .replace(/&[a-z_]*page=.+/, '')
    .replace(/&prestige=.+/, '')
    .replace(/&withdraw_amount=.+/, '')
    .replace(/&tickets=.+/, '')
    .replace(/&search=.+/, '')
    .replace(/&target=.+/, '')
    .replace(/&xcv=[0-9a-f]{32}/, '')
    .replace(/\?ref=[0-9]+/, '');
  ga('fsh.set', 'page', page);
}

export function setup() { // Native
  if (isAuto() || typeof ga === 'undefined') {return;}

  ga('create', 'UA-76488113-1', 'auto', 'fshApp', {
    userId: layout.playerId(),
    siteSpeedSampleRate: 10
  });
  ga('fshApp.set', 'appName', 'fshApp');
  ga('fshApp.set', 'appVersion', FSH.version);
  ga('create', 'UA-76488113-2', 'auto', 'fsh', {
    userId: layout.playerId(),
    siteSpeedSampleRate: 10
  });
  fixupUrl();
  ga('fsh.send', 'pageview');
}

export function screenview(funcName) { // Native
  if (isAuto() || typeof ga === 'undefined') {return;}
  ga('fshApp.send', 'screenview', {screenName: funcName});
}
