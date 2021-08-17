function flatten(nums) {
  if (!Array.isArray(nums)) {
    return;
  }
  return nums.reduce((acc, num) => {
    return Array.isArray(num) ? acc.concat(flatten(num)) : acc.concat(num);
  }, []);
}
