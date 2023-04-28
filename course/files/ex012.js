var now = new Date()
var time = now.getHours()
console.log(`right now, its exactly ${time}:00`)
if (time < 12){
    console.log('good morning!')
} else if (time <= 18){
    console.log('Good afternoon')
} else{
    console.log('Good night!')
}
