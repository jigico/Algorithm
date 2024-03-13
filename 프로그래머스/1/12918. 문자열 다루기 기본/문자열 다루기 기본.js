function solution(s) {
    const str = s.replace(/ /g, '');
    let answer = false;
    if(str.length == 4 || str.length == 6){
        console.log('dd')
        for(let i = 0; i < str.length; i++){
            if(Number.isNaN(Number(str[i]))){
                answer = false;
                break;
            }else{
                answer = true;
            }
        }
    }
    
    return answer;
}