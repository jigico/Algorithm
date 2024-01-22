function solution(s) {
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