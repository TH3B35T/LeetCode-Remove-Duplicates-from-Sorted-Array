/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let num_of_unique_nums = 1;

    for(let i = 1; i <= nums.length -1; i++){
        if(nums[i] !== nums[num_of_unique_nums - 1]){
            nums[num_of_unique_nums] = nums[i];
            num_of_unique_nums +=1;
        }
    }
    return num_of_unique_nums;
};
