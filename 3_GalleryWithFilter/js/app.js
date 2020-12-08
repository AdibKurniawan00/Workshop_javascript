var images = document.querySelectorAll("img")
var showBtn = document.querySelector("#showButton")
var hideBtn =document.querySelector("#hideButton")
var input = document.querySelector("#tagInput")

showBtn.addEventListener("click", function(){
    var show = input.value
    for (var i=0; i<images.length; i++){
        var tags = images[i].dataset.tag
        if(tags.indexOf(show) >= 0){
           images[i].classList.remove('invisible')
        }    
    }
})
hideBtn.addEventListener("click",function(){
    var hide = input.value
    for(var i = 0; i < images.length; i++){
        var tags = images[i].dataset.tag;
        if (tags.indexOf(hide) >= 0){
            images[i].classList.add('invisible')
        }
    }
})

