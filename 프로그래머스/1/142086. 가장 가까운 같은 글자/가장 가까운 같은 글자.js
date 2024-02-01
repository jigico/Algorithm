function solution(s) {
    var answer = [];
    for(let i = 0; i < s.length; i++){
        let temp = -1;
        for(let j = 0; j < i; j++){
            if(s[i] === s[j]){
                temp = i-j;
            }            
        }
        answer.push(temp)
    }
    return answer;
}