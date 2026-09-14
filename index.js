
var hamButton = document.querySelector(".hamburger-btn");
var hamMenu = document.querySelector(".hamburger-menu");

//toggling hamburger menu open and closed and updating ARIA attributes
hamButton.addEventListener('click', function(e){
    e.stopPropagation();
    if(hamMenu.classList.contains('show-menu')){
        hamMenu.classList.remove('show-menu') 
    } else{
        hamMenu.classList.add('show-menu')
    }

    if(hamMenu.classList.contains('show-menu')){
    hamButton.setAttribute('aria-expanded','true')
    } else{
        hamButton.setAttribute('aria-expanded','false')
    }
})

//stopping clicks bubbling upwards
hamMenu.addEventListener('click', function(e){
    e.stopPropagation();
})

//if click outside of menu, closes the menu
document.addEventListener('click',function(){
    if(hamMenu.classList.contains('show-menu')){
        hamMenu.classList.remove('show-menu')
    } 
})

//closes menu when escape is pressed and focuses ham button
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        hamMenu.classList.remove('show-menu')

        if(hamMenu.contains(document.activeElement)){
            hamButton.focus()
        }
    }
})