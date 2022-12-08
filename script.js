const openPopUp2 = document.getElementById('open_pop-up2');
const closePopUp = document.getElementById('pop-up__close');
const PopUp2 = document.getElementById('pop-up');

openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    PopUp2.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    PopUp2.classList.remove('active');
})
