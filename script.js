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
		// Буллиты
		// clickable: true,
		// Динамические буллиты(изменяют размер)
		// dynamicBullets: true,
		// Кастомные буллеты
		// renderBullet: function (index, className) {
		// return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		// Фракция
		// type: 'fraction',
		// Кастомный вывод фракций
		// renderFraction: function (currentClass, totalClass) {
		// return 'Страница <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },
		// Прогрессбар
		// type:'progressbar'
	},
	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// возможность перетаскивать скролл
		draggable: true
	},
	// Включение/отключение перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хэшу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Вкл/выкл
		enabled: true,
		// Вкл/выкл, только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		// Вкл/выкл, управлени е клавишами pageUP, pageDown
		pageDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором будет срабатывать прокрутка мыщью
		// eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: true,

	// кол-во слайдов для показа
	slidesPerView: 1,

	// Отключение функционала, если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	// spaceBetween: 30,

	// Кол-во пролистываемых слайдов
	// slidesPerGroup: 3,

	// Активный слайд по центру
	// centeredSlides: true,

	// Стартовый слайд
	initialSlide: 0,

	// Мультирядность
	// slidesPerColumn: 2,

	// Бесконечный слайдер
	loop: false,

	// кол-во дублирующих слайдов
	loopedSlides: 3,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка
	// autoplay: {
	// пауза между прокруткой
	// delay: 1000,
	// Закончить на последнем слайде
	// stopOnLastSlide: true,
	// Отключить после ручного переключения
	// disableOnInteraction: false
	// },

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	// direction: 'vertical',

	// Эффекты переключения слайдов
	// Листание
	effect: 'slide',

	// Эффекты переключения слайдов
	// Смена прозрачности
	// effect: 'fade',

	// Дополнение к fade
	// fadeEffect: {
	// Параллельная смена прозрачности
	// crossFade: true
	// },

	// Эффекты переключения слайдов
	// Переворот
	// effect: 'flip',

	// Дополнение к flip
	// flipEffect: {
	// Тень
	// slideShadows: true,
	// Показ только активного слайда
	// limitRotation: true
	// },

	// Эффекты переключения слайдов
	// Куб
	// effect: 'cube',

	// дополнение к Cube
	// cubeEffect: {
	// Настройка тени
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.94
	// },

	// Эффекты переключения слайдов
	// Эффект потока
	// effect: 'coverflow',

	// дополнение к coverflow
	// cowerflowEffect: {
	// Угол
	// rotate: 20,
	// Наложение
	// stretch: 50,
	// Тень
	// slideShadows: true,
	// },

	// Брейк поинты (адаптив)
	// Ширина экрана
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// },

	// Отключить предзагрузку картинок
	// preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	// lazy: {
	// Подгружать на старте переключения слайда
	// loadOnTransitionStart: false,
	// Подгрузить предыдущую и следующую картинки
	// loadPrevNext: false,
	// },
	// Слежка за видимыми слайдами
	// watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	// watchSlidesVisibility: true,

	// Зум картинки
	// zoom: {
	// Максимальное увеличение
	// maxRatio: 5,
	// Минимальное увеличение
	// minRatio: 1,
	// },
});





