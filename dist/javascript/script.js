// swal library
import swal from '../../node_modules/sweetalert/typings/sweetalert';




// element variable
const inputSubmit = document.querySelector(".submit");
const item = document.querySelector("#item");
const quantity = document.querySelector("#quant");
const elementsList = document.querySelector(".elements-list");

// submiting the form and adding the values to the shopping list
inputSubmit.addEventListener("click", event => {
    event.preventDefault();
    if(item.value === ""){
        swal.swal("Hello world!");
        console.log(item.value);
    console.log(quantity.value);
    }

})
