var dataReload = document.querySelectorAll("[data-reload")

var language = {
    ka: {
        title: "იასამნისფერი სათამაშო ბაჭია",
        button: "შეძენა",
        productPrice: "ღირებულება",
        productDesctiption: "რბილი სათამაშო ბაჭია დამზადებულია მაღალი ხარისხის ანტიალერგიული ძაფებისაგან. სიმაღლე: 24სმ. შესაძლებელია გარეცხვა დელიკატურ რეჟიმზე. უსაფრთხოა ბავშვებისათვის"
    },
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
    }
}

function PageReload() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }
