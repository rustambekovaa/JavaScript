let div = document.querySelector('.green');
let mouseMoveListener;

function handleDrop(event) {
    event.target.style.position = 'absolute';
    mouseMoveListener = (e) => {
        event.target.style.left = `${e.clientX}px`;
        event.target.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', mouseMoveListener);
    console.log(event);
}

div.onmousedown = handleDrop;

function handleStop(e) {
    window.removeEventListener('mousemove', mouseMoveListener);
}

window.onmouseup = handleStop;

console.log(div);