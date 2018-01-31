$(function(){
  $('#cta').on('click', function(e){
    e.preventDefault();
    $('body').addClass('body_disap');
    $(this).addClass('disap');

    setTimeout(function(){
      $('.we-create').addClass('disap');
    }, 50);
    setTimeout(function(){
      $('.logo').addClass('disap');
    }, 100);
    setTimeout(function(){
      $('.cntd').addClass('disap');
    }, 150);
    setTimeout(function(){
      $('h1').addClass('disap');
    }, 200);
    setTimeout(function(){
      $('.cta-don').addClass('disap');
    }, 0);



    $('.we-create').removeClass('animated fadeInDown fadeInUp');
    $('.logo').removeClass('animated  fadeInDown fadeInUp');
    $('.cntd').removeClass('animated  fadeInDown fadeInUp');
    $('h1').removeClass('animated fadeInDown fadeInUp');


    setTimeout(function(){
      $('.hypeloader').addClass('loading');


      var t, togg = true;

        $(".loading").on({

          "click": function(e) {

            clearTimeout(t);

            togg = !togg;
            $(this)
              .trigger("reset");

          },

          "saved": function(e) {

            $(this)
              .addClass("ok")
              .removeClass("danger")
              .text("OK");

          },

          "error": function(e) {

            $(this)
              .addClass("danger")
              .removeClass("ok")
              .text("done");

            window.location.href="/";

          },

          "reset": function(e) {

            $(this)
              .removeClass("ok danger")
              .html("<div class='circle-inner'><span class='generating'>Generating...</span><span class='hype-level'>88%</span><div class='hype-words'>"+$('.riskword').text()+"</div></div>");

              var inv=0
              setInterval(function(){
                inv++;
                $('.hype-level').html(inv+'%')
              }, 10)
    // var typed = new Typed('.hype-words', {
    //   strings: ["Second sentence."],s
    //   typeSpeed: 300,
    //   loop: false
    // });


            t = setTimeout( function() {

              if(!togg) {

                $(".loading")
                  .trigger("saved");

              } else {

                $(".loading")
                  .trigger("error");

              }

            }, 2500);

          }

        }).trigger("reset");





    },200);





  });










})