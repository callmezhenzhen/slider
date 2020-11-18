let clientX = 0
let clientY = 0

function touchstartEvent(e) {
    let touch = e.changedTouches[0]
    if (touch) {
        console.log(touch.clientX, touch.clientY)
    }
}
function touchmoveEvent(e) {
    // console.log('d-touchmove', e)
}
function touchendEvent(e) {
    let touch = e.changedTouches[0]
    if (touch) {
        // console.log('touchend', touch.screenX, touch.screenY, touch.clientX, touch.clientY, touch.pageX, touch.pageY)
    }
}

let slContentNode = document.querySelector('.slider-content')
slContentNode.addEventListener('touchstart', touchstartEvent, {passive: false})
// document.addEventListener('touchstart', touchmoveEvent, {passive: false})
slContentNode.addEventListener('touchend', touchendEvent, {passive: false})