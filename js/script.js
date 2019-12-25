//////////ВАЛИДАТОР
// Забираем все необходимые элементы из формы

var userNameInput = $("#user-name > input");
var userLastnameInput = $("#user-lastname > input");
var userEmailInput = $("#user-email > input");
var userTelephoneInput = $("#user-telephone > input");
var userIqInput = $("#user-iq > input");
var btnOk = $("#ok");
var userAdr = $("#user-adr > input");


// Создаем функцию, которая заставляет инпут становиться красным

function makeMeRed() {

}

// Создаем обработчик события нажатия на кнопку

btnOk.click(function (event) {
    event.preventDefault(); // запрещаем кнопке отправлять форму (поведение по умолчанию)
	
	var validator = 3;

    if (!/[a-aA-Zа-яА-Я]|\s/i.test(userNameInput.val())) {

        userNameInput.css("background-color", "rgba(255,0,0,0.1)");
        validator = validator-1;

    }


    if (!/\d{7,14}$/i.test(userTelephoneInput.val())) {
        userTelephoneInput.css("background-color", "rgba(255,0,0,0.1)");
		validator = validator-1;
    }


    if (!/[a-aA-Z1-9а-яА-Я]/i.test(userAdr.val())) {
        userAdr.css("background-color", "rgba(255,0,0,0.1)");
		validator = validator-1;
    } 
		
     if($("#i1 > li.active").length >= 1 && $("#i2 > li.active").length >= 1&& $("#ocn > li.active").length >= 1&& $("#sous > li.active").length >= 1 && validator == 3){
		
		var pizza = new Object();
        pizza.osnova = $("#ocn > li.active").text();
        pizza.sous = $("#sous > li.active").text();
        pizza.in1 =   $("#i1 > li.active").text();
		pizza.in2 = $("#i2> li.active").text();
		pizza.summa = sum;
		
		console.log(pizza);
		
	      if (confirm("Имя: " + userNameInput.val()+ " Телефон: " +userTelephoneInput.val() +" Адрес: "  + userAdr.val())) {
	 
	      alert("Заказ успешно оформлен. Пицца прибудет в течении часа.");
	      }  
	 } else if(validator != 3){
		  alert("Вы не правильно заполнили форму оформления заказа!");
	      }else{
		alert("Вы выбрали не все пункты!"); 
	 }
        
	 
	


}); //regexone.com
//////////ВАЛИДАТОР


//////////ОТКРЫВАШКА 


function openbox(id) {

    display = document.getElementById(id).style.display;



    if (display == 'none') {

        document.getElementById(id).style.display = 'block';

    } else {

        document.getElementById(id).style.display = 'none';

    }

}

window.onload = function () {

    document.getElementById('toggler').onclick = function () {

        openbox('box', this);

        return false;

    };

};

function openbox(id, toggler) {

    var div = document.getElementById(id);

    if (div.style.display == 'block') {

        div.style.display = 'none';

        toggler.innerHTML = 'ОФОРМЛЕНИЕ ЗАКАЗА';
		

    } else {

         div.style.display = 'block';

         toggler.innerHTML = 'ЗАКРЫТЬ';
		 userNameInput.css("background-color", "#fff");
		 userTelephoneInput.css("background-color", "#fff");
		 userAdr.css("background-color", "#fff");
		 
						 

    }

}
/////////////КОНСТРУКТОР

var ing1 = $("#ing1");
var ing2 = $("#ing2");
var li2 = $("#sous > li");
var ing3 = $("#ing3");
var ing4 = $("#ing4");
var li4 = $("#i2 > li");
var li3 = $("#i1 > li");
var sous = $("#sous");
var ocn = $("#ocn");
var li = $("#ocn > li");
var a = $(".active");
var list = $("#list");
/*var arrOcn = ["img/279-1300.jpg", "img/588-1300.jpg", "img/a (2).png"];*/
var arr = [2,2,3,4];
var sum = 0;


li.click(function () {
	
    li.removeClass("active");
    $(this).addClass("active");
	
	$("#list").css("display", "block");
	
	
    if ($(".osnova_info").length == 0) {
        list.append($("<li class='osnova_info'></li>"));
		sum = sum + 2;
	    $(".p").text("ЦЕНА: "+sum+ " руб.");
		var oi = $(".osnova_info");
	
    }

    $(".osnova_info").text("Основа:" + $("#ocn > li.active").text());
	//$("#myimage").attr('src', "img/" + $("#ocn > li.active").text() + ".jpg");
	$("#myimage").attr('src', "img/img11.jpg");
	
	oi.click(function () {
		sum = sum - 2;
	    $(".p").text("ЦЕНА: "+sum + " руб.");
		$("li.osnova_info").remove();
		$("#ocn > li.active").removeClass("active");
		$("#myimage").attr('src', "img/img1.jpg");
		
		if ($("#list > li").length ==0){
			$("#list").css("display", "none");
		}
		
	});

});






