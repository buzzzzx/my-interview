const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class Promise {
  constructor(executor) {
    this.promiseState = PENDING;
    this.promiseResult = null;
    this.callbacks = [];

    const _that = this;

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }

    function resolve(value) {
      if (_that.promiseState !== PENDING) {
        return;
      }
      _that.promiseState = FULFILLED;
      _that.promiseResult = value;

      setTimeout(() => {
        _that.callbacks.forEach((cb) => {
          cb.onFulfilled(_that.promiseResult);
        });
      });
    }
    function reject(reason) {
      if (_that.promiseState !== PENDING) {
        return;
      }
      _that.promiseState = REJECTED;
      _that.promiseResult = reason;

      setTimeout(() => {
        _that.callbacks.forEach((cb) => {
          cb.onRejected(_that.promiseResult);
        });
      });
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function" ? onRejected : (reason) => throw reason;

    const _that = this;
    return new Promise((resolve, reject) => {
      function handler(callback) {
        try {
          const res = callback(_that.promiseResult);
          if (res instanceof Promise) {
            res.then(resolve, reject);
          } else {
            resolve(res);
          }
        } catch (e) {
          reject(e);
        }
      }

      if (_that.promiseState === PENDING) {
        _that.callbacks.push({
          onFulfilled: (value) => handler(onFulfilled),
          onRejected: (reason) => handler(onRejected),
        });
      } else if (_that.promiseState === FULFILLED) {
        setTimeout(() => {
          handler(onFulfilled);
        });
      } else {
        setTimeout(() => {
          handler(onRejected);
        });
      }
    });
  }

  catch(onRejected) {
    this.then(undefined, onRejected);
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

  static all(promises) {
    return new Promise((resolve, reject) => {
      const res = [];
      let count = 0;
      for (let i = 0; i < promises.length; i += 1) {
        promises[i]
          .then((val) => {
            res[i] = val;
            count += 1;
            if (count === promises.length) {
              resolve(res);
            }
          })
          .catch(reject);
      }
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p) => {
        p.then(
          (val) => {
            resolve(val);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
}
