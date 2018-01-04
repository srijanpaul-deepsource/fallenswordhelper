import calf from '../support/calf';
import {networkIcon} from './settingObj';
import {getValue, isChecked} from '../support/system';
import {helpLink, simpleCheckbox} from './settingsPage';

export default function generalPrefs() {
  // General Prefs
  return '<tr><th colspan="2"><b>General preferences ' +
      '(apply to most screens)</b></th></tr>' +

    '<tr><td class="fshRight">' +
      '<label for="enableGuildInfoWidgets">' +
      'Enable Guild Info Widgets' +
      helpLink('Enable Guild Info Widgets',
        'Enabling this option will enable the Guild Info Widgets ' +
        '(coloring on the Guild Info panel)') + ':</label></td><td>' +
      '<input id="enableGuildInfoWidgets" name="enableGuildInfoWidgets" ' +
      'type="checkbox" value="on"' +
      isChecked(calf.enableGuildInfoWidgets) +
      '>&nbsp;' +
      '<label>Hide Message&gt;<input name="hideGuildInfoMessage" ' +
      'type="checkbox" value="on"' +
      isChecked(calf.hideGuildInfoMessage) +
      '></label>&nbsp;' +
      '<label>Hide Buff&gt;<input name="hideGuildInfoBuff" ' +
      'type="checkbox" value="on"' +
      isChecked(calf.hideGuildInfoBuff) +
      '></label>&nbsp;' +
      '<label>Hide ST&gt;<input name="hideGuildInfoSecureTrade" ' +
      'type="checkbox" value="on"' +
      isChecked(calf.hideGuildInfoSecureTrade) +
      '></label>&nbsp;' +
      '<label>Hide Trade&gt;<input name="hideGuildInfoTrade" ' +
      'type="checkbox" value="on"' +
      isChecked(calf.hideGuildInfoTrade) +
      '></label></td></tr>' +

    simpleCheckbox('moveGuildList') +
    simpleCheckbox('moveOnlineAlliesList') +

    '<tr><td class="fshRight">' + networkIcon +
      'Show Online Allies/Enemies' +
      helpLink('Show Online Allies/Enemies',
        'This will show the allies/enemies online list on the right.') +
      ':</td><td><label>Allies&nbsp;<input name="enableAllyOnlineList" ' +
      'type="checkbox" value="on"' +
      isChecked(calf.enableAllyOnlineList) +
      '></label>&nbsp;&nbsp;<label>Enemies&nbsp;' +
      '<input name="enableEnemyOnlineList" type="checkbox" value="on"' +
      isChecked(calf.enableEnemyOnlineList) +
      '></label>&nbsp;&nbsp;' +
      '<input name="allyEnemyOnlineRefreshTime" size="3" value="' +
      getValue('allyEnemyOnlineRefreshTime') +
      '"> seconds refresh</td></tr>' +

    simpleCheckbox('enableOnlineAlliesWidgets') +
    simpleCheckbox('moveFSBox') +
    simpleCheckbox('moveDailyQuest') +
    simpleCheckbox('fsboxlog') +
    simpleCheckbox('gameHelpLink') +
    simpleCheckbox('enableTempleAlert') +
    simpleCheckbox('enableUpgradeAlert') +
    simpleCheckbox('enableComposingAlert') +
    simpleCheckbox('enhanceOnlineDots') +
    simpleCheckbox('hideBuffSelected') +
    simpleCheckbox('hideHelperMenu') +
    simpleCheckbox('keepHelperMenuOnScreen') +
    simpleCheckbox('draggableHelperMenu') +

    '<tr><td class="fshRight">Quick Links Screen Location' +
      helpLink('Quick Links Screen Location',
        'Determines where the quick links dialog shows on the screen. ' +
        'Default is top 22, left 0.') +
      ':</td><td>Top: <input name="quickLinksTopPx" size="3" value="' +
      getValue('quickLinksTopPx') +
      '"> Left: <input name="quickLinksLeftPx" size="3" value="' +
      getValue('quickLinksLeftPx') +
      '"></td></tr>' +
    simpleCheckbox('draggableQuickLinks') +
    simpleCheckbox('expandMenuOnKeyPress');
}