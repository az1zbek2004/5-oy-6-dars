const name = document.querySelector(".card-name");
const price = document.querySelector(".card-price");
const type = document.querySelector(".card-type");
const color = document.querySelector(".card-color");
const date = document.querySelector(".card-date");
const comment = document.querySelector(".card-comment");
const image = document.querySelector(".card-image");
const del = document.querySelector("#delete");
const update = document.querySelector("#update");


function getCardFromLS() {
    let data = [];
     
    if (localStorage.getItem('cars')) {
        data = JSON.parse(localStorage.getItem('cars'));
    };

    return data;
};

let ElementUrl;
document.addEventListener("DOMContentLoaded", function() {

if (window.location.href.search("id=") > 0) {

    ElementUrl = window.location.href.substring(window.location.href.search("id=")+3);

    if (ElementUrl) {
        
    let data = getCardFromLS();
    let car=data.find(item => {
        return ElementUrl == item.id;
    });

    name.innerHTML = car.name;
    price.innerHTML = `${car.price}$`;
    type.innerHTML = car.type;
    color.innerHTML = car.color;
    date.innerHTML = car.year;
    comment.innerHTML = car.comments;
    image.setAttribute("src", `${car.imageUrl}`);

    } else {
        let domain = window.location.href.substring(0, window.location.href.search('index'));
        window.location.assign(`${domain}index.html?id=${id}`);
    }
};


});

del && del.addEventListener("click", function(e) {
    e.preventDefault();

    let isDelete = confirm("Rostdan ham o'chirmoqchimisiz?");
    if (isDelete) {
        let data = getCardFromLS();
        data = data.filter(item => {
            return item.id != ElementUrl;
        });
        localStorage.setItem('cars', JSON.stringify(data));

        let domain = window.location.href.substring(0, window.location.href.search('pages'));
        window.location.assign(`${domain}index.html`);

    };
});

update && update.addEventListener("click", function(e) {
    e.preventDefault();

    let isUpdate = confirm("Rostdan ham yangilamoqchimisiz");
    if (isUpdate) {
        
        let domain = window.location.href.substring(0, window.location.href.search('pages'));
        window.location.assign(`${domain}pages/update.html?id=${ElementUrl}`);

    };
});

