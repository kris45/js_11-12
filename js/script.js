$(document).ready(function () {
    
    //carousel
    var $left = $('button.button-left');
    var $right = $('button.button-right');
    var $current = 0;
    var $pixels = 300;
    var $liLength = $('.carousel-list').find('li').length;
    var $min = -(($liLength - 1)* $pixels);
    var $max = 0;

    $left.on('click', function(){
    	if ($current != $max) {
    		$current += 300;
    		$('.carousel-list').animate({ left : $current + 'px'}, 500);
    	}	
    });

    $right.on('click', function(){
    	if ($current != $min) {
			$current -= 300;
    		$('.carousel-list').animate({ left : $current + 'px'}, 500);
    	}
    });

    //template

    var info = {
        name: "Сало Христина Андріївна",
        study: "Закінчила національний університет &laquo;Львівська політехніка&raquo;",
        photo: "<img class='photo' src='img/myPhoto.png' alt='My Photo'>",
        reasons: [
            "Більше подобається візуальна частина, а не робота з даними як на backend",
            "Можливість постійно розвиватись",
            "Цікавий колектив"
        ],
        number: "+380937479425",
        vk: "<a href='https://vk.com/id34151392'>vk.com/id34151392</a>",
        feedback: "Надіюсь чудово провести наступні кілька місяців з GoIt!"
    };
    
	var html = $('.template').html();

	var content = tmpl(html, info);

	$('body').append(content);

});












		