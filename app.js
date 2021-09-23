var buttonTranslate = document.querySelector("#translate-button");
var userInput = document.querySelector("#translate-input");
var serverURL = "	https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text){
 return serverURL + "?" + "text=" + text
}

function clickHandler(){
 var user_input = userInput.value;
fetch(getTranslationURL(user_input))
.then(response => response.json())
.then(json => console.log(json))
}

buttonTranslate.addEventListener("click",clickHandler);