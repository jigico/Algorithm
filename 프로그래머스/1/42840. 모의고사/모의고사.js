function solution(answers) {
    const answer = [];
    const personObj = {
        p1:[1,2,3,4,5],
        p2:[2, 1, 2, 3, 2, 4, 2, 5],
        p3:[3,3,1,1,2,2,4,4,5,5]
    };
    const resultObj = {
        p1:0,
        p2:0,
        p3:0
    };
    
    //for - 수포자 3명
    for(const person in personObj){
        //for - answers 수
        for(let i=0; i < answers.length; i++){
            //값 같은지 체크
            if(personObj[person][i % personObj[person].length] === answers[i]){
                resultObj[person] += 1;
            }
        }
    }
    
    const max = Math.max(...Object.values(resultObj));
    //많이 맞은 사람
    for(const person in resultObj){
        if(max === resultObj[person]){
            answer.push(+person.charAt(person.length-1))
        }
    }
    
    //오름차순 정렬하여 리턴
    return answer.sort((a,b) => a-b);
}