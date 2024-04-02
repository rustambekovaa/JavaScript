// let user = [
//     {
//         id:1,
//         name:"Majid"
//     },
//     {
//         id:2,
//         name:"Belek"
//     },
//     {
//         id:3,
//         name:"Aziz"
//     },
//     {
//         id:4,
//         name:"Aman"
//     },
//     {
//         id:5,
//         name:"Maanai"
//     },
// ]
// function SpliceDel(start, end,){ 
//     user.splice(start-1, end, 'deleted', 'deleted') 
//     console.log(user); 
//  }SpliceDel(1,4)    



let people = [ 
        { 
            id : 1 , 
            name : "Majid", 
            surname : 'Kamilov', 
            age : 36, 
            data : "2023-02-03" 
        }, 
        { 
            id : 2, 
            name : "Tunubek", 
            surname : 'Janubekov', 
            age : 19, 
            data : "2023-02-02" 
        }, 
        { 
            id : 3, 
            name : "Ulan", 
            surname : 'Ergeshov', 
            age : 23, 
            data : "2023-02-01" 
        }, 
        { 
            id : 4, 
            name : "Aziz", 
            surname : 'Bakirjanov', 
            age: 30, 
            data : "2023-02-01" 
        }, 
        { 
            id : 5, 
            name : "Baibolot", 
            surname : 'Zakirov', 
            age : 20, 
            data : "2023-02-10" 
        } 
    ]


    // function get(date) {
    //    let k =  people.find(elem => {
    //         if( elem.data == date){
    //            return elem
    //         }
    //     })
    //     console.log(k);
    // }
    // get("2023-02-10")


    // function getSort(){
    //     people.sort(function(a,b){
    //         if(a.name > b.name){
    //             return 1 
    //         }
    //         if (a.name < b.name) {
    //             return -1;
    //           }
    //           return 0;
    //     })
    // console.log(people);

    // }
    // getSort()
    

/////////////////   
    // function getSort(){
    //     people.sort((a,b) =>{
    //         if(new Date(a.data) > new Date(b.data)){
    //             return 1 
    //         }
    //     })
    // console.log(people);

    // }
    // getSort()
    

///// 