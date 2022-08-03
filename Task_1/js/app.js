const btnNode = document.querySelector("#button");
const iconNode = document.querySelector("#icon");
const icon_01 = document.querySelector("#icon svg:first-child");
const icon_02 = document.querySelector("#icon svg:last-child");

btnNode.onclick = function() {
    icon_01.classList.toggle("hidden");
    icon_02.classList.toggle("hidden");
};
