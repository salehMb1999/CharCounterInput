const $ = document;
let input = $.querySelector(".input");
let wrapper = $.querySelector(".wrapper")
let adSign = $.querySelector(".adSign")
let leftLetters = $.querySelector(".leftLetters")

input.addEventListener("focus", () => {
    wrapper.classList.add("wrapperActive")
    adSign.classList.add("adSignActive")
    input.classList.add("adSignActive")
    leftLetters.classList.add("leftLettersActive")
})
input.addEventListener("blur", () => {
    wrapper.classList.remove("wrapperActive")
    adSign.classList.remove("adSignActive")
    input.classList.remove("adSignActive")
    leftLetters.classList.remove("leftLettersActive")
})
input.addEventListener("keyup", () => {
    let remain = input.maxLength - input.value.length
    leftLetters.innerHTML = remain
})