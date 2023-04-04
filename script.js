//your code here
function majorityElement(nums) {
    const n = nums.length;
    const freqMap = new Map();
    
    for(let i=0; i<n; i++) {
        freqMap.set(nums[i], freqMap.get(nums[i]) + 1 || 1);
        if(freqMap.get(nums[i]) > Math.floor(n/2)) {
            return nums[i];
        }
    }
}
