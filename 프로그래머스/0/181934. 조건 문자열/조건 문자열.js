function solution(ineq, eq, n, m) {
    let answer = 0;
    if(eq === '='){
        if(ineq === '>' && n >= m){
            answer = 1
        }else if(ineq === '<' && n <= m){
            answer = 1
        }
    }else{
        if(ineq === '>' && n > m){
            answer = 1
        }else if(ineq === '<' && n < m){
            answer = 1
        }
    }
    return answer;
}