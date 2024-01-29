function solution(strings, n) {
    strings.sort((a,b) => {
        return a.localeCompare(b)
    })
    strings.sort((a,b) => {
        return a[n].localeCompare(b[n])
    })
    return strings;
}