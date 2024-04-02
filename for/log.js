let login, 
  loginPass, 
  registerEmail, 
  registerPPass, 
  registerName, 
  registerPass, 
  registerSurname, 
  age; 
while (true) { 
  let register = +prompt("1) Войти\n2) Регистрация"); 
 
  while (register !== 1 && register !== 2) { 
    register = +prompt("1) Войти\n2) Регистрация"); 
  } 
 
  if (register === 1) { 
    login = prompt("Введите email"); 
 
    while (login !== registerEmail) { 
      login = prompt( 
        "Такой пользователь не зарегистрирован. Введите email снова" 
      ); 
    } 
 
    loginPass = prompt("Введите пароль"); 
 
    while (loginPass !== registerPass) { 
      loginPass = prompt("Неправильный пароль. Введите пароль снова"); 
    } 
 
    if (age >= 18) { 
      alert(`Добро пожаловать, ${registerName} ${registerSurname}!`); 
    } else { 
      alert(`${registerName} ${registerSurname}, вам нельзя`); 
    } 
  } 
   else if (register === 2) { 
    registerEmail = prompt("Введите email"); 
 
    while (registerEmail === "") { 
      registerEmail = prompt("Введите email снова"); 
    } 
 
    registerPass = prompt("Введите пароль"); 
 
    while (registerPass.length < 4) { 
      registerPass = prompt( 
        "Пароль должен содержать не менее 4 символов. Введите пароль снова" 
      ); 
    } 
 
    registerPPass = prompt("Введите пароль еще раз"); 
 
    while (registerPass !== registerPPass) { 
      registerPPass = prompt("Пароли не совпадают. Введите пароль еще раз"); 
    } 
 
    registerName = prompt("Введите имя"); 
 
    while (registerName === "") { 
      registerName = prompt("Имя не должно быть пустым. Введите имя снова");  
    } 
 
    registerSurname = prompt("Введите фамилию"); 
 
    while (registerSurname === "") { 
      registerSurname = prompt( 
        "Фамилия не должна быть пустой. Введите фамилию снова" 
      ); 
    } 
 
    age = +prompt("Введите возраст"); 
 
    while (isNaN(age)) { 
      age = +prompt("Введите возраст числом"); 
    } 
  } 
}
