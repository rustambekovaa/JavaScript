let users = {
  user1: {
    id: 1,
    name: "Artem",
    pass: "1234",
  },
  user2: {
    id: 2,
    name: "Bael",
    pass: "1234",
  },
  user3: {
    id: 3,
    name: "Diyor",
    pass: "1234",
  },
  user4: {
    id: 4,
    name: "di",
    pass: "1212",
  },
};

let foods = {
  food1: {
    id: 1,
    name: "Burger",
    catId: 1,
    price: 150,
  },
  food2: {
    id: 2,
    name: "Medovik",
    catId: 2,
    price: 90,
  },
  food3: {
    id: 3,
    name: "Lagman",
    catId: 3,
    price: 120,
  },
};

let category = {
  category1: {
    id: 1,
    name: "Fast-food",
  },
  category2: {
    id: 2,
    name: "Desert",
  },

  category3: {
    id: 3,
    name: "Uygur kitchen",
  },
};

function main() {
  while (true) {
    let menu = prompt("1)Регистрация\n2)Вход\n3)Выйти");
    if (menu == 1) {
      auth();
    } else if (menu == 2) {
      login();
    } else if (menu == 3) {
      break;
    }
  }
}

main();

function auth() {
  let ID;
  let name = prompt("Ваше имя?");
  let pass = parseInt(prompt("Пароль?"));
  if (isNaN(pass)) {
    alert("Пароль должен быть числом");
    return;
  }
  let found = false;
  for (let key in users) {
    ID = users[key]["name"];
    if (users[key]["name"] == name) {
      alert("Такой чел уже есть");
      found = true;
      break;
    }
  }

  if (!found) {
    users[`user${ID + 1}`] = {
      id: ID + 1,
      name: name,
      pass: pass,
    };
    alert("Вы успешно зарегестрировались");
  }
}

function login() {
  let name = prompt("Ваше имя?");
  let pass = parseInt(prompt("Пароль?"));
  let found = false;
  for (let key in users) {
    if (users[key]["name"] == name && users[key]["pass"] == pass) {
      secondMenu();
      found = true;
    }
  }

  if (!found) {
    alert("Не верные данные");
  }
}

function secondMenu() {
  while (true) {
    let menu = prompt(
      "1)Блюда\n2)Категории блюд\n3)CRUD на блюда\n4)CRUD на категорию\n5)Назад"
    );
    if (menu == 5) main();

    if (menu == 1) {
      foodsMenu();
    } else if (menu == 2) {
      cateforyOfFoods();
    } else if (menu == 3) {
      crudFoods();
    } else if (menu == 4) {
      crudCategory();
    }
  }
}

function foodsMenu() {
  let text = "";
  for (let key in foods) {
    text += `${foods[key]["id"]}) ${foods[key]["name"]} ${foods[key]["price"]}\n`;
  }

  alert(text);
}

function cateforyOfFoods() {
  let text = "";
  for (let key in category) {
    text += `${category[key]["id"]}) ${category[key]["name"]} \n`;
  }

  alert(text);
}

function crudFoods() {
  let menu = prompt("1)createFOODS\n2)updateFOODS\n3)deleteFOODS\n4)exit");
  if (menu == 1) {
    createFood();
  } else if (menu == 2) {
    updateFoods();
  } else if (menu == 3) {
    deleteFoods();
  } else if (menu == 4) {
    main();
  }
}

function createFood() {
  let found = false;
  let foundCatId = false;
  let ID;
  let name = prompt("Название");
  let catId = prompt("Напишите категорию");
  let price = prompt("цена?");

  for (let keyId in category) {
    if (category[keyId]["name"] == catId) {
      alert("Такая ссуществет!");
      foundCatId = true;
      break;
    }
  }

  for (let key in foods) {
    ID = foods[key]["id"];
    if (foods[key]["name"] == name) {
      alert("Такое блюдо уже есть");
      found = true;
      break;
    }
  }

  if (!found) {
    foods[`foods${ID + 1}`] = {
      id: ID + 1,
      name: name,
      price: price,
      catId: catId,
    };
  }
}


function updateFoods() {
  let found = false;
  let name = prompt("Напиши назване блюда");
  for (let key in foods) {
    if (foods[key]["name"] == name) {
      let nameNew = prompt("Новое название!");
      foods[key]["name"] = nameNew;
      found = true;
      break;
    }
  }

  if (!name) {
    alert("Такого блюда нет!");
  }
}

function deleteFoods() {
  let found = false;
  let name = prompt("Имя блюда которого хотите удалить!");

  for (let key in foods) {
    if (foods[key]["name"] == name) {
      delete foods[key];
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Такого блюда нет!");
  }
}
