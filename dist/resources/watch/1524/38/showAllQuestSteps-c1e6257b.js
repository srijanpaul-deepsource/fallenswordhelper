import { I as getValue, F as querySelectorArray, z as getElementById } from './calfSystem-a8d6dd2c.js';

function showStep(e) { e.style.display = 'block'; }

function showAllQuestSteps() {
  if (!getValue('showNextQuestSteps')) { return; }
  querySelectorArray('div[id^="stage"]').forEach(showStep);
  getElementById('next_stage_button').style.display = 'none';
}

export default showAllQuestSteps;
//# sourceMappingURL=showAllQuestSteps-c1e6257b.js.map
