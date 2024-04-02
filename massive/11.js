let categories = [ 
    { 
      id: 1, 
      name: "Harror", 
    }, 
    { 
      id: 2, 
      name: "Kamedia", 
    }, 
    { 
      id: 3, 
      name: "Raman", 
    }, 
  ]; 
  let films = [ 
    { 
      id: 1, 
      catId: 1, 
      name: "Zvonok", 
      duration: "2:30:00", 
    }, 
    { 
      id: 2, 
      catId: 2, 
      name: "3 lishniy", 
      duration: "2:30:00", 
    }, 
    { 
      id: 3, 
      catId: 3, 
      name: "3 metra", 
      duration: "2:30:00", 
    }, 
  ]; 

  let hall = [ 
    { 
      id: 1, 
      plaus: 20, 
    }, 
    { 
      id: 2, 
      plaus: 30, 
    }, 
    { 
      id: 3, 
      plaus: 25, 
    }, 
  ]; 
  let seans = [ 
    { 
      id: 1, 
      filmId: 1, 
      hallId: 2, 
      cost: 250, 
      startDate: "2023-03-01/22:01:06:600", 
      endDate: "2023-03-01/24:31:06:600", 
    }, 
    { 
      id: 2, 
      filmId: 1, 
      hallId: 3, 
      cost: 200, 
      startDate: "2023-03-02/18:01:06:600", 
      endDate: "2023-03-02/20:31:06:600", 
    }, 
  ]; 
  let custamers = [ 
    { 
      id: 1, 
      seanseId: 1, 
      tickets: 4, 
    }, 
    { 
      id: 2, 
      seanseId: 2, 
      tickets: 2, 
    }, 
  ]


  let k = true
  function create(seans1,tickets){
    custamers.forEach(elem1 => {
        seans.forEach(elem2 =>{
            if(elem1.seanseId == elem2.id){
                hall.forEach(elem3 => {
                    if(elem2.hallId == elem3.id){
                        if(elem3.plaus < elem1.tickets+tickets){
                            k = false
                        }
                    }
                })
            }
        })

    })
    if(k){
        custamers.push({
            id: custamers.length+1,
            seanseId:seans1,
            tickets:tickets
    })
    }
    else{
        console.log("Место занято");
    }
  }
  create(2,10)
  create(2,10)
  create(2,10)


  console.log(custamers);




//   function create(seans1,tickets){
//     var k = tickets
//     let k1 = true
//     custamers.forEach(elem1 => {
//         seans.forEach(elem2 =>{
//             if(elem1.seanseId == elem2.id){
//                 hall.forEach(elem3 => {
//                     if(seans.hallId == elem3.id){
//                         if(k > elem3.plaus ){ 
//                             k+= custamers.tickets 
//                         }  
//                     }
//                 })
               
//             }
//         })

//     })
//     hall.forEach(elem3 => {
//         if(seans.hallId == elem3.id){
//             if(k > elem3.plaus ){
//                 k1 =false   
//             }  
//         }
//     })
//     if(k1){
//         custamers.push({
//             id: custamers.length+1,
//             seanseId:seans1,
//             tickets:tickets
//     })
//     }else{
//         console.log("Место занято");
//     }
//   }
//   create(1,10)
//   create(1,10)
//   create(1,10)


//   console.log(custamers); 



//   function create(seansId, tickets) {
//     let totalTickets = tickets;
//     let isAvailable = true;
  
//     custamers.forEach((customer) => {
//       seans.forEach((seansItem) => {
//         if (customer.seanseId === seansItem.id) {
//           hall.forEach((hallItem) => {
//             if (seansItem.hallId === hallItem.id) {
//               totalTickets += customer.tickets;
//             }
//           });
//         }
//       });
//     });
  
//     hall.forEach((hallItem) => {
//       if (seansId === hallItem.id) {
//         if (totalTickets > hallItem.plaus) {
//             console.log("Место занято");
//             return;
//         } if (totalTickets <= hallItem.plaus) {
//             custamers.push({
//               id: custamers.length + 1,
//               seansId: seansId,
//               tickets: tickets,
//             });
//           } 
//       }

//     });
  
   
//     console.log(totalTickets);
//   }
//   create(2, 10);
//   create(1, 10);
//   create(1, 10);
  
//   console.log(custamers);


// function create(seansId, tickets) {
//     let totalTickets = tickets;
//     let isAvailable = true;
  
//     custamers.forEach((customer) => {
//       seans.forEach((seansItem) => {
//         if (customer.seanseId === seansItem.id) {
//           hall.forEach((hallItem) => {
//             if (seansItem.hallId === hallItem.id) {
//               totalTickets += customer.tickets;
//             }
//           });
//         }
//       });
//     });
  
//     hall.forEach((hallItem) => {
//       if (seansId === hallItem.id) {
//         if (totalTickets > hallItem.plaus) {
//           isAvailable = false;
//         }
//       }
//     });
  
//     if (isAvailable && totalTickets <= hall[seansId - 1].plaus) {
//       custamers.push({
//         id: custamers.length + 1,
//         seansId: seansId,
//         tickets: tickets,
//       });
//     } else {
//       console.log("Место занято");
//     }
//     console.log(totalTickets);
//   }
  
//   create(1, 10);
//   create(1, 10);
//   create(1, 10);
  
//   console.log(custamers);
