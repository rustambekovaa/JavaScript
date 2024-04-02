let srr = [1,2,undefined,undefined,null,null,3,5,8]
   let k =  srr.filter((element) =>{
        if (element != undefined || element != null){
            return element
        }
     })
console.log(k);



// let srr = [1,2,undefined,undefined,null,null,3,5,8]
// let k =  srr.filter(element => element != undefined || element != null)   
// console.log(k); 