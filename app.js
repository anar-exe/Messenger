"use strict";
$(document).ready(function () {

    $("#sent1").click(function () {
        let message_1 = $.trim($("#msg_1").val());
        if (message_1 !== '') {
            $("#layout_1").append(`<div class="msg align-self-end" style="margin-top: 10px">${message_1}</div>`);
            $("#layout_2").append(`<div class="msg align-self-start" style="margin-top: 10px">${message_1}</div>`);
            $("#layout_1, #layout_2").scrollTop($("#layout_1")[0].scrollHeight);
            $("#msg_1").val('');
        }
        else {
            return
        }
    });
    $("#sent2").click(function () {
        let message_2 = $.trim($("#msg_2").val());
        if (message_2 !== '') {
            $("#layout_2").append(`<div class="msg align-self-end" style="margin-top: 10px">${message_2}</div>`);
            $("#layout_1").append(`<div class="msg align-self-start" style="margin-top: 10px">${message_2}</div>`);
            $("#layout_1, #layout_2").scrollTop($("#layout_1")[0].scrollHeight);
            $("#msg_2").val('');
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