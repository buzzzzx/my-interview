class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(type, fn, prepend) {
    const events = this._events[type];
    if (events) {
      if (prepend) {
        events.unshift(fn);
      } else {
        events.push(fn);
      }
    } else {
      this._events[type] = [fn];
    }
  }

  off(type, fn) {
    if (fn) {
      this._events[type] = this._events[type].filter((cb) => {
        return fn !== cb && cb.origin !== fn;
      });
    } else {
      delete this._events[type];
    }
  }

  once(type, fn) {
    const _that = this;
    function cb(...args) {
      fn.apply(_that, args);
      _that.off(type, fn);
    }
    cb.origin = fn;

    this.on(type, cb);
  }

  emit(type, ...args) {
    this._events[type].forEach((fn) => {
      fn.apply(this, args);
    });
  }
}
