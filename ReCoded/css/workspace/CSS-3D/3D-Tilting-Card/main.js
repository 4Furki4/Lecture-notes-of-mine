const pre = document.querySelector('pre');

document.addEventListener('mousemove', (event) => {
    rotateElement(event, pre)
})

function rotateElement(event, element) {
    const x = event.clientX
    const y = event.clientY

    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    const offsetX = ((middleX - x) / middleX) * 15
    const offsetY = ((middleY - y) / middleY) * 15

    element.style.setProperty('--rotateX', offsetY + 'deg')
    element.style.setProperty('--rotateY', -1 * offsetX + 'deg')
}