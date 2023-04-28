// let num = [5, 8, 4]

// console.log(num)
// num[3] = 6
// num.push(7)
// num.length
// num.sort()

let num = [5, 8, 2, 9, 3]
num.push(1) //goes first. depends on where the command goes, !!!!! the lines that come first have priority over the ones that come later !!!!!
num.sort()
// // num.push(1) // would go last
console.log(num)
console.log(`the array has ${num.length} positions`)
console.log(`the first array value is ${num[0]}`)

let pos = num.indexOf(8)
if (pos ==-1){
    console.log('value wasnt found!')
} else{
    console.log(`the value is on position ${pos}`)
}
console.log(`the value 8 is on position ${pos}`)
