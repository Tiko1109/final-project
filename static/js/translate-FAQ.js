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
        questions: "Frequently Asked Questions",
        faq1: "Where are you located?",
        faq2: "What are the toys made of?",
        faq3: "How can I order a toy?",
        faq4: "How long does it take to knit a toy?",
        faq5: "How does the delivery service work?",
        faq6: "How can I pay the order?",
        faq7: "Can I pay cash upon delivery?",
        faq8: "Do you get individual orders?",
        response1: "Currently, our store works only online. We prepare the toys at home in Tbilisi and send them to desired locations with a delivery service.",
        response2: "We make toys from anti-allergic plush yarns, mainly Himalaya, which is considered one of the highest quality yarn. These yarns are safe for children.",
        response3: "You can use our website to place an order. Select the desired toy and click the buy button, then complete the order. You can also message us on our Instagram or Facebook page.",
        response4: "Usually it takes 2 to 5 days to make a toy. However, some toys may already be in stock at the time you place your order, so it may not take that long.",
        response5: "When placing an order, you can select the desired delivery date from the given options. Each toy takes some time to make. This time varies depending on the size and complexity of the toy. As soon as the toy is made, the delivery service will bring your order in Tbilisi the next day. In the regions, we send by Georgian post, and in this case, delivery may take about 1 week. In case you need delivery service to the regions of Georgia, please contact us in advance so that we can specify the details.",
        response6: "When placing the order on the website, payment is possible with a Visa or Mastercard. You can also transfer the amount to our TBC or Bank of Georgia account, in which case please specify the order number in the destination.",
        response7: "At this stage, unfortunately, we do not have our own courier, the delivery service is provided by another company, so it is not possible to pay for the toy upon delivery. However, you can pay the delivery fee to the courier if you prefer.",
        response8: "A custom toy can be ordered if we can obtain or create a scheme for your desired toy. Please contact us in advance, at least 10 days before the desired date, on our Instagram or Facebook page and show us the desired toy, in which case we will specify if we can knit it."
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        questionsTab.textContent = language.eng.additionalTab;
        termsTab.textContent = language.eng.conditionsTab;
        faq.textContent = language.eng.questions;
        q1.textContent = language.eng.faq1;
        q2.textContent = language.eng.faq2;
        q3.textContent = language.eng.faq3;
        q4.textContent = language.eng.faq4;
        q5.textContent = language.eng.faq5;
        q6.textContent = language.eng.faq6;
        q7.textContent = language.eng.faq7;
        q8.textContent = language.eng.faq8;
        answer1.textContent = language.eng.response1;
        answer2.textContent = language.eng.response2;   
        answer3.textContent = language.eng.response3;   
        answer4.textContent = language.eng.response4;   
        answer5.textContent = language.eng.response5;   
        answer6.textContent = language.eng.response6;   
        answer7.textContent = language.eng.response7;   
        answer8.textContent = language.eng.response8;   

        const myfont = document.querySelectorAll("#answer1, #answer2, #answer3, #answer4, #answer5, #answer6, #answer7, #answer8, #q1, #q2, #q3, #q4, #q5, #q6, #q7, #q8, #faq, #featuredProducts, #deliveryTab, #contactTab, #questionsTab, #termsTab");
        
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
