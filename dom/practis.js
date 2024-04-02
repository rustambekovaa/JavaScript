// document.addEventListener('DOMContentLoaded', function () {
//   const velocityLine = document.getElementById('velocity-line');
//   const velocityPoint = document.getElementById('velocity-point');

//   let isDragging = false;
//   const minVelocity = 100;
//   const maxVelocity = 2000;

//   velocityPoint.addEventListener('mousedown', function (e) {
//     isDragging = true;
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', function () {
//       isDragging = false;
//       document.removeEventListener('mousemove', handleMouseMove);
//     });
//   });

//   function handleMouseMove(e) {
//     if (isDragging) {
//       const rect = velocityLine.getBoundingClientRect();
//       let x = e.clientX - rect.left;

//       // Ограничиваем перемещение точки в пределах линейки
//       x = Math.max(0, Math.min(rect.width, x));

//       const percentage = (x / rect.width) * 100;
//       updateVelocity(percentage);
//       velocityPoint.style.left = `${x}px`;
//     }
//   }

//   function updateVelocity(percentage) {
//     // Используем значения minVelocity и maxVelocity для определения диапазона скорости
//     const velocityRange = maxVelocity - minVelocity;
//     const velocity = (percentage / 100) * velocityRange + minVelocity;

//     // Здесь вы можете использовать значение velocity для обновления скорости объекта
//     // Например, можно отправить это значение на сервер или использовать в другом коде.

//     console.log('Velocity:', velocity.toFixed(2));
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const velocityLine = document.getElementById('velocity-line');
//   const velocityPoint = document.getElementById('velocity-point');

//   let isDragging = false;

//   velocityPoint.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', () => {
//       isDragging = false;
//       document.removeEventListener('mousemove', handleMouseMove);
//     });
//   });

//   function handleMouseMove(e) {
//     if (isDragging) {
//       const rect = velocityLine.getBoundingClientRect();
//       const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
//       const percentage = (x / rect.width) * 100;

//       updateVelocity(percentage);
//       velocityPoint.style.left = `${x}px`;
//     }
//   }

//   function updateVelocity(percentage) {
//     const minVelocity = 1000;
//     const maxVelocity =2000;
//     const velocityRange = maxVelocity - minVelocity;
//     const velocity = (percentage / 100) * velocityRange + minVelocity;

//     console.log('Velocity:', velocity.toFixed(2));
//   }
// });



// document.addEventListener('DOMContentLoaded', function () {
//   // Функция для добавления гостя
//   window.addGuest = function() {
//       const guestNameInput = document.getElementById('guestName');
//       const guestName = guestNameInput.value.trim();

//       if (guestName !== "") {
//           // Создаем чекбокс
//           const checkbox = document.createElement('input');
//           checkbox.type = 'checkbox';

//           // Создаем метку с именем гостя
//           const label = document.createElement('label');
//           label.textContent = guestName;

//           // Добавляем чекбокс и метку в контейнер
//           document.getElementById('guestList').appendChild(checkbox);
//           document.getElementById('guestList').appendChild(label);

//           // Добавляем перенос строки для улучшения визуального восприятия
//           document.getElementById('guestList').appendChild(document.createElement('br'));

//           // Очищаем поле ввода
//           guestNameInput.value = "";
//       }
//   };
// })


let text = ("Hello world")
let text2 = text.replaceAll(' ', '')
 
function elem(){
   let k = Math.ceil(text2.split("").length / 5)
     
}
elem(1)


