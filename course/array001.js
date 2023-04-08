let value = [8, 1, 7, 4, 2, 9]
value.sort()
/*
for(let pos=0; pos<value.length; pos++){
    console.log(`the position ${pos} has the value ${value[pos]}`)
}
*/

for(let pos in value){
    console.log(`the position ${pos} has the value ${value[pos]}`)
}