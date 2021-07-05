import { N as navigateTo, O as indexPhp } from './calfSystem-8168cf6d.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-1b542ce2.js.map
