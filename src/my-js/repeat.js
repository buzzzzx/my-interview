function repeat(fn, interval, n) {
  let count = 0;
  return () => {
    const timer = setInterval(() => {
      count += 1;
      fn();
      if (count === n) {
        clearInterval(timer);
        count = 0;
      }
    }, interval);
  };
}

const repeatFn = repeat(() => console.log("fn"), 2000, 3);
repeatFn();
