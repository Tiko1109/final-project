var dataReload = document.querySelectorAll("[data-reload")

var findlink = document.getElementById("logoLink")
var HashBasketButton1 = document.getElementById("bunnyButton")
var HashBasketButton2 = document.getElementById("animalButton")

var language = {
    eng: {
        FirstTab: "Popular",
        SecondTab: "Delivery Service",
        ThirdTab: "Contact",
        additionalTab: "Questions",
        conditionsTab: "Terms and Conditions",
        title: "Purple bunny toy",
        button: "buy",
        productPrice: "Price",
        productDesctiption: "Soft bunny toy is made of high quality antiallergic yarns. Height: 24cm. Harmless for children.",
        basket: "Basket is empty",
        basketButton1: "Choose bunny",
        basketButton2: "Choose other animal"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        questionsTab.textContent = language.eng.additionalTab;
        termsTab.textContent = language.eng.conditionsTab;
        productTitle.textContent = language.eng.title;
        buyButton.textContent = language.eng.button;
        price.textContent = language.eng.productPrice;
        description.textContent = language.eng.productDesctiption;
        emptyCart.textContent = language.eng.basket;
        bunnyButton.textContent = language.eng.basketButton1;
        animalButton.textContent = language.eng.basketButton2;

        const myfont = document.querySelectorAll("#featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab, #animalButton, #bunnyButton, #emptyCart, #productTitle, #buyButton, #price, #description");
        
        myfont.forEach((element) => {
            element.style.fontFamily = "Handlee";
        });

        findlink.href = "../../index.html#eng";
    }
}

function PageReload() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }
