var ul = document.querySelector('ul')
var List = ul.children
for(var i = 0; i < List.length; i++){
    List[i].addEventListener('mouseover', function(){
        var secondList = this.querySelector('ul')
        if (secondList != null){
            secondList.style.display = "block"
        }
    })
    List[i].addEventListener('mouseout', function(){
        var secondList = this.querySelector('ul')
        if (secondList != null){
            secondList.style.display = "none"
        }
    })
}