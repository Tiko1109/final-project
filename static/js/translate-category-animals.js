var dataReload = document.querySelectorAll("[data-reload")

var language = {
    ka: {
        animalsPage: "სათამაშო ცხოველები",
        button: "შეძენა"
    },
    eng: {
        animalsPage: "Animal toys",
        button: "buy"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
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

        const myfont = document.querySelectorAll("#pageAnimals, #buyButton1, #buyButton2, #buyButton3, #buyButton4, #buyButton5, #buyButton6, #buyButton7, #buyButton8, #buyButton9, #buyButton10, #buyButton11, #buyButton12");
        
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
