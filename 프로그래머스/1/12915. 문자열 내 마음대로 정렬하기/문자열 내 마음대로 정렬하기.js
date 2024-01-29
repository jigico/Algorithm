function solution(strings, n) {
    var answer = [];
    strings.sort((a,b) => {
        return a.localeCompare(b)
    })
    strings.sort((a,b) => {
        return a[n].localeCompare(b[n])
    })
    return strings;
}