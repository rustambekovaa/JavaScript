let arr = [10, 2, 11, 23, 43, 4, 6, 2, 1];
function getMin() {
    let k = arr[0]
    for( i of arr){
        if(i<k){
            k=i
        }
    }
    console.log(k);
}
getMin()






