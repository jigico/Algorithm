function solution(s) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var answer = s;
    for(let i = 0; i < arr.length; i++){
        answer = answer.replaceAll(arr[i], i);
        console.log(answer);
    }
    return Number(answer);
}