/**
 * 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？
 */

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
  Promise.resolve()
    .then(() => {
      return light(3000, red);
    })
    .then(() => {
      return light(2000, yellow);
    })
    .then(() => {
      return light(1000, green);
    })
    .then(() => {
      return openLight();
    });
}

openLight();
