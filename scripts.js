$(document).ready(
    function () {
        $(".upper_menu .upper_menu_button").click(function (event) {
            $(".upper_menu .upper_menu_button").each(function () {
                $(this).removeClass("upper_menu_button--active")
            })
            event.target.classList.add("upper_menu_button--active")

            let menu = "#side_menu_" + $(this).data("menu")
            $(".wrapper .side_menu").each(function () {
                $(this).removeClass("side_menu--active")
            })
            $(menu).addClass("side_menu--active")
        })

        $(".side_menu .side_menu_button").click(function (event) {
            $(".side_menu .side_menu_button").each(function () {
                $(this).removeClass("side_menu_button--active")
            })
            event.target.classList.add("side_menu_button--active");

            let filename = $(this).data("filename");
            if (!filename){
                filename = "empty.html"
            }
            $("#content").load(filename)
        })
    }
)