let user = {
  user1: {
    id: 1,
    name: "Barbek",
    status: "barmen",
    salary: 22000,
  },
  user2: {
    id: 2,
    name: "Eldos",
    status: "Povar",
    salary: 10000,
  },
  user3: {
    id: 3,
    name: "Aziz",
    status: "admin",
    salary: 20000,
  },
  user4: {
    id: 4,
    name: "Aziz",
    status: "admi",
    salary: 2000,
  },
  user5: {
    id: 5,
    name: "Aziz",
    status: "Pova",
    salary: 22000,
  },
  user6: {
    id: 6,
    name: "Aziz",
    status: "Pova",
    salary: 1000,
  },
  user7: {
    id: 7,
    name: "Aziz",
    status: "kassa",
    salary: 7000,
  },
  user8: {
    id: 8,
    name: "Aziz",
    status: "kassa",
    salary: 22000,
  },
};

function get_top() {
  let top = {};
  for (let key in user) {
    if (Object.keys(top).length === 0) {
      top[key] = user[key];
      continue;
    }
    if (top[Object.keys(top)[0]].salary > user[key].salary) {
      delete top[Object.keys(top)[0]];
      top[key] = user[key];
    }
  }

  for (let key2 in user) {
    if (user[key2] == top[Object.keys(top)[0]]) {
      continue;
    }

    if (Object.keys(top).length == 1) {
      top[key2] = user[key2];
      continue;
    }
    if (top[Object.keys(top)[1]].salary > user[key2].salary) {
      delete top[Object.keys(top)[1]];
      top[key2] = user[key2];
    }
  }
  for (let key3 in user) {
    if (user[key3] == top[Object.keys(top)[0]] || user[key3] == top[Object.keys(top)[1]]) {
      continue;
    }

    if (Object.keys(top).length == 2) {
      top[key3] = user[key3];
      continue;
    }
    if (top[Object.keys(top)[2]].salary > user[key3].salary) {
      delete top[Object.keys(top)[2]];
      top[key3] = user[key3];
    }
  }

  console.log(top);
}
get_top();