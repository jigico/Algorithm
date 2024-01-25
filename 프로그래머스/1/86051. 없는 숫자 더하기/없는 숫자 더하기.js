function solution(numbers) {
    let answer = 0;
    numbers.sort((a,b) => a-b);
    
    for(let i = 0; i < 10; i++){
        if(i !== numbers[i]){
            numbers.splice(i, 0, i);
            answer += i;
        }
    }
    return answer;
}