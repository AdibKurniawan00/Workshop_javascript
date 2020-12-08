/*
 <span class="tooltipText">Tooltip text</span>
 */

var tooltipElements = document.querySelectorAll(".tooltip")
tooltipElements.forEach(element => {
    var tooltipData = element.dataset
    element.addEventListener('mouseover', function(){
        var newSpan = document.createElement('span')
        newSpan.classList.add('tooltipText')
        newSpan.innerText = tooltipData.text
        element.append(newSpan)
    })
    element.addEventListener('mouseout', function(){
        var tooltipText = document.querySelector('.tooltipText')
        tooltipText.parentElement.removeChild(tooltipText)
    })
});