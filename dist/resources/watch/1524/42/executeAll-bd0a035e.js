function execute(fn) {
  fn();
}

function executeAll(ary) {
  ary.forEach(execute);
}

export { executeAll as e };
//# sourceMappingURL=executeAll-bd0a035e.js.map