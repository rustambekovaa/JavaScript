// Задача: Напишите программу, которая запрашивает у пользователя его возраст и выводит сообщение, указывающее, является ли он ребенком (0-12 лет), подростком (13-19 лет), взрослым (20-59 лет) или пожилым человеком (60 и старше).
let age=prompt("возрвст")
if (age<=12){
    alert("рeбкок")
}
    else if (age>=13 && age<=19){
        alert("подростк")
    }
    else if (age>=20 && age<=59){
        alert("взрослым")
    }
    else{
        alert("пожилым человеком")
    }
    
