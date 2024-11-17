
let category = {
  cat1: {
    id: 1,
    name: "Fast Food",
  },
  cat2: {
    id: 2,
    name: "Pizza",
  },
  cat3: {
    id: 3,
    name: "Rolly",
  },
};

let foods = {
  food1: {
    id: 1,
    name: "Burger",
    cost: 200,
    catId: 1,
    discountId: 1,
  },
  food2: {
    id: 2,
    name: "Shaurma",
    cost: 220,
    catId: 1,
    discountId: 1,
  },
  food3: {
    id: 3,
    name: "Chickken burger",
    cost: 180,
    catId: 1,
    discountId: 1,
  },
  food4: {
    id: 4,
    name: "S krabom",
    cost: 150,
    catId: 3,
    discountId: 2,
  },
  food5: {
    id: 5,
    name: "Yakudza",
    cost: 170,
    catId: 3,
    discountId: 1,
  },
  food6: {
    id: 6,
    name: "S krevetkoi",
    cost: 160,
    catId: 3,
    discountId: 1,
  },
  food7: {
    id: 7,
    name: "4 syra",
    cost: 250,
    catId: 2,
    discountId: 1,
  },
  food8: {
    id: 8,
    name: "Pay",
    cost: 270,
    catId: 2,
    discountId: 2,
  },
  food9: {
    id: 9,
    name: "S kolbasoi",
    cost: 260,
    catId: 2,
    discountId: 1,
  },
};

let drinks = {
  drink1: {
    id: 1,
    name: "Cola",
    cost: 80,
    catId: 2,
  },
  drink2: {
    id: 2,
    name: "Fanta",
    cost: 80,
    catId: 2,
  },
  drink3: {
    id: 3,
    name: "Pepsi",
    cost: 80,
    catId: 2,
  },
};


let statuses = {
  status1: {
    id: 1,
    name: "Ali",
    status: "Admin",
  },
  status2: {
    id: 2,
    name: "Eldos",
    status: "Barmen",
  },
  status3: {
    id: 3,
    name: "Kanat",
    status: "Shef-Povar",
  },
  status4: {
    id: 4,
    name: "Majid",
    status: "Povar",
  },
};
let customer = {
  customer1: {
    id: 1,
    name: "Muhammed",
    foods: {
      1: 3,
      3: 3,
      2: 3,
      7: 3,
      4: 3,
      5: 3
    },
    drinks: {
      2: 3,
      1: 2,
    },
  },
  customer2: {
    id: 2,
    name: "MuhammedAli",
    foods: {
      1: 1,
      2: 4,
      3: 7,
      4: 2,
      5: 8,
      6: 9,
    },
    drinks: {
      1: 3,
      2: 2,
      3: 1,
    },
  },
};
let discount = {
  dics1: {
    id: 1,
    procent: 100,
  },
  disc2: {
    id: 2,
    procent: 25,
  },
};


function gettotal(id) {
  let bill = 0
  for (let i in customer) {
    for (let i2 in foods) {
      for (let i3 in drinks) {
        if (customer[i].id == id) {
          for (let i4 in customer[i].foods) {
            if (i4 == foods[i2].id) {
              bill += foods[i2].cost * customer[i].foods[i4]
              console.log(bill);
            }
          }
          for (let i5 in customer[i].drinks) {
            if (i5 == drinks[i3].id) {
              bill += drinks[i3].cost * customer[i].drinks[i5]
            }
          }
        }
      }
    }
  }
  console.log(bill);
}
gettotal(1)