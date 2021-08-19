class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };

    this.tasks.push(task);

    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift();
    task && task();
  }

  _sleepHelper(time, isFirst) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (isFirst) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  }

  sleep(time) {
    this._sleepHelper(time, false);
    return this;
  }

  sleepFirst(time) {
    this._sleepHelper(time, true);
    return this;
  }

  eat(food) {
    const task = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}

// test
LazyMan("Hank").sleep(10).eat("dinner");
LazyMan("Hank").eat("dinner").eat("supper");
LazyMan("Hank").sleepFirst(5).eat("supper");
