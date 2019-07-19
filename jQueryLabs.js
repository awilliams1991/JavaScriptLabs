///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
//XML reference that gives us intellisense for jQuery
//Though the reference is commented out using an XML comment it will still function inside of a
//JS file
jQuery(document).ready(function () {
    console.log('jQuery is working!')
});
//This section of code is for turning the background of the box you click on light yellow
$(function () {
    //refactor
    var el = document.getElementById("name");
    el.addEventListener('focus', function () {
        el.setAttribute('class', 'background');
        el.addEventListener('blur', function () {
            el.removeAttribute('class', 'background');
        }, false);
    }, false);
    var em = document.getElementById("email");
    em.addEventListener('focus', function () {
        em.setAttribute('class', 'background');
        em.addEventListener('blur', function () {
            em.removeAttribute('class', 'background');
        }, false);
    }, false);

    var com = document.getElementById("comment");
    com.addEventListener('focus', function () {
        com.setAttribute('class', 'background');
        com.addEventListener('blur', function () {
            com.removeAttribute('class', 'background');
        }, false);
    }, false);

    var first = document.getElementById("firsttime");

    $('#firsttime').on('click', function () {
        $('#additional').fadeToggle();
    });

    $('#contactform select[name=referral]').on('change', function () {
        console.log('made it!');
        if ($('#contactform select[name=referral]').val() == 'other') {
            $('#please').css('display', 'block');
        } else {
            $('#please').css('display', 'none');
        }
    });
    
    var submit = document.getElementById("submit");
    submit.addEventListener('click', function () {
        var submitform = document.getElementById("submitform");
        var select = $('#contactform select[name=referral]');
        var com = $('#comment'); 
        submitform.innerHTML = `<h1>Thank you for your feed back!</h1><br /><br /><h2>Message Details:</2><br /><br /><p>Sent by: ${name}, at ${email}<br /> First time? ${first.checked}<br />Referred by: ${select.value}<br />Comment: ${com.value} `;
    }, false);
});

