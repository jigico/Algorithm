function solution(n){
    let num = String(n);
    var answer = 0;
    for(let i = 0; i < num.length; i++){
        answer += parseInt(num[i]);
    }
    return answer;
}