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
        positive: "Please check the email",
        details: "Password recovery instructions have been sent to your email. Please check. If you can't find the mail in your inbox, check your spam folder just in case."
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        questionsTab.textContent = language.eng.additionalTab;
        termsTab.textContent = language.eng.conditionsTab;
        check.textContent = language.eng.positive;
        instructions.textContent = language.eng.details;

        const myfont = document.querySelectorAll("#instructions, #check, #featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab");
        
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
