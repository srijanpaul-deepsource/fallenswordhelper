import { Y as dialogMsg } from './calfSystem-2bd62864.js';

function hasErrorMsg(json) {
  return json.e && json.e.message;
}

function errorDialog(json) {
  if (json && !json.s && hasErrorMsg(json)) {
    dialogMsg(json.e.message);
  }
  return json;
}

export { errorDialog as e };
//# sourceMappingURL=errorDialog-ca40a194.js.map
