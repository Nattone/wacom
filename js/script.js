$(document).ready(function () {

    document.querySelector(".poster").onclick = function () {
        this.style.display = "none";
    }

    $(".switch").click(function () {
        $(this).toggleClass("selected");
    });

    $(".mobile").click(function () {
        $(".header .wrapper").toggleClass("open");
    });
});