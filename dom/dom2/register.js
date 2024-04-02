const passwordInput = document.getElementById('password');
const toggleVisibilityButton = document.getElementById('toggleVisibility');

toggleVisibilityButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

let users = [
    {
        id: 1,
        name: 'rustambekova@gmail.com',
        password: '1234'
    },
    {
        id: 2,
        name: 'bekova@gmail.com',
        password: '4321'
    }
]

// let form = document.getElementById('register')
// function handleSubmit(e) {
//     e.preventDefault()
//     let data = new FormData(form)
//     data = Object.fromEntries(data.entries())
//     console.log(data);
//     let user = users.find(item => item.name == data.name && item.password == data.password)
//     if (user) {
//         alert('HELLO ' + data.name)
//     } else {
//         alert('ERROR')   
//     }
// }
// form.onsubmit = handleSubmit

// let buttonClose = document.querySelector('section form button')
// buttonClose.onclick = (e) => {
//     form.parentElement.classList.add('hidden')
// }
// const loginIt = document.getElementById('login')

let registerLink= document.getElementById('register1')
let popup2= document.getElementById('popup2')
registerLink.addEventListener("click", ()=>{
    popup2.classList.toggle("active")
})

let form = document.getElementById('register');

function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(form);
    data = Object.fromEntries(data.entries());
    console.log(data);
    let user = users.find(item => item.name == data.name && item.password == data.password);
    if (user) {
        alert('HELLO ' + data.name);
    } else {
        alert('ERROR');   
    }
}

form.onsubmit = handleSubmit;

let loginButton = document.getElementById('login');
loginButton.addEventListener('click', handleSubmit);

let buttonClose = document.querySelector('section form button');
buttonClose.onclick = (e) => {
    form.parentElement.classList.add('hidden');
};


