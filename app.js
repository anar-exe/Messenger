"use strict";
$(document).ready(function () {

    $("#sent1").click(function () {
        let message = $.trim($("#msg").val());
        if (message !== '') {
            $("#layout_1").append(`<div class="msg" style="position: relative; left: 480px">${message}</div>`);
            $("#msg").val('');
        }
        else {
            return
        }
    });

    // $('#sent').click(function (e) {
    //     e.preventDefault();
    //     let message = $('#msg').val();

    //     $('#sent').click(function (e) {
    //         e.preventDefault();

    //         $('.layout').append(`<div class="end" style="width: 100px; height: 100px; border:1px solid #000000"><h3>${message}</h3></div>`);
    //     });



    // if ($(message).trim() === '') return
    // $('h1').append(`${message_1}`);

});