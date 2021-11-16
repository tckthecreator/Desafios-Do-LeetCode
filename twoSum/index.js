const twoSum = function(nums, target) {
    
    // Percorre o array, i recebe o primeiro número
    for ( let i = 0; i < nums.length; i++ ) {
        // Percorre o array novamente, index recebe o segundo número
        for ( let index = 0; index < nums.length; index++ ) {
            // Se forem o mesmo índice do array, será ignorado
            if ( i === index ) continue
            if ( nums[i] + nums[index] === target ) {
                return [i, index]
            }
        }
    }
};
