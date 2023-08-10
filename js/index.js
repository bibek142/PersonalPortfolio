burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})





darkBtn = document.querySelector('.darkbtn')
darkmode = document.querySelector('.body') 

darkBtn.addEventListener('click', ()=>{
    darkmode.classList.toggle('body');
})