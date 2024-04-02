let user = new Map()
function createUser(name, surname,age){
   let k= {
    id:user.size+1,
    name:name,
    surname:surname,
    age:age 
   }
  user.set("user"+(user.size+1),k)
}
createUser("Majid", "Kamiliv", 18)
createUser("fghjk", "ertyui", 15)

// console.log(user);




function l(key, name, surname, age) {
    
    let k2 = user.get(key)
    k2.name = name,
    k2.surname= surname,
    k2.age = age,
    user.set("user" + (user.size + 1),k2) 

}
l("user1","Akmaanai", "Bekova", 18)

console.log(user);

