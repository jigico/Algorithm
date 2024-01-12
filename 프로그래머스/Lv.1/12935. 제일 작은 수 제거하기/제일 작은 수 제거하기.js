function solution(arr) {
    let answer = arr;
    let min = Math.min(...arr);
    let idx = answer.indexOf(min);
    answer.splice(idx, 1);
    if(arr.length === 0){
        answer.push(-1);
    }
    return answer;
}