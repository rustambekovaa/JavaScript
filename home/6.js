
let year=+prompt("Введите год")
    let k;
    switch ((year - 4) % 12) {
      case 0:
        k = "Крыса";
        break;
      case 1:
        k = "Бык";
        break;
      case 2:
        k = "Тигр";
        break;
      case 3:
        k = "Кролик";9 
        break;
      case 4:
        k = "Дракон";
        break;
      case 5:
        k = "Змея";
        break;
      case 6:
        k = "Лошадь";
        break;
      case 7:
        k = "Овца";
        break;
      case 8:
        k = "Обезьяна";
        break;
      case 9:
        k = "Петух";
        break;
      case 10:
        k = "Собака";
        break;
      case 11:
        k = "Свинья";
        break;
      default:
        k = "Неверный год";
        break;
    }
    


alert(`Год ${year} по восточному календарю соответствует животному: ${k}`);
  