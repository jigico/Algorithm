function solution(s) {
    var answer = '';
    let strIdx = s.length / 2;
    if(s.length % 2 === 0){
        answer = s.substring(strIdx-1, strIdx+1);
    }else{
        answer = s[Math.floor(strIdx)];
    }
    return answer;
}