var dataReload = document.querySelectorAll("[data-reload")

var findlink = document.getElementById("logoLink")
var productHash1 = document.getElementById("product1")
var productHash2 = document.getElementById("product2")
var productHash3 = document.getElementById("product3")
var productHash4 = document.getElementById("product4")
var productHash5 = document.getElementById("product5")
var productHash6 = document.getElementById("product6")
var productHash7 = document.getElementById("product7")
var productHash8 = document.getElementById("product8")
var productHash9 = document.getElementById("product9")
var productHash10 = document.getElementById("product10")
var productHash11 = document.getElementById("product11")
var productHash12 = document.getElementById("product12")
var HashBasketButton1 = document.getElementById("bunnyButton")
var HashBasketButton2 = document.getElementById("animalButton")

var language = {
    eng: {
        FirstTab: "Popular",
        SecondTab: "Delivery Service",
        ThirdTab: "Contact",
        additionalTab: "Questions",
        conditionsTab: "Terms and Conditions",
        animalsPage: "Animal toys",
        button: "buy",
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
        pageAnimals.textContent = language.eng.animalsPage;
        buyButton1.textContent = language.eng.button;
        buyButton2.textContent = language.eng.button;
        buyButton3.textContent = language.eng.button;
        buyButton4.textContent = language.eng.button;
        buyButton5.textContent = language.eng.button;
        buyButton6.textContent = language.eng.button;
        buyButton7.textContent = language.eng.button;
        buyButton8.textContent = language.eng.button;
        buyButton9.textContent = language.eng.button;
        buyButton10.textContent = language.eng.button;
        buyButton11.textContent = language.eng.button;
        buyButton12.textContent = language.eng.button;
        emptyCart.textContent = language.eng.basket;
        bunnyButton.textContent = language.eng.basketButton1;
        animalButton.textContent = language.eng.basketButton2;

        const myfont = document.querySelectorAll("#featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab, #animalButton, #bunnyButton, #emptyCart, #pageAnimals, #buyButton1, #buyButton2, #buyButton3, #buyButton4, #buyButton5, #buyButton6, #buyButton7, #buyButton8, #buyButton9, #buyButton10, #buyButton11, #buyButton12");
        
        myfont.forEach((element) => {
            element.style.fontFamily = "Handlee";
        });

        findlink.href = "../../index.html#eng";
        productHash1.href = "../pages/product-page.html#eng";
        productHash2.href = "../pages/product-page.html#eng";
        productHash3.href = "../pages/product-page.html#eng";
        productHash4.href = "../pages/product-page.html#eng";
        productHash5.href = "../pages/product-page.html#eng";
        productHash6.href = "../pages/product-page.html#eng";
        productHash7.href = "../pages/product-page.html#eng";
        productHash8.href = "../pages/product-page.html#eng";
        productHash9.href = "../pages/product-page.html#eng";
        productHash10.href = "../pages/product-page.html#eng";
        productHash11.href = "../pages/product-page.html#eng";
        productHash12.href = "../pages/product-page.html#eng";
        HashBasketButton1.href = "static/pages/bunnies.html#eng"
        HashBasketButton2.href = "static/pages/other-animals.html#eng"
    }
}

function PageReload() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }
