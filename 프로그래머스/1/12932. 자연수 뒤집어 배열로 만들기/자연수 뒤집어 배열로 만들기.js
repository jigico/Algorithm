function solution(n) {
    let num = String(n);
    var answer = [];
    for(let i = num.length-1; i >= 0; i--){
        answer.push(parseInt(num[i]));
    }
    return answer;
}