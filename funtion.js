function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }


const validate = (name, color, price, type, picture, description) => {
    if(!name.value) {
        name.focus();
        alert('Name is empty');
        return false;
    }

    if (!price.value) {
        price.focus();
        alert("Price input is empty");
        return false;
      }
    
      if (!Number(price.value)) {
        price.focus();
        alert("Price should be Number");
        return false;
      }
    
      if (price.value <= 10 || price.value > 10000) {
        price.focus();
        alert("Price very big or small");
        return false;
      }

    if(!color.value) {
        color.focus();
        alert('Color is empty');
        return false;
    }

    if(!type.value) {
        type.focus();
        alert('Type is empty');
        return false;
    }

    if(!picture.value) {
        picture.focus();
        alert('Picture is empty');
        return false;
    }

    if(!validURL(picture.value)) {
        picture.focus();
        alert('Picture is not in URL');
        return false;
    }

    return true;
}

function getDataFromLocalStorage(){
    let data = [];
    if(localStorage.getItem('phones')) {
        data = JSON.parse(localStorage.getItem('phones'))
    }

    return data
}

function createCard(phone) {
    return `
           <div class="card mb-3 col-6" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="${phone.picture}"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fs-3">${phone.name}</h5>
                      <div class="d-flex justify-content-between">
                        <p class="card-text">
                          <small class="text-danger fs-4">${phone.price}$</small>
                        </p>
                        <p class="card-text">
                          <small class="text-primary fs-4">${phone.type}</small>
                        </p>
                      </div>
                      <p class="card-text">
                      <small class="text-success fs-4">${phone.color}</small>
                    </p>
                      <p class="card-text fs-5">${phone.description}</p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        `;
  }

export {validate, getDataFromLocalStorage, createCard}