function solution(n) {
    var answer = Array.from(String(n));
    answer.sort((a, b) => b - a);
    return Number(answer.join(''));
}