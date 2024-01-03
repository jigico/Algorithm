function solution(numbers) {
    let result = 0;
    for(let el of numbers){
        result += el;
    }
    return result / numbers.length;
}