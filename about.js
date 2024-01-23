const name = document.querySelector(".card-name");
const price = document.querySelector(".card-price");
const type = document.querySelector(".card-type");
const color = document.querySelector(".card-color");
const date = document.querySelector(".card-date");
const comment = document.querySelector(".card-comment");
const image = document.querySelector(".card-image");


function getCardFromLS() {
    let data = [];
     
    if (localStorage.getItem('cars')) {
        data = JSON.parse(localStorage.getItem('cars'));
    };

    return data;
};

document.addEventListener("DOMContentLoaded", function() {


    const isDelete = confirm("Rostdan ham o'chirmoqchimisiz?");

    if (isDelete) {
        let id = 
    } else {
        
    }

});