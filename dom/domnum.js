let pod = document.querySelectorAll('main>div');
let numkv;
let num = 1;
let k ;
for (let i = 0; i < pod.length; i++) {
    numkv = pod[i].querySelectorAll('main>div>div>div');
    for (let j = numkv.length - 1; j >= 0; j--) {
        numkv[j].textContent = num;
        num++;
    }
}
function start() {
    k = false
    let takeNum = document.getElementById('number').value ?? 5;
    for (let i = 0; i < pod.length; i++) {
        numkv = pod[i].querySelectorAll('main>div>div>div');
        for (let j = numkv.length - 1; j >= 0; j--) {
            if (numkv[j].textContent == takeNum) {
                numkv[j].classList.add('bg-yellow-500');
            }
        }
    }
    if(k){
        window.location.reload()
    }
}



// let pod = document.querySelectorAll('main>div');
// let numkv;
// let num = 1;
// let k;

// for (let i = 0; i < pod.length; i++) {
//     numkv = pod[i].querySelectorAll('main>div>div>div');
//     for (let j = numkv.length - 1; j >= 0; j--) {
//         numkv[j].textContent = num;
//         num++;
//     }
// }

// function start() {
//     k = false;
//     let takeNum = document.getElementById('number').value ?? 5;

//     for (let i = 0; i < pod.length; i++) {
//         numkv = pod[i].querySelectorAll('main>div>div>div');
//         for (let j = numkv.length - 1; j >= 0; j--) {
//             if (numkv[j].textContent == takeNum) {
//                 numkv[j].classList.add('bg-yellow-500');
//                 k = true; // Set k to true if the condition is met
//             }
//         }
//     }

//     if (k) {
//         window.location.reload();
//     }
// }





