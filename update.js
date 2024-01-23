// Validatsiya
function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }
  function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
  }

function validate(data) { 
    const regEX1 = /^[a-zA-Z0-9 - ]{3,}$/;

    if (!regEX1.test(data.name1.value)) {
        alert("Belgilar soni 3 tadan ko'p bo'lishi kerak");
        data.name1.setAttribute('class', "form-control border-danger border-5");
        data.name1.focus();
        return false;
    }

    if (!Number(data.price1.value)) {
        alert("Narxiga raqam yozilshi kerak");
        data.price1.setAttribute('class', "form-control border-danger border-5");
        data.price1.focus();
        return false;
    }
    if (!isDateValid(data.year1.value)) {
        alert("Yili tanlanishi kerak");
        data.year1.setAttribute('class', "form-control border-danger border-5");
        data.year1.focus();
        return false;
    }

    if (!isValidUrl(data.imageUrl1.value)) {
        alert("Image url manzili bo'lishi kerak");
        data.imageUrl1.setAttribute('class', "form-control border-danger border-5");
        data.imageUrl1.focus();
        return false;
    }
   
    if (data.color1.value === "") {
        alert("Select car color");
        data.color.setAttribute('class', "form-control border-danger border-5");
        data.color.focus();
        return false;
    }
    
    if (data.type1.value === "") {
        alert("Select car type");
        data.type.setAttribute('class', "form-control border-danger border-5");
        data.type.focus();
        return false;
    }
    
    

    return true;
};
// Validatsiyadan o'tsa
function ValidateActive(data) {
    data.name1.setAttribute('class', "form-control");
    data.price1.setAttribute('class', "form-control");
    data.imageUrl1.setAttribute('class', "form-control");
    data.type1.setAttribute('class', "form-control");
    data.color1.setAttribute('class', "form-control");
    data.year1.setAttribute('class', "form-control");
    data.comments1.setAttribute('class', "form-control");
   }

const form = document.querySelector("#form");
const name1 = document.querySelector("#Name");
const price1 = document.querySelector("#Price");
const imageUrl1 = document.querySelector("#ImageUrl");
const type1 = document.querySelector("#Type");
const color1 = document.querySelector("#Color");
const year1 = document.querySelector("#year");
const comments1 = document.querySelector("#Comments");
const submit = document.querySelector("#submit");

function getCardFromLS() {
    let data = [];
     
    if (localStorage.getItem('cars')) {
        data = JSON.parse(localStorage.getItem('cars'));
    };

    return data;
};

submit && submit.addEventListener("click", function(event) {
    event.preventDefault();

    if (validate({name1, price1, imageUrl1, type1, color1, year1, comments1})) {

        ValidateActive({name1, price1, imageUrl1, type1, color1, year1, comments1})

       let data = getCardFromLS();
       let updateId = window.location.href.substring(window.location.href.search('id=')+3);

       let updateCar = data.find(item => {
        return updateId == item.id;
       });

       data = data.filter(item => {
        return updateId != item.id;
       });

       updateCar.name = name1.value;
       updateCar.price = price1.value;
       updateCar.imageUrl = imageUrl1.value;
       updateCar.type = type1.value;
       updateCar.color = color1.value;
       updateCar.year = year1.value;
       updateCar.comments = comments1.value;

       data.push(updateCar);
       localStorage.setItem('cars', JSON.stringify(data));

       let domain = window.location.href.substring(0, window.location.href.search('pages'));
        window.location.assign(`${domain}pages/about.html?id=${updateId}`);
        
    }

});