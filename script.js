function appsDragFeature(win) {
    const float = document.querySelector(".window");
    const desktop = document.querySelector(".desktop");

    let isDragging = false;
    let offsetX, offsetY;


    win.addEventListener('mousedown', function (dets) {
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

    win.addEventListener("mouseup", function () {
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

    appsDragFeature(window)
    return window;

}


taskbar.addEventListener('click', function(dets){
    if(dets.target.tagName === "IMG"){

        desktop.appendChild(createWindow());
    }
})

