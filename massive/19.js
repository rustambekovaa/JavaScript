let users = [ 
    { 
        id: 1, 
        name: 'Belek', 
        salary: '1200$' 
    }, 
    { 
        id: 2, 
        name: 'Aibek', 
        salary: '1100$' 
    }, 
    { 
        id: 3, 
        name: 'Aijan', 
        salary: '1300$' 
    }, 
    { 
        id: 4, 
        name: 'Bolot', 
        salary: '1400$' 
    }, 
    { 
        id: 5, 
        name: 'Gulnur', 
        salary: '1250$' 
    }, 
    { 
        id: 6, 
        name: 'Ermek', 
        salary: '1150$' 
    }, 
    { 
        id: 7, 
        name: 'Zarina', 
        salary: '1350$' 
    }, 
    { 
        id: 8, 
        name: 'Samir', 
        salary: '1500$' 
    }, 
    { 
        id: 9, 
        name: 'Asel', 
        salary: '1100$' 
    }, 
    { 
        id: 10, 
        name: 'Bekzat', 
        salary: '1200$' 
    }, 
    { 
        id: 11, 
        name: 'Dana', 
        salary: '1400$' 
    }, 
    { 
        id: 12, 
        name: 'Ruslan', 
        salary: '1300$' 
    } 
]; 
 
for(let i = 0; i < users.length - 1; i++){ 
 for(let j = 0; j < users.length - 1 - i; j++){ 
  if(parseInt(users[j].salary) > parseInt(users[j + 1].salary)){ 
   let a = users[j] 
   users[j] = users[j + 1] 
   users[j + 1] = a 
  } 
 } 
} 
 
console.log(users);  