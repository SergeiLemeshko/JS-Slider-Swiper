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
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллиты
		// clickable: true,
		// Динамические буллиты(изменяют размер)
		// dynamicBullets: true,
		//Кастомные буллеты
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		//Фракция
		// type: 'fraction',
		//Кастомный вывод фракций
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Страница <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },
		//Прогрессбар
		// type: 'progressbar'
	},
	//Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		//возможность перетаскивать скролл
		draggable: true
	},
	//Включение/отключение перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,

	//Переключение при клике на слайд
	slideToClickedSlide: true,

	//Навигация по хэшу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		//Вкл/выкл
		enabled: true,
		//Вкл/выкл, только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		//Вкл/выкл, управлени е клавишами pageUP, pageDown
		pageDown: true,
	},

	//Управление колесом мыши
	mousewheel: {
		//чувствительность колеса мыши
		sensitivity: 1,
		//Класс объекта на котором будет срабатывать прокрутка мыщью
		// eventsTarget: ".image-slider"
	},

	//Автовысота
	autoHeight: true,

	//кол-во слайдов для показа
	slidesPerView: 1,

	//Отключение функционала, если слайдов меньше чем нужно
	watchOverflow: true,

	//Отступ между слайдами
	// spaceBetween: 30,

	//Кол-во пролистываемых слайдов
	// slidesPerGroup: 3,

	//Активный слайд по центру
	// centeredSlides: true,
});

	// modules: [Navigation, Pagination],
	// Необязательные параметры
	// direction: 'vertical',
	// loop: true,




