let user = {
  user1: {
    id: 1,
    name: "Barbek",
    status: "barmen",
    salary: 105000,
  },
  user2: {
    id: 2,
    name: "Eldos",
    status: "Povar",
    salary: 1000,
  },
  user3: {
    id: 3,  
    name: "Aziz",
    status: "admin",
    salary: 20000,
  },
  user4: {
    id: 4,
    name: "Aziz",
    status: "admi",
    salary: 2000,
  },
  user5: {
    id: 5,
    name: "Aziz",
    status: "Pova",
    salary: 22000000000,
  },
  user6: {
    id: 6,
    name: "Aziz",
    status: "Pova",
    salary: 1000,
  },
  user7: {
    id: 7,
    name: "Aziz",
    status: "kassa",
    salary: 700000000,
  },
};


function getTop1() {
  let top = {};
  let value = ''
  let userKey = ''
  for (let i = 0; i < 3; i++) {
    let fix = 0
    for (let key in user) {
      if (!fix) {
        value = user[key]
        userKey = key  
        fix++
        continue
      }
      if (user[key].salary > value.salary) {
        value = user[key]
        userKey = key
      }
    }
    top[userKey] = value
    delete user[userKey]
  }

  console.log(top);
}
getTop1()





// function getTop1() {
//   let top = {};
//   let value = ''
//   let userKey = ''
//   for (let i = 0; i < user.lenght; i++) {
//     let fix = 0
//     for (let key in user) {
//       if (!fix) {
//         value = user[key]
//         userKey = key  
//         fix++
//         continue
//       }
//       if (user[key].salary < value.salary) {
//         value = user[key]
//         userKey = key
//       }
//     }
//     top[userKey] = value
//     // delete user[userKey]
//   }
//   console.log(user);

//   console.log(top);
// }

// getTop1()



// let obj = {

// }

// function User(name, surname, prolab) {
//     for (let key in obj) {
//         this[key] = obj[key]
//     }
//     let size = Object.keys(obj).length
//     this["obj" + (size + 1)] = {
//         id: size + 1,
//         name: name,
//         surname: surname,
//         study: {
//             0: prolab
//         }
//     }
// }
// obj = new User("Majid", "Kamilov", "Prolab")
// console.log(obj);