function solution(arr, divisor) {
    var answer = [];
    arr.forEach((el, i) => {
       if(el % divisor === 0){
           answer.push(el);
       }
    });
    if(answer.length > 0){
        answer.sort((a, b) => a - b);
    }else{
        answer.push(-1);
    }
    return answer;
}