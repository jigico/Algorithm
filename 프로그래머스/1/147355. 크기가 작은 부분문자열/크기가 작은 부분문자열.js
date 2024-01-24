function solution(t, p) {
    let answer = [];
    for(let i = 0; i < t.length; i++){
        let num = t.slice(i,i+p.length);
        if(Number(num) <= Number(p) && num.length === p.length){
            answer.push(num);
        }
    }
    return answer.length;
}