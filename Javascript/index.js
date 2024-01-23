import { validate, ValidateActive, createNewCard } from "./functions.js";

const form = document.querySelector("#form");
const name = document.querySelector("#Name");
const price = document.querySelector("#Price");
const imageUrl = document.querySelector("#ImageUrl");
const type = document.querySelector("#Type");
const color = document.querySelector("#Color");
const year = document.querySelector("#year");
const comments = document.querySelector("#Comments");
const submit = document.querySelector("#submit");
const cardWrapper = document.querySelector("div.card-wrapper");

function getCardFromLS() {
    let data = [];
     
    if (localStorage.getItem('cars')) {
        data = JSON.parse(localStorage.getItem('cars'));
    };

    return data;
};

submit && submit.addEventListener("click", function(e) {
    e.preventDefault();

    if (validate({name, price, imageUrl, type, color, year, comments})) {
       
        ValidateActive({name, price, imageUrl, type, color, year, comments})

        let cars = {
            name:name.value,
            price:price.value,
            imageUrl:imageUrl.value,
            color:color.value,
            type:type.value,
            year:year.value,
            comments:comments.value,
            status:'active',
            id:Date.now()
        };

        let data = getCardFromLS();
        data.push(cars);
        localStorage.setItem("cars", JSON.stringify(data));


        let card = createNewCard(cars);
        cardWrapper.innerHTML += card;
        form.reset();

        let moreButtons = document.querySelectorAll("button.more");

        moreButtons && moreButtons.forEach(item => {
            item && item.addEventListener("click", function(e) {
                e.preventDefault();
                 let id = this.getAttribute("data-id").substring(5);
                 if (id) {
                    let domain = window.location.href.substring(0, window.location.href.search('index'));
                    window.location.assign(`${domain}pages/about.html?id=${id}`)
                 }
                 
            })
        });


    };
});

document.addEventListener("DOMContentLoaded", function() {

    let data = getCardFromLS();
    data.length && data.forEach(item => {
        let card = createNewCard(item);
        cardWrapper.innerHTML += card;
    });

    let moreButtons = document.querySelectorAll("button.more");

    moreButtons && moreButtons.forEach(item => {
        item && item.addEventListener("click", function(e) {
            e.preventDefault();
             let id = this.getAttribute("data-id").substring(5);
             if (id) {
                let domain = window.location.href.substring(0, window.location.href.search('index'));
                window.location.assign(`${domain}pages/about.html?id=${id}`)
             }
             
        })
    });
    
});