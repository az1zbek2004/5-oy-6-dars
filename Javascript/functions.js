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

    if (!regEX1.test(data.name.value)) {
        alert("Belgilar soni 3 tadan ko'p bo'lishi kerak");
        data.name.setAttribute('class', "form-control border-danger border-5");
        data.name.focus();
        return false;
    }

    if (!Number(data.price.value)) {
        alert("Narxiga raqam yozilshi kerak");
        data.price.setAttribute('class', "form-control border-danger border-5");
        data.price.focus();
        return false;
    }
    if (!isDateValid(data.year.value)) {
        alert("Yili tanlanishi kerak");
        data.year.setAttribute('class', "form-control border-danger border-5");
        data.year.focus();
        return false;
    }

    if (!isValidUrl(data.imageUrl.value)) {
        alert("Image url manzili bo'lishi kerak");
        data.imageUrl.setAttribute('class', "form-control border-danger border-5");
        data.imageUrl.focus();
        return false;
    }
   
    if (data.color.value === "") {
        alert("Select car color");
        data.color.setAttribute('class', "form-control border-danger border-5");
        data.color.focus();
        return false;
    }
    
    if (data.type.value === "") {
        alert("Select car type");
        data.type.setAttribute('class', "form-control border-danger border-5");
        data.type.focus();
        return false;
    }
    
    

    return true;
};
// Validatsiyadan o'tsa
function ValidateActive(data) {
    data.name.setAttribute('class', "form-control");
    data.price.setAttribute('class', "form-control");
    data.imageUrl.setAttribute('class', "form-control");
    data.type.setAttribute('class', "form-control");
    data.color.setAttribute('class', "form-control");
    data.year.setAttribute('class', "form-control");
    data.comments.setAttribute('class', "form-control");
   }

// card yasash 
function createNewCard(cars) {
    return `
    <div id="car-card" class="card mb-3" width="" >
    <div class="row g-0">
      <div class="col-2">
        <img src="${cars.imageUrl}" class="img-fluid rounded-start" alt="car image">
      </div>
      <div class="col-10">
        <div class="card-body lh-1">
          <div class="primary-page d-flex justify-content-between">
              <h5 class="card-name">${cars.name}</h5>
              <button data-id = "data-${cars.id}" class="btn btn-primary more">Batafsil</button>
          </div>
         <p class="card-price">${cars.price}$</p>
         <p class="card-type">${cars.type}</p>
         <p class="card-color">${cars.color}</p>
         <p class="card-date">${cars.year}</p>
        <p class="card-comment">${cars.comments}</p>
        </div>
      </div>
    </div>
  </div>
    `;
}
   


export {validate, ValidateActive, createNewCard}