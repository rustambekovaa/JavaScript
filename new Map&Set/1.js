let workers = { 
    developers: { 
        frontend: [ 
            { 
                id: 1, 
                name: "Abdulhai", 
                salary: 10000 
            }, 
            { 
                id: 2, 
                name: "Aziz", 
                salary: 20000 
            }, 
        ], 
        backend: [ 
            { 
                id: 1, 
                name: "Oroz", 
                salary: 30000, 
            }, 
            { 
                id: 2, 
                name: "Ermek", 
                salary: 10000, 
            }, 
        ], 
    }, 
    designers: { 
        moution: [ 
                { 
                id: 1, 
                name: "Nur", 
                salary: 20000 
                }, 
                { 
                id: 2, 
                name: "Den", 
                salary: 26000 
                }, 
            ], 
        uxui: [ 
            { 
                id: 1, 
                name: "Ali", 
                salary: 27000, 
            }, 
            { 
                id: 2, 
                name: "Jen", 
                salary: 16000, 
            }, 
            ], 
    }, 
}

function getsalary(){ 
    let total = new Map() 
    for(let key in workers){ 
        console.log(key); 
        let len = 0 
        let result = 0 
        for(let key2 in workers[key]){ 
            workers[key][key2].forEach(item=>{ 
                len++ 
                result+= item.salary 
            }) 
            total.set(key, result/len) // set(key, value) 
            } 
        } 
        console.log(total); 
    } 
    getsalary()