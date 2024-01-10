import { validate,getDataFromLocalStorage } from "./funtion.js";
const button = document.getElementById('button');
const name = document.getElementById('name');
const color = document.getElementById('color');
const price = document.getElementById('price');
const type = document.getElementById('type');
const picture = document.getElementById('picture');
const description = document.getElementById('description');
const form = document.getElementById('form')

button && button.addEventListener('click', function() {
    if(validate(name, color, price, type, picture, description)) {
      const phone = {
        name: name.value,
        price: price.value,
        type: type.value,
        color: color.value,
        description: description.value,
        picture:picture.value
      }
      console.log(phone);
      let data = getDataFromLocalStorage();
      data.push(phone);
      localStorage.setItem('phones', JSON.stringify(data));


      form.reset();

        } else {
          console.log('Validatsiya o`tmadi')
        }
      }
      )