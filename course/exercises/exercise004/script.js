let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let val = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function addi(){
    if(isNum(num.value) && !isList(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Added Value ${num.value}!`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Already on the list or Invalid value')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if(val.length ==0){
        window.alert('Please add val before finishing!')
    } else{
        let tot = val.length
        let bigger = val[0]
        let smallest = val[0]
        let som = 0
        let avg = 0
        for(let pos in val){
            som += val[pos]
            if (val[pos] > bigger)
                bigger = val[pos]
            if (val[pos] < smallest)
                smallest = val[pos]
        }
        avg = som / tot
        res.innerHTML = ''
        res.innerHTML += `<p>We have ${tot} registered numbers!</p>`
        res.innerHTML += `<p>The biggest number is ${bigger}</p>`
        res.innerHTML += `<p>The smallest number is ${smallest}</p>`
        res.innerHTML += `<p>Adding all the numbers, the result is ${som}</p>`
        res.innerHTML += `<p>The average of all the values is ${avg}</p>`
    }
}