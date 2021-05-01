import { f as formToUrl } from './formToUrl-aa363b07.js';
import { k as on, p as pCC } from './calfSystem-6b7d7ae6.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-b4b8e480.js.map
