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
        negative: "Email was not found",
        response: "Please enter the email you used to register on our website.",
        reset: "Reset Password",
        mail: "Email"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        questionsTab.textContent = language.eng.additionalTab;
        termsTab.textContent = language.eng.conditionsTab;
        notfound.textContent = language.eng.negative;
        instruction.textContent = language.eng.response;
        recbtn.textContent = language.eng.reset;
        email.textContent = language.eng.mail;
    

        const myfont = document.querySelectorAll("#instruction, #notfound, #email, #recbtn, #recovery, #featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab");
        
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
