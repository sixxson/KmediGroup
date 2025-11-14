import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile: function () {
		$(".header-hamburger").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("isOpenMenu");
		});
	},

	accordionMenu: function () {
		$('.navbar-mobile .menu-list .has-children > a').on('click', function (e) {
			e.preventDefault();
			$(this).parent().toggleClass('active');
			$(this).next('ul').slideToggle();
		});
	},
	scrollUp: function () {
		const $btn = $(".scroll-up");

		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 200) {
				$btn.addClass("active");
			} else {
				$btn.removeClass("active");
			}
		});

		$btn.on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, 600);
		});
	},
	initVariable: function () {
		const height = $("header").height();
		document.documentElement.style.setProperty(
			"--header-height",
			`${height}px`
		);
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
		header.initVariable();
		header.accordionMenu();
		header.scrollUp();
	},
};

document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
