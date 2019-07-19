///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
//XML reference that gives us intellisense for jQuery
//Though the reference is commented out using an XML comment it will still function inside of a
//JS file
jQuery(document).ready(function () {
    console.log('jQuery is working!')
});

//The above ready event is the Fully Qualified version
//We also have a shortcut:
$(function () {
    //Wait for HTML and CSS code to load (not images or other JS code)

    //jQuery allows us to user CSS-style selectors
    //Any functions that are run on a selected element or class will affect ALL items of that element or class


    //Syntax:
    //$('css-selector').functions(parameters);

    $('#jQueryIntro li').hide().fadeIn(3000);

    //we created a CSS class called important//
    //we will now target the last <li> and add that class to it.
    $('#jQueryIntro li:last-child').addClass('important');

    //we can use the .html() and .text() to either set a new value or to get the current value
    //When assigning a jQuery selection to a variable we typically precede the name with a $
    var $writeless = $('#jQueryIntro li:last-child');
    console.log($writeless.text() + '--TEXT');
    console.log($writeless.html() + '--HTML');

    //Change the text in the first li
    $('#jQueryIntro li:first-child').text('JS Library');
    $writeless.text('Write Less, Do More with jQuery...');
    $writeless.html('"<em>Write Less do More with jQuery"</em>');

    //You can set code to occur on specific events, regardless of the type of HTML element
    //For example, when someone clicks on our element of id=toggle, lets slideToggle()
    //the next sibling
    $('#toggle').on('click', function () {
        //With jQuery inside of an event we can use $(this) to reference the element we are interacting with.

        $(this).next().slideToggle();
    });
    $('#toggle').css('cursor', 'pointer');  //Change the cursor to be a pointer when you hover over the 
    //element with the id of 'toggle'

    //Mini-lab
    //Change the font style of the paragraph after the <h2 id=fade>
    //Apply fadeToggle() functionality to the next sibling of the element with the id of 'fade'
    //Bonus: YOu can change the cursor when your user hovers over the element with the id of 'fade'
    $('#fade').on('click', function () {

        $(this).next().fadeToggle().text("All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. We have so many things that we have to do better... and certainly ipsum is one of them. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.").css('font-style', 'italic');
        
    });
    $('#fade').css('cursor', 'pointer');


    //Custom Lightbox
    //When a user clicks on the thumbnail img, first we will set the <img> src attribute
    //based on whichever image the user clicked. Then wer will fad it in. Then fade it out when the user clicks again.

    $('.thumb').on('click', function () {
        //You can use .attr to access all of an elements attributes
        var largeImageSrc = $(this).attr('src');

        //Inserting an <img> in out <div> with an id of 'lightbox-content'
        $('#lightbox-content').html(
            '<img src="' + largeImageSrc + '" class="img-responsive" />'
            );
        //making our lightbox 'popup' visible until the user clicks again
        $('#lightbox').fadeIn(500).on('click', function () {
            $(this).fadeOut(500);
        });
    });



});

