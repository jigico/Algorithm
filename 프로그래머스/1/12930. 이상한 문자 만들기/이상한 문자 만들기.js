function solution(s) {
    // let s = ' Aoqo qd aqw'
    // let answer = [];
    // for(let i=0; i<s.length; i++){
    //     let str = '';
    //     if(i === 0 || i % 2 === 0){
    //         answer += s[i].toUpperCase();
    //     }else{
    //         answer += s[i].toLowerCase();
    //     }
    //     // console.log(str);
    //     // answer += str;
    // }
    // return answer;
    
    let newArr = s.split(' ');
    for(let i=0; i<newArr.length; i++){
        let str = '';
        for(let j=0; j<newArr[i].length; j++){
            if(j === 0 || j % 2 === 0){
                str += newArr[i][j].toUpperCase();
                
            }else{
                str += newArr[i][j].toLowerCase();
            }
            
        }
        newArr[i] = str;
    }
    return newArr.join(' ');
}