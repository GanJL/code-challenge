var sum_to_n_a = function(n) {
    
    var ans = 0

    for (var i=1; i<n+1; i++){
        ans+=i
    }
    
    return ans

};

var sum_to_n_b = function(n) {

    var ans = (n/2)*(2*1+(n-1)*1)

    return ans
};

var sum_to_n_c = function(n) {
    
    var count = 1
    var ans = 0

    while (n+1!=count) {

        ans += count
        count++

    }

    return ans
};
