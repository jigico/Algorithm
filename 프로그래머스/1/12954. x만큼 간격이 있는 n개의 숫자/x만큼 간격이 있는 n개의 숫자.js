function solution(x, n) {
    var answer = new Array(n);
    
    answer = answer.fill(1).map((a, b) => x * (b+1));
    
    // let i = 1;
    // while(answer.length < n){
    //     answer.push(x*i);
    //     i++;
    // }
    
    return answer;
}