function solution(s) {
    // let str = '10e1'.replace(/ /g, '');
    // console.log(str.replace(/ /g, '').length)
    const str = s.replace(/ /g, '');
    let answer = false;
    console.log(str, str.length, Number(str), Number.isNaN(Number(str)))
    if(str.length == 4 || str.length == 6){
        console.log('dd')
        for(let i = 0; i < str.length; i++){
            if(Number.isNaN(Number(str[i]))){
                console.log(str[i], Number.isNaN(Number(str[i])), parseInt(str[i]));
                answer = false;
                break;
            }else{
                answer = true;
            }
        }
    }
    
    // if(Number.isNaN(Number(str))){
    //     answer = false;
    // }else if(str.toLowerCase().indexOf('e') > 0 || str.toLowerCase().indexOf('x') > 0){
    //     answer = false;
    // }
    return answer;
}