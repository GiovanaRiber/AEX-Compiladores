(function ($) {
	
	"use strict";

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 130
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 130
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Home seperator
	if($('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}

	
const slidesTeam = document.querySelector('.slides-team');
const teamMembers = document.querySelectorAll('.team-member');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentIndex = 0;

function getSlidesToShow() {
  if (window.innerWidth >= 1200) return 4;
  if (window.innerWidth >= 992) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function updateSlidePosition() {
  const slidesToShow = getSlidesToShow();
  const slideWidth = teamMembers[0].offsetWidth;

  // Usa módulo para criar efeito circular
  const totalSlides = teamMembers.length;
  currentIndex = (currentIndex + totalSlides) % totalSlides;

  slidesTeam.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

btnPrev.addEventListener('click', () => {
  currentIndex--;
  updateSlidePosition();
});

btnNext.addEventListener('click', () => {
  currentIndex++;
  updateSlidePosition();
});

// Atualiza ao redimensionar a tela
window.addEventListener('resize', updateSlidePosition);

// Auto slide a cada 5 segundos
setInterval(() => {
  currentIndex++;
  updateSlidePosition();
}, 5000);

// Inicializa a posição
updateSlidePosition();





// transição mais suave ao clicar no botão
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const textContainer = btn.parentElement.querySelector(".text");
    textContainer.classList.toggle("expanded");

    if (textContainer.classList.contains("expanded")) {
      btn.textContent = "Leia Menos";
    } else {
      btn.textContent = "Leia Mais";
    }
  });
});

})(window.jQuery);

