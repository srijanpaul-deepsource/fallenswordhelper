import { N as navigateTo, O as indexPhp } from './calfSystem-7a121553.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-c26b8bfa.js.map
