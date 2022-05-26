function substrings(n) {
    //Good math concept is required for this question. Hints: loop the string once only and simplify the calculation. use +, * instead of ^
    //Brute force solution is very simple. But, your program would be timeout in the complex test cases.
    
    var totalSum = BigInt(0);
    var digitNum = n.length;
    var divisor = BigInt(10**9+7);
    
    var factor = BigInt(1);
    for(var i=digitNum-1; i>=0; i--){
        var digit = parseInt(n[i]);
        totalSum += BigInt((i+1) * digit) * factor;
        factor = (BigInt(1)+(factor * BigInt(10)))%divisor;
    }
    
    return totalSum%divisor;
}
