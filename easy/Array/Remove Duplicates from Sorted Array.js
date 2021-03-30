/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	var i = 0,
		j = 1;
	let len = nums.length;
	while (j < len) {
		if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
		}
		j++;
	}
	return i + 1;
};
