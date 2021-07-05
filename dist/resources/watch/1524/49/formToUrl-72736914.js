import { N as navigateTo, O as indexPhp } from './calfSystem-579856fa.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-72736914.js.map
