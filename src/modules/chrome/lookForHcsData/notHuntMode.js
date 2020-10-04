import calf from '../../support/calf';
import executeAll from '../../common/executeAll';
import getCalfPrefs from '../../common/getCalfPrefs';
import getValue from '../../system/getValue';
import priorityThree from './priorityThree';

function getEnvVars() {
  [
    'enableAllyOnlineList',
    'enableEnemyOnlineList',
    'enableGuildInfoWidgets',
    'enableOnlineAlliesWidgets',
    'enableSeTracker',
    'hideGuildInfoTrade',
    'hideGuildInfoSecureTrade',
    'hideGuildInfoBuff',
    'hideGuildInfoMessage',
    'hideBuffSelected',
    'fixBuffSelected',
    'enableTempleAlert',
    'enableUpgradeAlert',
    'enableComposingAlert',
    'enableActiveBountyList',
    'enableWantedList',
    'wantedGuildMembers',
    'enableMaxGroupSizeToJoin',
    'maxGroupSizeToJoin',
  ].forEach(getCalfPrefs);
  calf.allyEnemyOnlineRefreshTime = getValue('allyEnemyOnlineRefreshTime')
    * 1000;
}

const notHuntModeFunctions = [
  getEnvVars,
  priorityThree,
];

export default function notHuntMode() {
  if (calf.huntingMode) { return; }
  executeAll(notHuntModeFunctions);
}