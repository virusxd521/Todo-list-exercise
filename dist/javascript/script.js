// swal library
import Swal from 'sweetalert2';

// element variable
const inputSubmit = document.querySelector(".submit");
const item = document.querySelector("#item");
const quantity = document.querySelector("#quant");
const elementsList = document.querySelector(".elements-list");



// icon for removing an item (for now it's a shopping cart) 
const shoppingCartSrc = "./dist/images/shopping-cart-solid.svg";

// The icons which will be added to each element
const footerIcon = {
    americanExpress: "./dist/images/amex-brands.svg",
    masterCard: "./dist/images/mastercard-brands.svg",
    visa: "./dist/images/visa-brands.svg"
}

// Footer function creation
const boxesFooterCreation = () => {
    // Creating images and attaching src to the images
    const footerBox = basicElements("div", "box__footer");
    for(let property in footerIcon){
        const imageCredit = basicElements("img", "credit", `${footerIcon[property]}`);
        appendingMany(footerBox, imageCredit);
    }

    return footerBox;
}

// Function for creating elements and assiging class and content
const basicElements = (element, styleClass, data="") => {
    const basicElement = document.createElement(element);
    basicElement.classList.add(styleClass);
    if (element === "img"){
        basicElement.src = data;
    } else if (basicElement.getAttribute("name") === "hr"){
         return;
    } else {
        basicElement.textContent = data;
    }
    return basicElement;
}

// Function for appending many elements
const appendingMany = (parentElement, ...manyChildrens) => {
    return manyChildrens.forEach(item => parentElement.appendChild(item));
}

// Creating box header
const boxesHeaderCreation = (data, quant) => {
    const p = basicElements("p", "box__header-paragraph", `${data}`);
    const image = basicElements("img", "box__header--shopping-cart", shoppingCartSrc);
    const boxHeader = basicElements("div", "box__header");
    appendingMany(boxHeader, p, image); 
    return boxHeader;
}

// Creating the items boxes
const boxesCreation = (valueOfItem, quantityOfItem) => {
    // creating the list box
    const listBox = basicElements("div", "list__box");
    const headerOfBox = boxesHeaderCreation(valueOfItem, quantityOfItem );
    const hrOfBox = basicElements("hr", "list__hr");
    const footerOfBOx = boxesFooterCreation();
    
    appendingMany(listBox, headerOfBox, hrOfBox, footerOfBOx);
    

    // creating the header of the item
    // appending the new item to the list
   
    elementsList.appendChild(listBox);   
}

// submiting the form and adding the values to the shopping list
inputSubmit.addEventListener("click", event => {
    // Preventing from the form to initilize a page reloade
    event.preventDefault();
    // Displaying an alert when one of the fields is empty
    if(item.value === "" || quantity.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please make sure to enter an item and quantity',
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your item was added to the list',
            showConfirmButton: false,
            timer: 1500
        })
        boxesCreation(item.value, quantity.value );

     
    }
})

