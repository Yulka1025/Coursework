
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "../../scss/libs/swiper.scss";
function bildSliders() {
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
function initSliders() {
	bildSliders();
	if (document.querySelector('.pricing__slider')) {
		new Swiper('.pricing__slider', {
			modules: [Navigation, Pagination, Autoplay],
			
			effect: 'cube',
			
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			loop: true,
			pagination: {
				el: '.slider-quality__pagging',
				clickable: true,
			},
			navigation: {
				nextEl: '.about__more .more__item_next',
				prevEl: '.about__more .more__item_prev',
			},
			on: {

			}
		});
	}
}
function initSlidersScroll() {
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});