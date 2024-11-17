let arr = [ 
    { 
      id: 1, 
      name: "Usuf", 
      salary: "1400r", 
    }, 
    { 
      id: 2, 
      name: "Sabur", 
      salary: "200$", 
    }, 
    { 
      id: 3, 
      name: "Malik", 
      salary: "20$", 
    }, 
    { 
      id: 4,    
      name: "Sarvinbek", 
      salary: "100som", 
    }, 
    { 
      id: 5, 
      name: "Mashabek", 
      salary: "300$", 
    }, 
    { 
      id: 6, 
      name: "Gulpiaz", 
      salary: "300e", 
    }, 
  ]; 
   
  function getUser(min, max){ 
    let result = arr.filter(elem=>{ 
      let total = 0 
      if(elem.salary.includes('r')){ 
        total+= parseInt(elem.salary) * 0.90 
      } 
      else if(elem.salary.includes('$')){ 
        total+= parseInt(elem.salary) * 90 
      } 
      else if(elem.salary.includes('s')){ 
        total+= parseInt(elem.salary) * 1 
      } 
      else if(elem.salary.includes('e')){ 
        total+= parseInt(elem.salary) * 94 
      } 
      // console.log(total); 
      if(total >= min && total <= max){ 
        return elem 
      } 
    }) 
    console.log(result); 
  } 
  
getUser(1000, 10000)
 
 






