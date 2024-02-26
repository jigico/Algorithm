function solution(nums) {
    let max = nums.length / 2;
    let answer = 0;
    let arr  = nums.sort((a,b) => a-b);
    for(let i = 0; i < arr.length; i++){
     if(arr[i] !== arr[i-1]){
         answer += 1;
     }
    }
    return max < answer ? max : answer;
}