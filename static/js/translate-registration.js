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
        registration: "Registration",
        mail: "E-mail",
        number: "Phone number",
        name: "Full name",
        password: "Create a password",
        repeat: "Repeat the password",
        agree: "I agree to",
        hasProfile: "Already have a profile?",
        auth: "Log in here"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        questionsTab.textContent = language.eng.additionalTab;
        termsTab.textContent = language.eng.conditionsTab;
        reg.textContent = language.eng.registration;
        email.textContent = language.eng.mail;
        phonenumber.textContent = language.eng.number;
        fullname.textContent = language.eng.name;
        pass.textContent = language.eng.password;
        rep.textContent = language.eng.repeat;
        consent.textContent = language.eng.agree;
        termsdoc.textContent = language.eng.conditionsTab;
        regbtn.textContent = language.eng.registration;
        question.textContent = language.eng.hasProfile;
        login.textContent = language.eng.auth;
    

        const myfont = document.querySelectorAll("#question, #login, #regbtn, #consent, #termsdoc, #pass, #rep, #fullname, #email, #phonenumber, #reg, #featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab");
        
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
