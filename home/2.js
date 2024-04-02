let day = +prompt("Введите день"); 
let month = +prompt("Введите месяц"); 
let year = +prompt("Введите год"); 
let a = false; 
if (year % 4 === 0) { 
  a = true; 
} 
let dayMonth = 31; 
if (month === 2) { 
  if (a) { 
    dayMonth = 29; 
  } else { 
    dayMonth = 28; 
  } 
} else if (month === 4 ||  month === 6 || month === 9 || month === 11) { 
  dayMonth = 30; 
} 
if (day > dayMonth || month > 12) { 
  alert("Ошибка"); 
} else { 
  if (day === dayMonth) { 
    if (month === 12) { 
      day = 1; 
      month = 1; 
      year += 1; 
    } else { 
      day = 1; 
      month += 1; 
    } 
  } else { 
    day += 1; 
  } 
  alert(`Следующий день: ${day} ${month} ${year}`); 
}

