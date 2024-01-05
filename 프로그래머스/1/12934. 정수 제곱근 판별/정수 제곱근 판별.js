function solution(n) {
    let result = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0 && i * i === n){
            result = i+1;
            break;    
        }
        
    }
    return result > 0 ? result *= result : -1;
}