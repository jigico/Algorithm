function solution(phone_number) {
    var answer = phone_number;
    for(let i=0; i<phone_number.length-4; i++){
        answer = answer.replace(phone_number[i], '*');
    }

    return answer;
}