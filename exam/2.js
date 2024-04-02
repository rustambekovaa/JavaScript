let category = {
  category1: {
    id: 1,
    name: "vip",
  },
  category2: {
    id: 2,
    name: "sredniy",
  },
  category3: {
    id: 3,
    name: "ekanom",
  },
};

let rooms = {
  room1: {
    id: 1,
    name: "pokoi sultan shaha",
    catId: 1,
    cost: 1000,
    costPerson: 100,
  },
  room2: {
    id: 2,
    name: "pokoi sultan sulaimana",
    catId: 3,
    cost: 0,
    costPerson: 100,
  },
  room3: {
    id: 3,
    name: "pokoi gitlera",
    catId: 2,
    cost: 0,
    costPerson: 150,
  },
  room4: {
    id: 4,
    name: "pokoi programmista",
    catId: 1,
    cost: 1000,
    costPerson: 150,
  },
  room5: {
    id: 5,
    name: "pokoi cheloveka",
    catId: 3,
    cost: 0,
    costPerson: 120,
  },
  room6: {
    id: 6,
    name: "pokoi stalina",
    catId: 2,
    cost: 0,
    costPerson: 170,
  },
};
let clients = {
  client1: {
    id: 1,
    roomId: 1,
    people: 4,
    days: 15,
    date: {
      day: 15,
      month: 3,
      year: 2023,
    },
  },
  client2: {
    id: 2,
    roomId: 2,
    people: 4,
    days: 10,
    date: {
      day: 11,
      month: 3,
      year: 2023,
    },
  },
  client3: {
    id: 3,
    roomId: 3,
    people: 4,
    days: 6,
    date: {
      day: 12,
      month: 3,
      year: 2024

    },
  },
};

createNewClients(1, 4, 1, 1, 4, 20)

function createNewClients(roomId, people, days, day, month, year) {
  var k = 0
  let t = true
  for (let i in rooms) {
    if (rooms[i].id == roomId) {
      for (let i1 in clients) {
        for (let i2 in clients[i1].date) {
          k = clients[i1].days + clients[i1].date.day

          if (day  < k || k < day && clients[i1].date.month !== month && clients[i1].date.year !== year) {
         
      t=true  

          } else {
            t=false
            console.log('osk');
          }
        }

      }
    }

  }


  if(t==true){
    clients ["client"+ (length +1)] ={
  id:length+1,
  roomId:roomId,
  people:people,
  days:days,
  date:{
    day:day,
    month:month,
    year:year
  }
 }
  }else{
    console.log('hi');
  }
}
console.log(clients);

// clients ["client"+ (length +1)] ={
//   id:length+1,
//   roomId:roomId,
//   people:people,
//   days:days,
//   date:{
//     day:day,
//     month:month,
//     year:year
//   }
//  }


// function createNewClients(roomId, people, days, day, month, year) {

//   for (let i in rooms) {
//     for (let i1 in clients) {
//       if (clients[i1].roomId == roomId) {
//        let cstart = dayOfYear(year,month,day)
//        let cend = dayOfYear(year,month,day+days)
        


//       }

//     }
//   }

// }
// createNewClients(1, 4, 10, 1, 4, 20)


// function dayOfYear(year, month, day) {
//   const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let dayCount = day;

//   // Проверяем, является ли год високосным
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     daysInMonth[1] = 29; // Если високосный, февраль имеет 29 дней
//   }

//   // Считаем дни в предыдущих месяцах
//   for (let i = 0; i < month - 1; i++) {
//     dayCount += daysInMonth[i];
//   }

//   return dayCount;
// }

