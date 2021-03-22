function execute(fn) {
  fn();
}

function executeAll(ary) {
  ary.forEach(execute);
}

export { executeAll as e };
//# sourceMappingURL=executeAll-19d23fbc.js.map
