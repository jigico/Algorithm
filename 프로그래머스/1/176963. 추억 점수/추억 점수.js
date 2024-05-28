function solution(name, yearning, photo) {
    let answer = [];
    for(let i = 0; i < photo.length; i++){
        let sum = 0;
        for(let j = 0; j < photo[i].length; j++){
            const idx = name.findIndex((el) => el === photo[i][j])
            if(idx > -1){
                sum += yearning[idx]    
            }
            // console.log(photo[i][j])
            // console.log(name.findIndex((el) => el === photo[i][j]))
            // if(name.findIndex(photo[i][j]))
        }
        console.log('====')
        answer.push(sum)
    }
    return answer;
}