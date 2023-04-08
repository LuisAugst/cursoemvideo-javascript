let friend = {name: 'jose', sex: 'm', weight: 85.4, 
gainweight(p=0){
    console.log('gained weight')
    this.weight += p
}}

friend.gainweight(2)
console.log(`${friend.name} weights ${friend.weight}kg`)