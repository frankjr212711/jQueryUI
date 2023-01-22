
// $(function() {

    // jQuery Selectors

    // methods
    //  $('.content h1').fadeOut();
    
    // events \w function
    // $('#learn-more-btn').click(function() {
    //     $('#text_1').fadeOut();
    //     console.log(this)
    // });

    // css
    // $('.content h1').css('color', '#065fd4');
    // $('h2, h3, h4').css('border', '1px solid #555');
    // $('div.container').css('border', '2px solid red');
    
    // paragraph \w class of lead 
    // $('p.lead').css('border', '1px solid red');

        // pseudo class selectors
    // $('li:first').css('border', '1px solid red');
    // $('li:last').css('border', '1px solid red');

    // $('li:even').css('border', '1px solid red');
    // $('li:odd').css('border', '1px solid red');

        // descendants selectors
    // $('div em').css('border', '1px solid red');

        // child selectors
    // $('div > p').css('border', '1px solid red');

        // jQuery Special selectors
    // $(':header').css('border', '1px solid red');
    // $(':contains("Tertiary")').css('border', '1px solid red');

    
        /**********************
        jQUERY EVENT METHODS
        ***********************/ 

    // $('#learn-more-btn').click(function() {
    //     // alert('you just click the box')
    //     console.log(this);
    // })
    // $('input').blur(function() {
    //     if($(this).val() == '') {
    //         // $(this).css('border', '2px solid red');
    //         $(this).css({
    //             'border': '2px solid red',
    //             'box-shadow': '0 0 2px 0 red'
    //         });
    //         $('#box').text('Forgot to add text');
    //         $('#box').css('color', 'red');
    //     }
    // });

    // $('input').keydown(function() {
    //     if($(this).val() !== '') {
    //         $(this).css('border', '2px solid #777');
    //         $('#box').text('just a moment... please wait')
    //     }
    // })

    // $('#text_2').hover(function () {
    //     $(this).text('stop tickling me...')
    // }, function() {
    //     $(this).text('thank you...') 
    // })

     /**********************
        jQUERY CHAINING
    ***********************/ 

    // $('#box1').fadeIn().delay(2000).css('background', 'lightgreen').slideDown();

    // $('.notification-bar').delay(1000).slideDown().delay(2000).fadeOut();

    /*----------------------
        jQUERY HIDE/SHOW
     ----------------------- */

    // $('.content h1').hide();
    // $('div.hidden').show();

    // $('div.hidden').fadeIn(8000);

    // $('#box').click(function() {
    //     $(this).fadeTo(2000, .5, function() {
    //         $(this).slideUp();
    //         console.log('fadeTo completed')
    //     });
    // });

    // $('div.hidden').slideDown();
    // $('button').click(function() {
    //     $('#box').slideToggle()
    // });


    // $('#up').click(function() {
    //     $('.box').animate({
    //         top: '-=40px',
    //         fontSize: '+=2px'
    //     }, function() {
          
    //     });  
    // });

    // $('#down').click(function() {
    //     $('.box').animate({
    //         bottom: '-=40px',
    //         fontSize: '-=2px'
    //     }, function() {
          
    //     });  
    // });

    // $('#left').click(function() {
    //     $('.box').animate({
    //         left: '-=40px',
    //         fontSize: '-=2px'
    //     }, function() {
          
    //     });  
    // });

    // $('#right').click(function() {
    //     $('.box').animate({
    //         right: '-=40px',
    //         fontSize: '+=2px'
    //     }, function() {
          
    //     });  
    // });


 /* ---------------------
        jQUERY CSS
    --------------------- */
 
    // $('#circle2').css({
    //     'width': '200px',
    //     'height': '200px',
    //     'background': '#8a8d22',
    //     'margin': '2rem',
    //     'fontSize': '3rem',
    //     'lineHeight': '200px',
    //     'textAlign': 'center',
    //     'color': 'white'
    // }).addClass('circleShaped');


    // JQUERY RACE GamE

//     $('#go').click(function() {
//        function checkIfComplete() {
//             if(isComplete == false) {
//                 isComplete = true;
//             } else {
//                 place = 'second';
//             }
//         }
//         let carWidth = $('.car').width();
//         let raceTrackWidth = $(window).width() - carWidth;
//         let raceTime1 = Math.floor((Math.random() * 5000) + 1);
//         let raceTime2 = Math.floor((Math.random() * 5000) + 1);
//         let isComplete = false;
//         let place = 'first';

//         $('#car1').animate({
//             left: raceTrackWidth
//         }, raceTime1, function() {
        
//             checkIfComplete();

// $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + 'milliseconds');
//         })

//         $('#car2').animate({
//             left: raceTrackWidth
//         }, raceTime2, function() {
        
//             checkIfComplete();

//$('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + 'milliseconds');
// })
        // RESET
//     $('#reset').click(function() {
//         $('.car').css('left', '0');
//          $('.raceInfo span').text('')
//        })
//     });

    // jQuery UI

    /* ---------------------------------
        DRAGGABLE
        https://jqueryui.com/draggable
      ----------------------------------*/
    $('.box').draggable();   
        //  $('#box1').draggable({ scroll: true });
        //  $('#box1').draggable({ scroll: true, revert: 'invalid' });

        //  $('#box2').draggable({ scroll: true, revert: 'invalid' });
        //  it will return to its position because its set to not accept

        // $('#box2').draggable({ scroll: true, revert: 'valie' });
        // it will stay


    //  $('#box2').draggable({ axis: 'x' });
    //  $('#box3').draggable({ axis: 'y' });
    //  $('#box4').draggable({ containment: '.container' });



    /* -------------------------
        DROPPABLE
        https://jqueryui.com/droppable
      --------------------------*/

    // $('#droppable').droppable({
    //     accept: '#box1',
    //     drop: function() {
    //     // $(this).find('span').html('drop it like its hot');
    //     $(this).text('drop it like its hot');
    //     }
    // })
  


    /* -------------------------
        SORTABLE
        https://jqueryui.com/sortable
      --------------------------*/
    // $('#sortable').sortable();
    // $('#sortableToo').sortable();
    // $('#sortable').sortable({connectWith: '#sortableToo'});
    $('#sortable').sortable({connectWith: '#sortableToo', placeholder: 'placeholderBox'});

    $('#sortableToo').sortable({connectWith: '#sortable'});




// })

