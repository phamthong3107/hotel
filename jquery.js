$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
AOS.init({
    once: true,
    duration: 2000,
});
$(window).on("load", function() {
    setTimeout(function() {
        $(".reload-content").removeClass("reload-content")
    }, 1000)
})
$('#gotop').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});
$('#dialog-content').dialog({
    autoOpen: false,
    modal: true,
    width: 400,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "explode",
        duration: 1000
    },
    buttons: {
        "Contacts": function() {
            window.location.href = "contact.html"
        },
        Cancel: function() {
            $(this).dialog("close");
        }
    }
})
$('#phone-dialog').click(function() {
    $('#dialog-content').dialog('open')
})