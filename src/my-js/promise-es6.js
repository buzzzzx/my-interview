const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// ES6 version
class Promise {
  constructor(executor) {
    this.promiseState = PENDING;
    this.promiseResult = null;
    this.callbacks = [];

    const _that = this;

    function resolve(data) {
      if (_that.promiseState !== PENDING) return; // 只能从 pending 改到其他状态，只能更改一次

      _that.promiseState = FULFILLED;
      _that.promiseResult = data;

      setTimeout(() => {
        _that.callbacks.forEach((item) => {
          item.onFulFilled(_that.promiseResult);
        });
      });
    }

    function reject(data) {
      if (_that.promiseState !== PENDING) return;

      _that.promiseState = REJECTED;
      _that.promiseResult = data;

      setTimeout(() => {
        _that.callbacks.forEach((item) => {
          item.onRejected(_that.promiseResult);
        });
      });
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulFilled, onRejected) {
    // 返回 promise
    onFulFilled =
      typeof onFulFilled === "function" ? onFulFilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const _that = this;
    return new Promise((resolve, reject) => {
      function handle(callback) {
        try {
          let res = callback(_that.promiseResult);
          if (res instanceof Promise) {
            // res 是一个 promise 的对象，则当前 then 返回的 promise 与之关联
            res.then(resolve, reject);
          } else {
            // res 是一个非 promise 值，则当前 promise 的状态为成功，以该值为终值
            resolve(res);
          }
        } catch (e) {
          reject(e);
        }
      }

      if (_that.promiseState === PENDING) {
        _that.callbacks.push({
          onFulFilled: function (value) {
            handle(onFulFilled);
          },
          onRejected: function (value) {
            handle(onRejected);
          },
        });
      }
      if (_that.promiseState === FULFILLED) {
        setTimeout(() => {
          handle(onFulFilled);
        });
      }
      if (_that.promiseState === REJECTED) {
        setTimeout(() => {
          handle(onRejected);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  // Promise.all
  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      let res = [];
      for (let i = 0; i < promises.length; i += 1) {
        promises[i].then(
          (value) => {
            count += 1;
            res[i] = value;
            if (count === promises.length) {
              resolve(res);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }

  // Promise.race
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i += 1) {
        promises[i].then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
}
