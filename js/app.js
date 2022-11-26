$(function(){
	const info__inner = document.querySelector('.info__inner');
	const header = document.querySelector('.header');
	//-------------//
	const scrollItems = document.querySelectorAll('.scroll-item')

	const line = document.querySelector('.progress-line__item');

	const scrollAnimation = () =>{ //Чтобы при скорле добавлялся класс nimation-class и к нему пременялись стили из CSS
		let windowCenter = (window.innerHeight / 1) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 1);
			if(windowCenter >= scrollOffset){
				el.classList.add('animation-class');
			}else{
				el.classList.remove('animation-class');
			}
		});
	}

	const headerFixed = () => {   //(Чтобы HEADER при скроле был зафиксированым)
		let scrollTop = window.scrollY;
		let info__innerCenter = info__inner.offsetHeight / 2;


		if(scrollTop >= info__innerCenter){
			header.classList.add('fixed');
			info__inner.style.marginTop = `${header.offsetHeight}px`;
		}else{
			header.classList.remove('fixed');
			info__inner.style.marginTop = '0px';
		}
	};

	const progressAnimation = () =>{
		let scrollTop = window.scrollY;
		let windowHeight = window.innerHeight;
		let siteHeight = document.documentElement.scrollHeight;


		let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

		line.style.width = `${percentageProgress}%`
	}

	//ВЫзов функций
	headerFixed();

	scrollAnimation();

	progressAnimation();
	window.addEventListener('scroll', () => {
		headerFixed();

		scrollAnimation();

		progressAnimation()
	});
})