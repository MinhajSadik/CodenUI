

let actionBox = document.getElementById("action")
let curtain = document.getElementById("curtain")
let selectedIcon = document.getElementById("popup")



actionBox.addEventListener('click',(e)=>{
    
    selectedIcon.style.visibility='visible'
    curtain.style.backgroundColor= 'rgba(0, 0, 0,0.6)'
})