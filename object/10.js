let students = { 
    student1: { 
      id: 1, 
      name: "Abubakir", 
      payment: 8000, 
      iscomplate: true, 
      grade:10 
    }, 
    student2: { 
      id: 2, 
      name: "Eldos", 
      payment: 10000, 
      iscomplate: true, 
      grade:9 
    }, 
    student3: { 
      id: 3, 
      name: "Zamir", 
      payment: 6000, 
      iscomplate: true, 
      grade:8 
    }, 
    student4: { 
      id: 4, 
      name: "Beka", 
      payment: 7000, 
      iscomplate: true, 
      grade:5 
    }, 
    student5: { 
      id: 5, 
      name: "Aza", 
      payment: 9000, 
      iscomplate: true, 
      grade:6 
    }, 
  };

//   function get(){
//     for( i in students ){
//         if(students[i].payment < 8000){
//             students[i].iscomplate ="false"
//         }   
//     }
//     console.log(students);
//   }
//   get()

function getid(id,dengi){
    for( i in students){
        if(students[i].id == id){
            students[i].payment +=dengi
            if(students[i].payment < 8000){
                students[i].iscomplate = "false"
            }

        }
        
    }
    console.log(students);
}
getid(3,2000)
function getid(id,dengi){
    for( i in students){ 
             if(students[i].id == id){
            let k=students[i].payment+dengi
            students[i].payment=k
            if(students[i].payment+k < 8000){
                students[i].iscomplate = "false"
            }

        }
        
    }
    console.log(students);
}
getid(2,3000)