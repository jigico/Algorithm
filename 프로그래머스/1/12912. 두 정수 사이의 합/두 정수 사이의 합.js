function solution(a, b) {
    var answer = 0;
    let num1 = 0;
    let num2 = 0;
    if(a < b){
        num1 = a;
        num2 = b;
    }else{
        num1 = b;
        num2 = a;
    }
    for(let i = num1; i <= num2; i++){
        answer += i;
    }
    return answer;
}