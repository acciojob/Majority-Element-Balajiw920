//your code here
function majorityElement(nums) {
  const n = nums.length;
  const map = {};

  // create a frequency map of elements
  for (let i = 0; i < n; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  // find the element with frequency > n/2
  for (let key in map) {
    if (map[key] > Math.floor(n / 2)) {
      return parseInt(key);
    }
  }
}

console.log(majorityElement([2, 1, 2])); // output: 2
