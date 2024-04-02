// let users = [
//     {
//         id: 1,
//         name: 'John',
//         points: 0
//     },
//     {
//         id: 2,
//         name: 'Scott',
//         points: 0

//     },
//     {
//         id: 3,
//         name: 'Eminen',
//         points: 0

//     },
//     {
//         id: 4,
//         name: 'Pop Smoke',
//         points: 0

//     },
// ]

// let todos_list = [
//     {
//         id: 1,
//         todos: [
//             {
//                 id: 1,
//                 name: 'Todos #1',
//                 is_completed: 10,
//                 usersId: [1, 1, 2, 3, 3]
//                 ///?
//             }
//         ]
//     }
// ]






        

// let temas= []
// let predmets = []
// function kahoot() {
//     let choose = prompt(`1 Предмет \n 2 Тема  \n 3 Вопрос  \n 4 Выйти `)
//     if (choose == 1) {
//         predmet()
//     }
//     if (choose == 2) {
//         tema()

//     }
// }
// kahoot()

// function toString(arr) {
//     let text = ''
//     arr.forEach((item, index) => text += `${index + 1}) ${item.name}\n`)
//     return text
// }

// function predmet() {
//     let take = prompt(`${toString(predmets)}<) Назад  \n+ ) Добавить  `)
//     if (take == "+") {
//                 let which = prompt(`Какой предмет? \n Назад <`)
//                 if (which == "<") {
//                   return  predmet()
//                 }
//              let id = 0
//                 if (predmets.length)  {
//                     id = predmets.at(-1).id
//                 }
//                 id++
//                 predmets.push({ id, "name": which })
//               return  kahoot()
//             }
//             if (take == "<") {
//                 return    kahoot()
//             }
//             if (predmets[take]) {
//                 return tema(predmets[take].id)
//             }
// }


// function tema(predId) {
//     let predmety = prompt(`${toString(predmets)}<) Назад `)
//     if (predmety == "<") {
//         return  kahoot()
//     }
// if (predmets[predmety-1]) {
//     let take = prompt(`${toString(temas.filter(item => item.predId == predmets[predmety-1].id))}<) Назад  \n+ ) Добавить  `)
//     if (take == "+") {
//                     let which = prompt('Name theme')
//                     let id = 0
//                     if (temas.length)  {
//                         id = temas.at(-1).id
//                     }
//                     id++
//                   temas.push({ id, "name": which , predId: predmets[predmety-1].id})
            
//               return  kahoot()
//             }
           
// }
//     return kahoot()
// }
// console.log(predmets);
// console.log(temas);






// function predmet() {
//     let take = prompt(`${predStr(predmets)}<) Назад  \n+ ) Добавить  `)
//     if (take == "+") {
//         let which = prompt(`Какой предмет? \n Назад <`)
//         if (which == "<") {
//             kahoot()
//         }
//         let id = 0
//         if (predmets.length) {
//             id = predmets.at(-1).id
//         }
//         id++
//         predmets.push({ id, "name": which })
//         kahoot()
//     }
//     if (take == "<") {
//         kahoot()
//     }
// }
// predmet()

// function tema() {
//     let predmetss = prompt(` ${predStr(predmets)}\n Назад <`)
//     for (let [index , i] of predmets.entries()) {
//         if (index - 1 == predmetss) {
//             wichTem(i.id)
//         }
//         if (predmetss == "<") {
//             kahoot()
            
//         }
//     }
// }
// tema()


// function predStr1(arr) {
//     let text = ''
//     arr.forEach((item, index) => text += `${index + 1}) ${item.name}\n`)
//     return text
// }


// function wichTem(themeId) { 
//         var tema1 = prompt(`${predStr1(temas.filter(item => item.catId == id))}<) Назад  \n+ ) Добавить`)
//         if (tema1 == "+") {
//             let tema2 = prompt(`Тема?`)
//             if (tema2 == "<") {
//                 tema()   
//             }
//             let id1 = 0
//             if (temas.length) {
//                 id1 = temas.at(-1).id
//             }
//             id1++
//             temas.push({ id:id1, name: tema2,"catId": themeId })
//             getCat()
           
//         }
//         if (tema1 == "<") {
//             tema()
//         }
// }
// wichTem()

// function getCat(){
//       predmets.forEach(elempred =>{
//         const tem =  temas.filter( elemtem => elemtem.catId == elempred.id)
//             elempred.temas = tem
//     })
//   }
//   getCat()
// console.log(predmets);










// let predmet = [
//     {
//         name : sfdfsdf,
//         temsт
//     }
// ]











// if(predmetss == i.id ){
//     let tema1 = prompt(`<) Назад  \n+ ) Добавить`)
//     if( tema1 == "+" ){
//         let tema2 = prompt(`Тема?`)
//         if ( tema2 == "<"){
//             tema()
//         }
//     }if( tema1 == "<" ){
//         tema()
//     }

// }


    // for( i of predmets){
    //     if(predmetss == i.id ){
    //         let tema1 = prompt(`<) Назад  \n+ ) Добавить`)
    //         if( tema1 == "+" ){
    //             let tema2 = prompt(`Тема?`)
    //             i = predmets.i({})
    //             if ( tema2 == "<"){
    //                 tema()
    //             }
    //         }if( tema1 == "<" ){
    //             tema()
    //         }

    //     }
    //     else{
    //         tema()  
    //         }
    // }






//     import { useState } from 'react';
// import './App.scss';


// function App() {
//   let [lists, setLists] = useState([
//     {
//       id: 1,
//       title: "Lorem, ipsum dolor."
//     },
//     {
//       id: 2,
//       title: "Lorem, ipsum dolor."
//     },
//     {
//       id: 3,
//       title: "Lorem, ipsum dolor."
//     },
//     {
//       id: 4,
//       title: "Lorem, ipsum dolor."
//     },
//     {
//       id: 5,
//       title: "Lorem, ipsum dolor."
//     },
//   ])
//   return (
//     <div className="App">
//       <ul>
//         {

//           lists.map(map1 =>(
//             <li 
//             onClick={() => setLists(lists.filter(filter => filter.id != map1.id))}>
//               {map1.id}{map1.title}
//               </li>
//           ))
//         } 
//          </ul>
//     </div>
//   );
// }

// export default App;
