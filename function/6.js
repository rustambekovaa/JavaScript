////////////////////////////////////////////////////////


// let getFullname=(name,surname,lastname)=>{
//     return name +" " +surname +" "+lastname
// }
// console.log(getFullname("Anar","Bekova","Bekovna"));

/////////////////////////////////////////////////////////

// function f1(){
//     alert("здравствуйте")
// }
// function f2(){
//     alert("привет")
// }
// let check=(da,net)=>{
//     let pop=confirm("Вам сколько есть 18?")? da() : net(); 
// }
// check(f1,f2)


//22222222222222222222222222222222222222222222222222222222222

let get=(question,yes,no)=>(confirm(question))? yes():no()
let getYes=() => alert ("здравствуйте")
let getNo=() => alert ("привет")
get("Вам сколько есть 18?",getYes,getNo)
