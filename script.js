let currentZ = 1;

function appsDragFeature(win, drag) {
    const desktop = document.querySelector(".desktop");
    
    let isDragging = false;
    let offsetX, offsetY;
    
    drag.addEventListener('mousedown', function (dets) {
        win.style.zIndex = currentZ;
        currentZ += 1
        isDragging = true;
        offsetX = dets.clientX - win.offsetLeft
        offsetY = dets.clientY - win.offsetTop
    })

    desktop.addEventListener('mousemove', function (dets) {

        if (isDragging) {
            win.style.left = (dets.clientX - offsetX) + 'px'
            win.style.top = (dets.clientY - offsetY) + 'px'
        }
    })

    desktop.addEventListener("mouseup", function () {
        isDragging = false;
    });
    
}

const taskbar = document.querySelector(".desktop .taskbar");
const desktop = document.querySelector(".desktop");


function createWindow(){

    const window = document.createElement("div")
    window.className = "window notes";
    const dragbar = document.createElement("div")
    dragbar.className = "drag-bar";
    const content = document.createElement("div")
    content.className = "content";

    window.appendChild(dragbar);
    window.appendChild(content);

    appsDragFeature(window, dragbar)
    return window;

}


taskbar.addEventListener('click', function(dets){
    if(dets.target.tagName === "IMG"){
        desktop.appendChild(createWindow());

    }
})

