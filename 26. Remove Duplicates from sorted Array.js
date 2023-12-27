/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let duplicatesEncountered = 1;
  if (nums.length === 0) return 0;
  
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[duplicatesEncountered] = nums[i];
          duplicatesEncountered++;
      }
  }

  return duplicatesEncountered;
};


