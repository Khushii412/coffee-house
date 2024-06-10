let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForms.classList.remove('active');
    cartItems.classList.remove('active');

}

let searchForms = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () =>{
    searchForms.classList.toggle('active');
    navbar.classList.remove('active');  
    cartItems.classList.remove('active');
}

let cartItems = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');  
    searchForms.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');  
    searchForms.classList.remove('active');
    cartItems.classList.remove('active');
}