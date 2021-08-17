function unique(nums) {
  return nums.filter((item, index) => {
    return nums.indexOf(item) === index;
  });
}
