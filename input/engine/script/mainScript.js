const placeholder = document.querySelector(".placeholder");
const input = document.querySelector(".input");

placeholder.addEventListener("click", () => {
    input.focus();
})

input.addEventListener("blur", () => {
    if (input.value != "") {
        placeholder.style.top = "-12px";
        placeholder.style.fontSize = ".8rem";
    } else {
        placeholder.removeAttribute("style")
    }
})