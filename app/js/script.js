/*======================================================*/
 /***  Main Script JS File     ***/
 /***  EasyBank    ***/
/*======================================================*/

const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElements = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')



btnHamburger.addEventListener('click', function(){
    console.log('Click btnHamburger')

    if(header.classList.contains('open')){ // Close Hamburger Menu 
        body.classList.remove('noScroll')
        header.classList.remove('open')
        fadeElements.forEach(function(element){
            element.classList.add('fade-out')
            element.classList.remove('fade-in')
        })
    }else{ // Open Hamburger Menu 
        body.classList.add('noScroll')
        header.classList.add('open')
        fadeElements.forEach(function(element){
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        })
    }
})