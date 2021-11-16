const twoSum = function(nums, target) {
    for ( let i = 0; i < nums.length; i++ ) {
        for ( let index = 0; index < nums.length; index++ ) {
            if ( i === index ) continue
            if ( nums[i] + nums[index] === target ) {
                return [i, index]
            }
        }
    }
};