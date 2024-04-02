   function check() {
    let inputs = document.querySelectorAll('input')
    let data = {}

    for (let item of inputs) {
        data[item.getAttribute('id')] = parseInt(item.value)

    }
    console.log(data);
    // for( let i in data){;
        if ((20 <= data.day && data.day <= 31) && (data.month == 1) || (1 <= data.day && data.day <= 18) && (data.month == 2)) {
            console.log("Водолей");data
        }
        else if ((19 <= data.day && data.day <= 31) && (data.month == 2) || (1 <data.day<= data.day && data.day <= 20) && (data.month == 3)) {
            console.log("Рыбы");
        }
        else if ((21 <= data.day &&data.day<= 31) && (data.month == 3) || (1 <= data.day && data.day  <= 19) && (data.month == 4)) {
            console.log("Овен");i.day
        }
        else if ((20 <= data.day &&data.day<= 31) && (data.month == 4) || (1 <=data.day &&data.day <= 20) && (data.month == 5)) {
            console.log("Телец");
        }
        else if ((21 <= data.day &&data.day <= 31) && (data.month == 5) || (1 <=data.day&& data.day <= 21) && (data.month == 6)) {
            console.log("Близнецы");
        }
        else if ((21 <=data.day &&data.day <= 31) && (data.month == 6) || (1 <= data.day &&data.day<= 22) && (data.month == 72)) {
            console.log("Рак");
        }
        else if ((23 <= data.day && data.day <= 31) && (data.month == 7) || (1 <= data.day && data.day <= 22) && (data.month == 8)) {
           console.log("Лев");
        }
        else if ((23 <= data.day && data.day <= 31) && (data.month == 8) || (1 <=data.day && data.day <= 22) && (data.month == 9)) {
          console.log("Дева");
        }
        else if ((23 <= data.day&&data.day <= 31) && (data.month == 9) || (1 <= data.day &&data.day<= 22) && (data.month == 10)) {
            console.log("Весы");
        }
        else if ((23 <= data.day&& i.day <= 31) && (i.month == 10) || (1 <= data.day &&data.day <= 22) && (data.month == 11)) {
            console.log("Скарпион");
        }
        else if ((23 <= data.day &&data.day<= 31) && (data.month == 11) || (1 <= data.day && data.day <= 21) && (data.month == 12)) {
            console.log("Стрелец");
        }
        else if ((22 <= data.day && data.day <= 31) && (data.month == 12) || (1 <= data.day&&data.day <= 19) && (data.month == 1)) {
            console.log("Козерок");
        }
        else {
           console.log(
                "нету такого числа"
            )
        }
    }
// }


// function check2( object){
   
// }
// check2(data)