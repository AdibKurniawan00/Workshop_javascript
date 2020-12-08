/* <div class="fullScreen">
    <img src="./images/wrong.png">
    <button class="close">Close</button>
</div> */
var li = document.querySelectorAll("li")
var body = document.querySelector("body")
var images = document.querySelectorAll("img")
var div = document.querySelector(".gallery")

for (var i = 0; i<li.length; i++){
  images[i].addEventListener("click", function(){
  console.log(this.src)
  var newDiv = document.createElement("div")
  var newImg = document.createElement("img")
  var newBtn = document.createElement("button")
  body.appendChild(newDiv)
  newDiv.appendChild(newImg)
  newDiv.appendChild(newBtn)
  newBtn.innerHTML="close"
  newDiv.classList = "fullScreen"
  newImg.src = this.src
  
  if(newBtn.addEventListener("click",function(){
      newDiv.remove()
  })
  )
  {
  
  }
  
  })
}



