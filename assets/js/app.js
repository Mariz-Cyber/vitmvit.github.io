$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


   
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
            $(".top").css("display","block");
        } else {
            header.removeClass("fixed");
            $(".top").css("display","none");
        }
    }




    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
       // $this.addClass("active");
         
		  $("#nav").removeClass("active");
		 $("#header").removeClass("active");
		 $(".nav-toggle").removeClass("active");
		$(".submenu").css("display","none");
        $(".fa-chevron-down").addClass('open');
        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });




       
       $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

        
    }); 

  /*  $(document).mouseup(function(e){
    var cont = $(".nav");
    if(cont.has(e.target).length === 0){
        $(".nav-toggle").toggleClass("active");
         $("#nav").toggleClass("active");
		 $("#header").toggleClass("active");
    }else{
    $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    }
});*/

   
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        var $sete = $('.accordion .accordion__item');
        var $this = $(this),
        blockId = $this.data('collapse');
        $(".accordion__item").removeClass("active");
        $this.addClass("active");
		var m=$sete.index(this);  
		if(m==0){
		   $( '.wedo__img' ).attr( "src","assets/images/str.jpg");
		  
	  }if  (m == 1){
		 $( '.wedo__img' ).attr( "src","assets/images/2222.jpg");
		  
	  }if  (m == 2){
		   $( '.wedo__img' ).attr( "src","assets/images/33.jpg");
	  }if  (m == 3){
		   $( '.wedo__img' ).attr( "src","assets/images/44.jpg");
	  }
    });


   
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

//слайдер


var $set = $('.slider__inner .slider__item');
 $('.slider__item').on("mouseenter ", function(){
      $('.slider__item').removeClass("active");

	  $(this).addClass("active");
	  var n=$set.index(this);   
	/*console.log(n);*/
	     
	  if(n==0){
	     $( '.intro' ).removeClass( 'img2').removeClass( 'img3').removeClass( 'img4' );
		   $( '.intro' ).addClass( 'img1',3000);
		  
	  }if  (n == 1){
		   $( '.intro' ).removeClass( 'img1').removeClass( 'img3').removeClass( 'img4'); 
		  $( '.intro' ).addClass( 'img2',3000); 
		  
	  }if  (n == 2){
		  $( '.intro' ).removeClass( 'img2').removeClass( 'img1').removeClass( 'img4');
		   $( '.intro' ).addClass( 'img3',3000);
	  }if  (n == 3){
		  $( '.intro' ).removeClass( 'img2').removeClass( 'img3').removeClass( 'img1');
		   $( '.intro' ).addClass( 'img4',3000);
	  }
	  
	  
	
    
    });
//выпадающая часть меню
$(".v").on("click", function(event) {
        event.preventDefault();
    if($(".fa-chevron-down").hasClass('open')){
       $(".submenu").css("display","block");
       }else{
         $(".submenu").css("display","none");
          
       }
    $(".fa-chevron-down").toggleClass('open');
   
}
)/*
//список улиц
$(".val").on("click", function(event) {
        event.preventDefault();
    
    $(".val").toggleClass('pad');
   
}
);**/

//список улиц
$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
    $(".top2").toggleClass("t2");
    
  
    

  

});

$('.top2').on('click', function(e) {
    e.preventDefault();
     var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
     $(".top2").toggleClass("t2");
    //$(".val").toggleClass('pad');
    
   
    
});




	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#header"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $("#nav").removeClass("active");
               
                $("#header").removeClass("active");
                $(".nav-toggle").removeClass("active");
               $(".submenu").css("display","none");
               $(".fa-chevron-down").addClass('open');
               
		}
	});







    /*!***************************************************
 * google-translate.js v1.0.2
 * https://Get-Web.Site/
 * author: L2Banners
 *****************************************************/

const googleTranslateConfig = {
    lang: "ru",
    /* Если скрипт не работает на поддомене, 
    раскомментируйте и
    укажите основной домен в свойстве domain */
    /* domain: "Get-Web.Site" */
};

function TranslateInit() {
    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    $('[data-google-lang="' + code + '"]').addClass('tr_active');

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateCookieHandler(null, googleTranslateConfig.domain);
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function () {
        TranslateCookieHandler("/auto/" + $(this).attr("data-google-lang"), googleTranslateConfig.domain);
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    $.cookie('googtrans', val);
    $.cookie("googtrans", val, {
        domain: "." + document.domain,
    });

    if (domain == "undefined") return;
    // записываем куки для домена, если он назначен в конфиге
    $.cookie("googtrans", val, {
        domain: domain,
    });

    $.cookie("googtrans", val, {
        domain: "." + domain,
    });
}
