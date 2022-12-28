// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

//Инициализируем Swiper
new Swiper('.swiper', {

	// Стрелки навигации
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Если нам нужна нумерация страниц
	pagination: {
		el: '.swiper-pagination',
		//Буллиты
		clickable: true,
	},

});

	// modules: [Navigation, Pagination],
	// Необязательные параметры
	// direction: 'vertical',
	// loop: true,





	// И если нам нужна полоса прокрутки
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
// });



