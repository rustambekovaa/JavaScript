let obj1 = {
    '0': 1,
    '1': 2,
    '2': 3,
}

let obj2 = {
    '0': 4,
    '1': 5,
    '2': 6,
}

let num = 0
var obj = {}
for( i1 in obj1){
    obj[num] =obj1[i1]
    num +=1
}
for(i2 in obj2){
    obj[num] = obj2[i2]
    num +=1 
}
console.log(obj)