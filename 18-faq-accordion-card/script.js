let whatis = document.querySelector(".whatis")
console.log(whatis)
let arrow = document.querySelectorAll(".arrow")
let content = document.querySelectorAll(".content")
let miniboxes = document.querySelectorAll('.miniboxes')
let allh3 = document.querySelectorAll('.allh3')
console.log(miniboxes)




miniboxes.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (content[index].style.display === "block") {
            content[index].style.display = "none";
            arrow[index].style.transform = "rotate(0deg)";

        } else {

            content[index].style.display = "block";
            arrow[index].style.transform = "rotate(180deg)";
            allh3[index].style.fontWeight = "700"
        }
    });
});




