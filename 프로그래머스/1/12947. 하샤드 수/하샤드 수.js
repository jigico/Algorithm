function solution(x) {
    var answer = true;
    let arr = String(x).split('');
    let sum = arr.reduce((acc, curr) => Number(acc) + Number(curr));
    if(x % sum !== 0) answer = false;
    return answer;
}