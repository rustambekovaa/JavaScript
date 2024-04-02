let customer = {
    customer1: {
      id: 1,
      name: "Majid",
      foods: {
        0: 1,
        1: 2,
      },
      drink: {
        0: 2,
        1: 2,
        2: 1,
        3: 1,
      },
      total1() {
        let discount = 50
        let bill = 0
        for (let i in customer.customer1.foods) {
            bill += customer.customer1.foods[i].cost
        }
        for (let i in customer.customer1.drink) {
            bill += customer.customer1.drink[i].cost
        }
        let check = bill / 100 * discount
        return 'Customer1: \nВаш счет:' + bill +'\nСчет  со скидкой:' + check
      },
    },
    customer2: {
      id: 'sdf',
      name: "Majid",
      foods: {
        0: 2,
        1: 1,
        2: 2,
        3: 1,
      },
      drink: {
        0: 1,
        1: 2,
      },
      total2() {
        let bill = 0
        let discount = 50
        for (let i in customer.customer2.foods) {
            bill += customer.customer2.foods[i].cost
        }
        for (let i in customer.customer2.drink) {
            bill += customer.customer2.drink[i].cost
        }
        let check = bill / 100 * discount
        return 'Customer2: \nВаш счет:' + bill + '\nСчет со скидкой:' + check
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
  
  let drinks = {
    drink1: {
      id: 1,
      name: "pepsi",
      cost: 90,
    },
    drink2: {
      id: 2,
      name: "Fanta",
      cost: 80,
    },
  };
  
  function getCustomer() {
    for (let key in customer) {
      for (let key2 in customer[key].foods) {
        for (let key3 in customer[key].drink) {
          for (let key4 in foods) {
            for (let key5 in drinks) {
              if (customer[key].foods[key2] == foods[key4].id) {
                customer[key].foods[key2] = foods[key4]
              }
              if (customer[key].drink[key3] == drinks[key5].id) {
                customer[key].drink[key3] = drinks[key5]
              }
            }
          }
        }
      }
    }
  }
  getCustomer()
  console.log(customer);
  console.log(customer.customer1.total1());
  console.log(customer.customer2.total2());