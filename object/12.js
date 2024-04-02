let customer = {
  customer1: {
    id: 1,
    name: "Majid",
    foods: {
      0:      1,
      1: 2,
    }
  },
  customer2: {
    id: 2,
    name: "Majid",
    foods: {
      0: 2,
      1: 1,
      2: 2,
      3: 1
    }
  },
}

let foods = {
  food1: {
    id: 1,
    name: "Burger",
    cost: 100,
  },
  food2: {
    id: 2,
    name: "cheesburger",
    cost: 150,
  },
};
function getid() {
  let k ={}
  for (i1 in customer) {
    k = customer[i1]
  }
  for (let i2 in k.foods ) {
    for (let i3 in foods) {
      if (k.foods[i2].id == foods[i3].id) {
        console.log(customer[i1].foods[i2].id);
        k.foods[i2] = foods[i3]
      }
    }
  }
  console.log(customer);
}
getid()
// console.log(customer);
