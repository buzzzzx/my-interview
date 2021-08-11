// eval 实现
function parse1(json) {
  return eval("(" + json + ")");
}

// new Function 实现
function parse2(json) {
  return new Function("return " + json)();
}
