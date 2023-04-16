function veri(){
    var data = new Date()
    var yr = data.getFullYear()
    var fyr = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyr.value.length == 0 || fyr.value > yr) {
        window.alert('[Error] verify data and try again!~')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = yr - Number(fyr.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'pic')
        if (fsex[0].checked){
            gender = 'Man'
            if (age >=0 && age < 10){
            //kid
            img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (age <21){
            //teen
            img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (age <50){
            //adult
            img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
            //elderly
            img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            gender = 'Woman'
            if (age >=0 && age < 10){
            //kid
            img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (age < 21){
            //teen
            img.setAttribute('src', 'images/foto-jovem-f.png')                    
            } else if (age < 50){
            //adult
               img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
            //elderly
            img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gender} with ${age} years.`
        res.appendChild(img)
    }
}
