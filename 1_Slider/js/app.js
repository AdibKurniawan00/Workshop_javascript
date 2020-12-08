var div = document.querySelector('div')
var li = div.querySelector('li')
div.classList.add("slider");
li.classList.add("visible");
var nextBtn = document.querySelector('#nextPicture')
var prevBtn = document.querySelector('#prevPicture')
nextBtn.addEventListener('click', function(){
    var visible = document.querySelector('.visible')
    if(visible.nextElementSibling)
    {
        visible.classList.toggle("visible")
        visible.nextElementSibling.classList.toggle("visible")
    }
})
prevBtn.addEventListener('click', function(){
    var visible = document.querySelector('.visible')
    if(visible.previousElementSibling)
    {
        visible.classList.toggle("visible")
        visible.previousElementSibling.classList.toggle("visible")
    }
})