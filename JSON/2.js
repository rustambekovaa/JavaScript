let user = {
    name: "Василий Иванович",
    age:23
}
let user2 =JSON.parse(JSON.stringify(user))
console.log(user2);