let $ = document

////////////////////////////

// variables //////////////
const body = $.body
const imgElem = $.querySelector("img")
const nextBtn = $.querySelector(".fa-angles-right")
const prevBtn = $.querySelector(".fa-angles-left")

const allImgSrc = [
    "./Source/Media/Images/pic-1.jpg",
    "./Source/Media/Images/pic-2.jpg",
    "./Source/Media/Images/pic-3.jpg",
    "./Source/Media/Images/pic-4.jpg"
]
let index = 0


// fucntions ///////////////
// to get user screen min height every 0.1s
function liveUserScreenMinHeight(){
    let screenMinHeight = visualViewport.height
    body.style.minHeight = screenMinHeight + "px"
}

// to move to the next img by clicking on next button
function nextImg(){
    index++

    if(index > allImgSrc.length - 1){
        index = 0
    }

    imgElem.src = allImgSrc[index]
}

// to move to the previous img by clicking on prev button
function prevImg (){   
    index--

    if(index < 0){
       index = allImgSrc.length - 1
    }

    imgElem.src = allImgSrc[index]
}

// event listeners //////////
setInterval(liveUserScreenMinHeight, 100)
setInterval(nextImg , 4000)
nextBtn.addEventListener("click" , nextImg)
prevBtn.addEventListener("click" , prevImg)