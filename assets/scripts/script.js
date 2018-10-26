// Type animation script
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//smooth scroll
var scrollLink = $('.scroll');

scrollLink.click(function(e){
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 600)
});


var width=$(window).width();

function mobileNavbar(width){
if(width > 960){
  $(window).scroll(parallax);
  $(window).scroll(navbarScrolling);
} else if (width > 355 ){
  $('.burgerdiv').css({
    'margin-left': '5vw'
  });
  $('.site-title').css({
    'margin-left': '8vw',
    'margin-right': '9vw'
  });
  $('.contact-me').css({
    'margin-left': '3vw',
  });
  $(window).scroll(navbarScrolling);
} else {
    $('.burgerdiv').css({
    'margin-left': '5vw'
  });
  $('.site-title').css({
    'margin-left': '7vw',
    'margin-right': '7vw'
  });
  $('.contact-me').css({
    'margin-left': '3vw',
  });
  $(window).scroll(navbarScrolling);
 }
}

$(function() {
  mobileNavbar($(this).width());
  $(window).resize(function() {
    mobileNavbar($(this).width());
  });
});

// //parallax 


var vwHeight = $(window).height();

function navbarScrolling(){
  var wScroll = $(this).scrollTop();
  if (wScroll >= vwHeight*0.1265) {
      $('.myburger').addClass('sticky');
      $('.burgerdiv div').css({
        'background-color':'#000'
      });
       $('.downarrow').css({
      'opacity':'0'
      });
    } else {
        $('.myburger').removeClass('sticky');
        $('.burgerdiv div').css({
        'background-color':'#fff'
        });
        $('.downarrow').css({
        'opacity':'1'
        });
    }
    if(wScroll >= vwHeight*0.7594){
      $('.site-title').css({
        'opacity':'1'
      }); 
      } else {
        $('.site-title').css({
          'opacity':'0'
        });
      };
    if(wScroll >= vwHeight*0.50){
      $('.contact-me').css({
        'opacity':'1'
      });
    } else {
      $('.contact-me').css({
      'opacity':'0'
    });
  } 
}

function parallax(){
  var wScroll = $(this).scrollTop();
  $('.landingcontent').css({
    'transform':'translate(0px , '+wScroll/2+'%)'
  });
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//close navbar on clicking
// $('.navbar-collapse').click(function(){
//     $(".navbar-collapse").removeClass("in");
//     $(".navbar-collapse").attr("aria-expanded", "false");
// });
// $('.navbar-collapse a').click(function(){
//     $(".navbar-collapse").collapse('hide');
// });

// //smoothScrolling
// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 500);
//       }
//     }
//   });



// function navbarfunc(width){
//     if(width<768){
//         // $("div[id=toggleRow]").removeClass("row");
//         $("div[id=toggleMain]").removeClass("col-lg-2 col-md-2 col-sm-2 removegridmargins");
//         $("div[id=toggleSidebarDiv]").removeClass("sidebar-div");
//         $("div[id=toggleContainer]").addClass("container");
//         $("ul").addClass("navbar navbar-nav");
//         $("nav").addClass("navbar navbar-default navbar-fixed-top");
//         $("div[id=toggleNavbarHeader]").addClass("navbar-header");
//         $("svg").remove(".pointer");
//         $("a").remove("#logo");
//     } else if(width>767){
//         // $("div[id=toggleRow]").addClass("row");
//         $("div[id=toggleMain]").addClass("col-lg-2 col-md-2 col-sm-2 removegridmargins");
//         $("div[id=toggleSidebarDiv]").addClass("sidebar-div");
//         $("div[id=toggleContainer]").removeClass("container");
//         $("ul").removeClass("navbar-nav navbar");
//         $("nav ").removeClass("navbar navbar-default navbar-fixed-top");
//         $("div[id=toggleNavbarHeader]").removeClass("navbar-header");
//     }  
// }

