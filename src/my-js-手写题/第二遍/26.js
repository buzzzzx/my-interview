function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function light(timer, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
}

function openLight() {
  return Promise.resolve()
    .then(() => {
      return light(1000, red);
    })
    .then(() => {
      return light(1000, green);
    })
    .then(() => {
      return light(1000, yellow);
    })
    .then(openLight);
}

openLight();
