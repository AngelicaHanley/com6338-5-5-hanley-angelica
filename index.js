
var hamButton = document.querySelector(".hamburger-btn");
var hamMenu = document.querySelector(".hamburger-menu");
hamButton.addEventListener('click', function(e){
    e.stopPropagation();
    if(hamMenu.classList.contains('show-menu')){
        hamMenu.classList.remove('show-menu')
    } else{
        hamMenu.classList.add('show-menu')
    }
})

hamMenu.addEventListener('click', function(e){
    e.stopPropagation();
})

document.addEventListener('click',function(){
    if(hamMenu.classList.contains('show-menu')){
        hamMenu.classList.remove('show-menu')
    } 
})

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        hamMenu.classList.remove('show-menu')

        if(hamMenu.contains(document.activeElement)){
            hamButton.focus()
        }
    }
})