$(document).ready(function(){
    $("#header_nav a").on({
        mouseenter: function(){
            $(this).css("background-color", "white");
            $(this).css("color", "black");
        },
        mouseleave: function(){
            $(this).css("background-color", "black");
            $(this).css("color", "white");
        },
    });
});

$(document).ready(function(){
    $(".fa-facebook").on({
        mouseenter: function(){
            $(this).css("background-color", "#5984de");
            $(this).css("color", "white");
        },
        mouseleave: function(){
            $(this).css("background-color", "black");
            $(this).css("color", "white");
        },
    });
});

$(document).ready(function(){
    $(".fa-instagram").on({
        mouseenter: function(){
            $(this).css("background-color", "#833AB4");
            $(this).css("color", "white");
        },
        mouseleave: function(){
            $(this).css("background-color", "black");
            $(this).css("color", "white");
        },
    });
});