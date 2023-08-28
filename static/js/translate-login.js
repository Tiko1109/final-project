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
        auth: "Login",
        username: "User",
        password: "Password",
        notRegistered: "Don't have an account yet?",
        registration: "Register here",
        forgotPass: "Forgot password?",
        recover: "Recover it here"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        questionsTab.textContent = language.eng.additionalTab;
        termsTab.textContent = language.eng.conditionsTab;
        login.textContent = language.eng.auth;
        user.textContent = language.eng.username;
        pass.textContent = language.eng.password;
        logbtn.textContent = language.eng.auth;
        question1.textContent = language.eng.notRegistered;
        reg.textContent = language.eng.registration;
        question2.textContent = language.eng.forgotPass;
        rec.textContent = language.eng.recover;
    

        const myfont = document.querySelectorAll("#reg, #rec, #question1, #question2, #logbtn, #login, #user, #pass, #featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab");
        
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
