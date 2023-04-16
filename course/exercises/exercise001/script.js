function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('images')
    var data = new Date()
    var hour = data.getHours()
    var minute = data.getMinutes()
    
    

    msg.innerHTML = `The current time is ${hour}:${minute}`
    if (hour >= 0 && hour < 12){
        // good morning!
        img.src = 'images/mornin.png'
        document.body.style.background = '#D28DFA'
    } else if (hour >= 12 && hour <= 18){
        // good afternoon!
        img.src = 'images/aftnoon.png'
        document.body.style.background = '#6D4A34'
    } else { 
        //good night!
        img.src = 'images/night.png'
        document.body.style.background = '#000000'
    }
}