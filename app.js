var buttonTranslate = document.querySelector("#translate-button");
var userInput = document.querySelector("#translate-input");
var outputBox = document.querySelector("#outputBox")
var serverURL = "	https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text){
 return serverURL + "?" + "text=" + text
}

function clickHandler(){
 var user_input = userInput.value;
fetch(getTranslationURL(user_input))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputBox.innerHTML = translatedText;})
}

buttonTranslate.addEventListener("click",clickHandler);