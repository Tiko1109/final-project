var dataReload = document.querySelectorAll("[data-reload")

var findlink = document.getElementById("logoLink")
var HashBasketButton1 = document.getElementById("bunnyButton")
var HashBasketButton2 = document.getElementById("animalButton")

var language = {
    eng: {
        conditions: "Terms and conditions",
        paragraph1: "Article 1.",
        paragraph2: "Article 2.",
        paragraph3: "Article 3.",
        paragraph4: "Article 4.",
        preambleFirst: "These terms and conditions are a legally binding agreement between Amigurumi Tbilisi (hereinafter referred to as the 'Store') and all customers who purchase toys and/or services from the 'Store' (hereinafter referred to as the 'Customer').",
        preambleSecond: "The 'Customer' signifies their acceptance of these terms and conditions by using this website.",
        parapgraph1first: "1.1. The 'Store' is the rightful owner of the Logo, Photos, Product Design, Description, Services, and name 'Amigurumi Tbilisi' displayed on this website, and they are legally protected. As a result, the 'Customer' is only permitted to use it for personal use; processing, translating, selling, and/or using it for gainful employment are all prohibited.",
        parapgraph2first: "2.1. The 'Customer' acknowledges and agrees that the 'Store' may contact them regarding their order via phone, email, and/or brief text messages.",
        parapgraph2second: "2.2. The 'Store' is in charge of protecting the privacy of any personal data (hereafter referred to as 'Personal Information') that 'Customers' give us when registering and/or making purchases on this website;",
        parapgraph2third: "2.3. 'Store' is permitted to process 'Personal Information' and to send email and mobile advertising messages to the owner of 'Personal information'.",
        parapgraph2fourth: "2.4. In accordance with Georgian law governing the protection of personal data, 'Store' is permitted to process 'Personal Information'.",
        parapgraph2fifth: "2.5. 'Store' reserves the right to disclose 'Personal information' to third parties in accordance with Georgian law, to defend its own rights in legal proceedings, or in the event of 'Store's' reorganization, merger, or sale;",
        paragraph3first: "3.1. The 'Customer' is accountable for the accuracy of the data they wrote while placing the order. If an order is improperly executed as a result of an inaccuracy in this information, it is the 'Customer' and not the 'Store' who is responsible;",
        paragraph3second: "3.2. The 'Customer' has the option to cancel the order up to 1 (one) calendar day prior to the date it is scheduled to be delivered; however, if the 'Store' has already sent the order by this moment, the amount will be refunded to the 'Customer' less the cost of delivery and return, in 5 (five) working days.",
        paragraph4first: "4.1. The legal address of the 'Store' shall be the site of execution of these terms and conditions;",
        paragraph4second: "4.2. The invalidity of one or more provisions of these terms and conditions shall not affect the validity of the others that remain in effect."
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        terms.textContent = language.eng.conditions;
        article1.textContent = language.eng.paragraph1;
        article2.textContent = language.eng.paragraph2;
        article3.textContent = language.eng.paragraph3;
        article4.textContent = language.eng.paragraph4;
        preamble1.textContent = language.eng.preambleFirst;
        preamble2.textContent = language.eng.preambleSecond;
        article1first.textContent = language.eng.parapgraph1first;
        article2first.textContent = language.eng.parapgraph2first;
        article2second.textContent = language.eng.parapgraph2second;
        article2third.textContent = language.eng.parapgraph2third;
        article2fourth.textContent = language.eng.parapgraph2fourth;
        article2fifth.textContent = language.eng.parapgraph2fifth;
        article3first.textContent = language.eng.paragraph3first;
        article3second.textContent = language.eng.paragraph3second;
        article4first.textContent = language.eng.paragraph4first;
        article4second.textContent = language.eng.paragraph4second;      

        const myfont = document.querySelectorAll("#terms, #article1, #article2, #article3, #article4, #preamble1, #preamble2, #article1first, #article2first, #article2second, #article2third, #article2fourth, #article2fifth, #article3first, #article3second, #article4first, #article4second");
        
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
