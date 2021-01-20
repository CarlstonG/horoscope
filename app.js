const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);

document.getElementById('button').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display="flex";
    }
);

document.querySelector('.close').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display="none";
}
)

function showdiv() 
{
    document.querySelector('.bg-modal').style.display="flex";
}
setTimeout("showdiv()", 3000);