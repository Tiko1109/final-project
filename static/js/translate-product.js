var dataReload = document.querySelectorAll("[data-reload")

var findlink = document.getElementById("logoLink")
var addHash = document.getElementById("cartIcon")

var language = {
    eng: {
        title: "Purple bunny toy",
        button: "buy",
        productPrice: "Price",
        productDesctiption: "Soft bunny toy is made of high quality antiallergic yarns. Height: 24cm. Harmless for children."
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        productTitle.textContent = language.eng.title;
        buyButton.textContent = language.eng.button;
        price.textContent = language.eng.productPrice;
        description.textContent = language.eng.productDesctiption;

        const myfont = document.querySelectorAll("#productTitle, #buyButton, #price, #description");
        
        myfont.forEach((element) => {
            element.style.fontFamily = "Handlee";
        });

        findlink.href = "../../index.html#eng";
        addHash.href = "../pages/cart.html#eng";
    }
}

function PageReload() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }
