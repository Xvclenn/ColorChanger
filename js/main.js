const p1 = document.querySelector("p")
const p2 = document.querySelectorAll("p")[document.querySelectorAll("p").length-1]

function changer()
{
    p1.style.backgroundColor = "red"
    p2.style.backgroundColor = "yellow"
}