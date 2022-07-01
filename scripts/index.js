
var contact = document.getElementById("contact");

var question;
var loirat;
var martineau;
var troadec;
var charette;

var loiratPoints;
var martineauPoints;
var troadecPoints;
var charettePoints;

var refresh = document.getElementById("refresh");

var currentText = 0

function load() {

    question = document.getElementById("question")
    loirat = document.getElementById("loirat")
    martineau = document.getElementById("martineau")
    troadec = document.getElementById("troadec")
    charette = document.getElementById("charette")

    loiratPoints = 0;
    martineauPoints = 0;
    troadecPoints = 0;
    charettePoints = 0;

    currentText = -1;
    nextText();

}

function nextText() {
    currentText ++;

    if (currentText >= questionsTexts.length) {
        question.textContent = "Tu es :"
        loirat.textContent = "Mr Loirat à " + loiratPoints*100/loiratTexts.length + "%"
        martineau.textContent = "Mr Martineau à " + martineauPoints*100/loiratTexts.length + "%"
        troadec.textContent = "Mme Troadec à " + troadecPoints*100/loiratTexts.length + "%"
        charette.textContent = "Mme de Charrete à " + charettePoints*100/loiratTexts.length + "%"
        loirat = null;
        martineau = null;
        troadec = null;
        charette = null;
    } else {
        question.textContent = questionsTexts[currentText]
        loirat.textContent = loiratTexts[currentText]
        martineau.textContent = martineauTexts[currentText]
        troadec.textContent = troadecTexts[currentText]
        charette.textContent = charetteTexts[currentText]

    }

    

}


load()
        


loirat.onclick = function() {loiratPoints ++; nextText()}
martineau.onclick = function() {martineauPoints ++; nextText()}
troadec.onclick = function() {troadecPoints ++; nextText()}
charette.onclick = function() {charettePoints ++; nextText()}



refresh.onclick = function() { load(); }

contact.onclick = function()  { window.open('mailto:raphael.thomassey@gmail.com?subject=Contact JP2Land', '_blank'); }


