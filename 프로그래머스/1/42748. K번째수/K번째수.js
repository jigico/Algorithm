function solution(array, commands) {
    var answer = [];
    commands.forEach((el) => {
        let i = el[0];
        let j = el[1];
        let k = el[2];
        let arr = array.slice(i-1, j);
        arr.sort((a, b) => a-b);
        answer.push(arr[k-1])
    });
    return answer;
}