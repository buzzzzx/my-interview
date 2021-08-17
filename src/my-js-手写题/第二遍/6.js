class EventEmitter {
  constructor(props) {
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
      this._events = [fn];
    }
  }

  off(type, fn) {
    if (fn) {
      this._events[type] = this._events[type].filter(
        (evt) => evt !== fn && evt.origin !== fn
      );
    } else {
      delete this._events[type];
    }
  }

  once(type, fn) {
    const _that = this;
    function only() {
      fn();
      _that._events.off(type, fn);
    }
    only.origin = fn;
    this.on(type, only);
  }

  emit(type, ...args) {
    this._events[type].forEach((evt) => {
      evt(args);
    });
  }
}
