function solution(s) {
    let answer = s.split('');
    answer.sort((a, b) => {
        return b.charCodeAt() - a.charCodeAt()
    });
    return answer.join('');
}