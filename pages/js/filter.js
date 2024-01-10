import { createCard, getDataFromLocalStorage } from "../../funtion.js";
const wrapper = document.getElementById("product-list");
const buttons = document.getElementById("buttons");
const maxPrice = document.getElementById("max-price");
const minPrice = document.getElementById("min-price");
const type = document.getElementById("type");
const color = document.getElementById("color");

let data = getDataFromLocalStorage();

document.addEventListener("DOMContentLoaded", function () {
  if (data.length) {
    data.forEach((phone) => {
      let card = createCard(phone);
      wrapper.innerHTML += card;
    });
  }
});

buttons && buttons.addEventListener("click", function (e) {
    e.preventDefault()
    let filter = {};
    if (color.value) {
      filter.color = color.value;
    }

    if (type.value) {
      filter.type = type.value;
    }

    if (minPrice.value) {
      filter.minPrice = minPrice.value;
    }

    if (maxPrice.value) {
      filter.maxPrice = maxPrice.value;
    }
    let filteredData = JSON.parse(JSON.stringify(data));
    if (filter.color) {
      filteredData = filteredData.filter((el) => {
        return el.color == filter.color;
      });
    }

    if (filter.type) {
      filteredData = filteredData.filter((el) => {
        return el.type == filter.type;
      });
    }

    if (filter.minPrice) {
      filteredData = filteredData.filter((el) => {
        return el.price >= filter.minPrice;
      });
    }

    if (filter.maxPrice) {
      filteredData = filteredData.filter((el) => {
        return el.price <= filter.maxPrice;
      });
    }

    wrapper.innerHTML = "";
    if (filteredData.length) {
      filteredData.forEach((phone) => {
        let card = createCard(phone);
        wrapper.innerHTML += card;
      });
    } else {
      wrapper.innerHTML = "Bunday mahsulot mavjud emas";
    }
  });