li2.click(function () {
    
    li2.removeClass("active");
	
    $(this).addClass("active");
	$("#list").css("display", "block");
	//sum.push(arr[1]);
	
    if ($(".osnova_info2").length == 0) {
        list.append($("<li class='osnova_info2'></li>"));
		sum = sum+3;
	    $(".p").text("ЦЕНА: "+sum+ " руб.");
		var oi2 = $(".osnova_info2");
	
    }
    $(".osnova_info2").text("Соус:" + $("#sous > li.active").text());
	//$("#myimage2").attr('src', "img/" + $("#sous > li.active").text() + ".jpg");
	$("#myimage2").attr('src', "img/img22.jpg");
	
	oi2.click(function () {
		sum = sum - 3;
	    $(".p").text("ЦЕНА: "+sum + " руб.");
		
		$("li.osnova_info2").remove();
	    $("#sous > li.active").removeClass("active");
		$("#myimage2").attr('src', "img/img2.jpg");
		
		if ($("#list > li").length ==0){
			$("#list").css("display", "none");
		}
		
	});

});






li3.click(function () {
    $("#list").css("display", "block");
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
		sum = sum -4;
	    $(".p").text("ЦЕНА: "+sum+ " руб.");
		if ($("#i1 > li.active").length == 0){
        $("li.osnova_info3").remove();
		$("#myimage3").attr('src', "img/img3.jpg");
		
		if ($("#list > li").length == 0){
			$("#list").css("display", "none");
		}
		
        }
        $(".osnova_info3").text("Мясное:" + $("#i1 > li.active").text());
		
    } else if ($("#i1 > li.active").length < 2) {  
        $(this).addClass("active");
		sum = sum+ 4;
	    $(".p").text("ЦЕНА: "+sum+ " руб.");
		$("#myimage3").attr('src', "img/img33.jpg");
		
        if ($(".osnova_info3").length == 0) {
        list.append($("<li class='osnova_info3'></li>"));
		
	    $(".p").text("ЦЕНА: "+sum+ " руб.");
		
		var oi3 = $(".osnova_info3");
        }
		
		
        $(".osnova_info3").text("Мясное:" + $("#i1 > li.active").text());
		$("#myimage3").attr('src', "img/img33.jpg");
    }
	
     oi3.click(function () {
		 
		 if($("#i1 > li.active").length == 2){
		sum = sum - 8;
	    $(".p").text("ЦЕНА: "+sum + " руб.");	 
		 }else{
			sum = sum - 4;
	    $(".p").text("ЦЕНА: "+sum + " руб."); 
		 }
		 
		 
		$("li.osnova_info3").remove();
		$("#i1 > li.active").removeClass("active");
	    $("#myimage3").attr('src', "img/img3.jpg");
		if ($("#list > li").length ==0){
			$("#list").css("display", "none");
		}
	});

});






li4.click(function () {
       $("#list").css("display", "block");

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
		
		sum = sum -3;
		$(".p").text("ЦЕНА: "+sum+ " руб.");
		if ($("#i2 > li.active").length == 0){
        $("li.osnova_info4").remove();
		$("#myimage4").attr('src', "img/img4.jpg");
		
		if ($("#list > li").length ==0){
			$("#list").css("display", "none");
		}
		
        }
	    $(".osnova_info4").text("Растительное: " + $("#i2 > li.active").text());
		
		/*$("li.osnova_info4").remove();*/
    } else if ($("#i2 > li.active").length < 2) {
        $(this).addClass("active");
		sum = sum +3;
		$(".p").text("ЦЕНА: "+sum+ " руб.");
		$("#myimage4").attr('src', "img/img44.jpg");
		
		if ($(".osnova_info4").length == 0) {
        list.append($("<li class='osnova_info4'></li>"));
		var oi4 = $(".osnova_info4");
        }
        $(".osnova_info4").text("Растительное: " + $("#i2 > li.active").text());
		$("#myimage4").attr('src', "img/img44.jpg");
		
    }
    
	
     oi4.click(function () {
		 if($("#i2 > li.active").length == 2){
		sum = sum - 6;
	    $(".p").text("ЦЕНА: "+sum + " руб.");	 
		 }else{
			sum = sum - 3;
	    $(".p").text("ЦЕНА: "+sum + " руб."); 
		 }
		$("li.osnova_info4").remove();
		$("#i2 > li.active").removeClass("active");
        $("#myimage4").attr('src', "img/img4.jpg");
		
		if ($("#list > li").length ==0){
			$("#list").css("display", "none");
		}
	
	});
});




const googleTranslateConfig = {
    lang: "ru",
};

function TranslateInit() {

    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    $('[data-google-lang="' + code + '"]').addClass('language__img_active');

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateClearCookie();
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function () {
        TranslateSetCookie($(this).attr("data-google-lang"))
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.substr(-2);
}

function TranslateClearCookie() {
    $.cookie('googtrans', null);
    $.cookie("googtrans", null, {
        domain: "." + document.domain,
    });
}

function TranslateSetCookie(code) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    $.cookie('googtrans', "/auto/" + code);
    $.cookie("googtrans", "/auto/" + code, {
        domain: "." + document.domain,
    });
}
