let swiper = new Swiper(".solutions__slider", {
    loop: false,
    spaceBetween: 17,
    slidesPerView: 1,
    allowTouchMove: true,
    pagination: {
        el: ".solutions__slider-pagination",
        clickable: true,
    },
    breakpoints: {
        767: {
            spaceBetween: 17,
            slidesPerView: 4,
        },
    },
});




window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    const easeDefault = 'power2.out';
    const durationDefault = 0.7;
    const staggerDefault = 0.15;
    if(document.querySelector('.hero')){
        const heroLogos = document.querySelectorAll('.hero__image');
        const heroButton = document.querySelector('.hero__btn');
        const heroName = document.querySelector('.hero__title');
        const heroNameSpan = heroName.querySelector('span');
        const heroDescr = document.querySelector('.hero__descr');
        const heroLine = document.querySelector('.hero__line');
        const heroSocials = document.querySelectorAll('.hero__socials a');
        const heroIcons = document.querySelectorAll('.hero__icons .hero__icons-item img');


        const tl = gsap.timeline({ defaults: { ease: easeDefault } });

        tl.from(
            heroLogos,
            {
                x: -40,
                opacity: 0,
                stagger: staggerDefault,
                duration: durationDefault,
            },
            0
        );

        tl.from(heroName, { x: -40, opacity: 0, duration: durationDefault }, 0.2);

        tl.from(heroNameSpan, { x: -20, opacity: 0, duration: 0.4 }, 0.4);

        tl.from(
            heroLine,
            {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 0.8,
                ease: 'power2.inOut',
            },
            0.5
        );

        tl.from(heroDescr, { x: -40, opacity: 0, duration: durationDefault }, 0.6);

        tl.from(
            heroButton,
            {
                y: 20,
                opacity: 0,
                duration: durationDefault,
                ease: 'back.out(1.2)',
            },
            0.8
        );

        tl.from(
            heroSocials,
            {
                scale: 0.8,
                opacity: 0,
                stagger: 0.08,
                duration: 0.4,
                ease: 'back.out(1.5)',
            },
            1.0
        );

        gsap.from(heroIcons, {
            x: 40,
            opacity: 0,
            duration: 0.7,
            ease: easeDefault,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.hero__icons',
                start: 'top 90%',
                toggleActions: 'play none none none',
            },
        });
    }

    if(document.querySelector('.built')){
        const servicesTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.built__inner',
                start: 'top 80%',
                toggleActions: 'play none none none',
                onEnter: () => {
                    document.querySelector('.built').classList.add('animated');
                }
            },
            defaults: { ease: easeDefault, duration: durationDefault }
        });
        
        servicesTl.from('.built__start-image', { y: 20, opacity: 0 });
        
        servicesTl.from(
            '.built__start-title',
            { y: 20, opacity: 0 },
            '-=0.4'
        );
        
        servicesTl.from(
            '.built__start-icon',
            {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 0.8,
                ease: 'power2.inOut',
            },
            '-=0.3'
        );
        
        servicesTl.from(
            '.built__start-descr',
            {
                y: 20,
                opacity: 0,
            },
            '-=0.4'
        );
        
        servicesTl.from(
            '.built__start-btn',
            {
                y: 20,
                opacity: 0,
                ease: 'back.out(1.2)',
            },
            '-=0.4'
        );


        servicesTl.from(
            '.built__btn',
            {
                y: 20,
                opacity: 0,
                ease: 'back.out(1.2)',
            },
            '-=0.4'
        );
        
        document.querySelectorAll('.built__item').forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top 90%',
                onEnter: () => {
                    item.classList.add('animated');
                },
                toggleActions: 'none none none none',
            });

            const itemTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
                defaults: {
                    ease: easeDefault,
                    duration: 0.5,
                }
            });

            itemTl.from(item.querySelector('.built__item-num'), {
                y: 20,
                opacity: 0,
            });

            itemTl.from(
                item.querySelector('.built__item-title'),
                {
                    y: 20,
                    opacity: 0,
                },
                '-=0.2'
            );

            itemTl.from(
                item.querySelector('.built__item-name'),
                {
                    y: 20,
                    opacity: 0,
                },
                '-=0.2'
            );

            itemTl.from(
                item.querySelector('.built__item-descr'),
                {
                    y: 20,
                    opacity: 0,
                },
                '-=0.2'
            );
        });

    }


    const whyweTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.whywe__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: easeDefault, duration: 0.8 } 
    });

    whyweTl.from(
        '.whywe__content',
        {
            scale: 0.9,
            opacity: 0,
            duration: 1.0,
        },
        0
    );

    const itemsWhyWe = document.querySelectorAll('.whywe__item');

    itemsWhyWe.forEach((item, index) => {
        const startTime = 0.5 + index * 0.3; 

        whyweTl.from(
            item.querySelector('.whywe__item-title'),
            {
                x: -30,
                opacity: 0,
            },
            startTime
        );

        whyweTl.from(
            item.querySelector('.whywe__item-line'),
            {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 0.8,
                ease: 'power2.inOut',
            },
            startTime + 0.2
        );

        whyweTl.from(
            item.querySelector('.whywe__item-descr'),
            {
                y: 15,
                opacity: 0,
            },
            startTime + 0.4
        );
    });


    const solutionsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.solutions__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    solutionsTl.from('.solutions__title', {
        y: 30,
        opacity: 0,
        duration: 0.5,
    });

    solutionsTl.from(
        '.solutions__line',
        {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
        },
        '-=0.4'
    );

    solutionsTl.from(
        '.solutions__descr',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.4'
    );

    solutionsTl.from(
        '.solutions-item',
        {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: 'back.out(1.2)',
        },
        '-=0.3'
    );


    const buyTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.buy__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    buyTl.from('.buy__icon', {
        y: 30,
        opacity: 0,
        duration: 0.8,
    });

    buyTl.from(
        '.buy__title',
        {
            x: -40,
            opacity: 0,
        },
        '-=0.4'
    );

    buyTl.from(
        '.buy__line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        '-=0.4'
    );

    buyTl.from(
        '.buy__descr',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.4'
    );

    buyTl.from(
        '.buy__btn',
        {
            y: 20,
            opacity: 0,
            ease: 'back.out(1.2)',
        },
        '-=0.4'
    );

    if(document.querySelector('.buy__right')){
        buyTl.from(
            '.buy__right',
            {
                y: 50,
                opacity: 0,
                duration: 1.0,
                ease: 'power3.out',
                onStart: () => {
                    document.querySelector('.buy__right').classList.add('animated');
                }
            },
            '-=0.6'
        );
    
    }
    
    buyTl.from(
        '.buy__solutions',
        {
            y: 50,
            opacity: 0,
            duration: 1.0,
            ease: 'power3.out',
        },
        '-=0.6'
    );

    const technologyTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.technology__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    technologyTl.from('.technology__title', {
        y: 30,
        opacity: 0,
        duration: 0.5,
    });

    technologyTl.from(
        '.technology__line',
        {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
        },
        '-=0.4'
    );

    technologyTl.from(
        '.technology__descr',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.4'
    );
    technologyTl.from(
        '.technology__block',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.4'
    );



    const otcTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.otc__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    otcTl.from('.otc__icon', {
        y: 30,
        opacity: 0,
        duration: 0.8,
    });

    otcTl.from(
        '.otc__title',
        {
            y: 30,
            opacity: 0,
            duration: 0.8,
        },
        '-=0.5'
    );

    otcTl.from(
        '.otc__line',
        {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
        },
        '-=0.4'
    );

    otcTl.from(
        document.querySelectorAll('.otc__descr')[0],
        {
            x: 40,
            opacity: 0,
            duration: 0.7,
        },
        '-=0.3'
    );

    otcTl.from(
        document.querySelectorAll('.otc__descr')[1],
        {
            x: -40,
            opacity: 0,
            duration: 0.7,
        },
        '<'
    );

    otcTl.from(
        '.otc__btn',
        {
            y: 20,
            opacity: 0,
            ease: 'back.out(1.2)',
        },
        '-=0.4'
    );

    if(document.querySelector('.faq')){
        const faqTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.faq__inner',
                start: 'top 80%',
                toggleActions: 'play none none none',
                onEnter: () => {
                    document.querySelector('.faq').classList.add('animated');
                }
            },
            defaults: { ease: 'power2.out', duration: 0.7 }
        });

        faqTl.from('.faq__title', {
            y: 30,
            opacity: 0,
        });

        faqTl.from(
            '.faq__line',
            {
                scaleX: 0,
                transformOrigin: 'center center',
                duration: 0.8,
            },
            '-=0.4'
        );

        faqTl.from(
            '.faq__item',
            {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'back.out(1.2)',
            },
            '-=0.3'
        );
    }


    const integTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.howinteg__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    integTl.from('.howinteg__title', {
        y: 30,
        opacity: 0,
    }, 0);

    integTl.from(
        '.howinteg__line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        0.3
    );

    integTl.from(
        '.howinteg__select',
        {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
        },
        0.7
    );

    integTl.from(
        '.howinteg__content',
        {
            y: 20,
            opacity: 0,
            duration: 0.6,
        },
        1.0
    );

    integTl.from(
        '.howinteg__right',
        {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
        },
        0
    );

    integTl.from(
        '.howinteg__right-icon',
        {
            scale: 0.8,
            opacity: 0,
            duration: 0.7,
            ease: 'back.out(1.7)',
        },
        0.6
    );

    integTl.from(
        '.howinteg__right-title',
        {
            x: 30,
            opacity: 0,
        },
        0.8
    );

    integTl.from(
        '.howinteg__right-line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        1.0
    );

    integTl.from(
        '.howinteg__right-list li',
        {
            x: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
        },
        1.2
    );

    const discussTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.discuss__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    discussTl.from('.discuss__bg', {
        scale: 0,
        duration: 1.5,
        ease: 'power3.out',
        transformOrigin: 'center center',
    }, 0);

    discussTl.from(
        '.discuss__title',
        {
            y: 30,
            opacity: 0,
            duration: 0.8,
        },
        0.3
    );

    discussTl.from(
        '.discuss__line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
        },
        0.6
    );

    discussTl.from(
        '.discuss__content .discuss__descr',
        {
            y: 20,
            opacity: 0,
        },
        0.8
    );

    discussTl.from(
        '.discuss__name',
        {
            y: 20,
            opacity: 0,
        },
        1.0
    );

    discussTl.from(
        '.discuss__btn',
        {
            y: 20,
            opacity: 0,
            ease: 'back.out(1.2)',
        },
        1.1
    );

    discussTl.from(
        '.discuss__tel',
        {
            y: 20,
            opacity: 0,
        },
        1.2
    );

    discussTl.from(
        '.discuss__mail',
        {
            y: 20,
            opacity: 0,
        },
        1.3
    );

    discussTl.from(
        '.discuss__block-line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.7,
        },
        1.4
    );

    discussTl.from(
        '.discuss__block .discuss__descr',
        {
            y: 20,
            opacity: 0,
        },
        1.5
    );


    const infoblockTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.infoblock__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: easeDefault, duration: durationDefault }
    });

    infoblockTl.from('.infoblock__top-icon', {
        y: 20,
        opacity: 0,
    });

    infoblockTl.from(
        '.infoblock__top-descr',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.4'
    );

    document.querySelectorAll('.infoblock__item').forEach((item) => {
        const itemTl = gsap.timeline({
            scrollTrigger: {
                trigger: item, 
                start: 'top 85%', 
                toggleActions: 'play none none none',
            },
            defaults: { ease: easeDefault, duration: 0.7 }
        });

        itemTl.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
        }, 0); 
        
        itemTl.from(item.querySelector('.infoblock__item-title'), {
            x: -30,
            opacity: 0,
            duration: 0.5,
        }, 0.2);

        itemTl.from(
            item.querySelector('.infoblock__item-line'),
            {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 0.7,
            },
            0.4
        );

        itemTl.from(
            item.querySelector('.infoblock__item-content'),
            {
                y: 20,
                opacity: 0,
            },
            0.6
        );
    });

    const pageinfoTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.pageinfo__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    pageinfoTl.from('.pageinfo__icon', {
        y: 30,
        opacity: 0,
    });

    pageinfoTl.from(
        '.pageinfo__title',
        {
            x: -40,
            opacity: 0,
            duration: 0.8,
        },
        '-=0.4'
    );

    pageinfoTl.from(
        '.pageinfo__line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        '-=0.4'
    );
    pageinfoTl.from(
        '.pageinfo__content',
        {
            y: 30,
            opacity: 0,
            duration: 0.8,
        },
        '-=0.3'
    );

    const keycapTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.keycap__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    keycapTl.from('.keycap__title', {
        x: -30,
        opacity: 0,
        duration: 0.8,
    });

    keycapTl.from(
        '.keycap__line',
        {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        '-=0.4'
    );

    keycapTl.from(
        '.keycap__descr',
        {
            x: -20,
            opacity: 0,
        },
        '-=0.3'
    );

    const integrTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.integr__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    integrTl.from('.integr__title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
    });

    integrTl.from(
        '.integr__line',
        {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        '-=0.4'
    );

    integrTl.from(
        '.integr__descr',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.3'
    );

    integrTl.from(
        '.integr__block',
        {
            y: 40,
            opacity: 0,
            duration: 0.8,
        },
        '-=0.2'
    );

    document.querySelectorAll('.integr__item').forEach((item) => {
        const itemTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 90%', 
                toggleActions: 'play none none none',
            },
            defaults: { ease: 'power2.out', duration: 0.6 }
        });

        itemTl.from(item.querySelector('.integr__item-icon'), {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
        }, 0);

        itemTl.from(
            item.querySelector('.integr__item-descr'),
            {
                y: 20,
                opacity: 0,
            },
            0.3 
        );
    });

    const enablesTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.enables__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    enablesTl.from('.enables__image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.0,
        ease: 'back.out(1.2)',
    });

    enablesTl.from(
        '.enables__title',
        {
            y: 30,
            opacity: 0,
            duration: 0.8,
        },
        '-=0.4'
    );

    enablesTl.from(
        '.enables__icon',
        {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
            ease: 'power2.inOut',
        },
        '-=0.4'
    );

    enablesTl.from(
        '.enables__descr',
        {
            y: 20,
            opacity: 0,
        },
        '-=0.3'
    );

    enablesTl.from(
        '.enables__block',
        {
            y: 40,
            opacity: 0,
            duration: 0.8,
        },
        '-=0.2'
    );

    const bannerTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.banner__inner',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out', duration: 0.7 }
    });

    bannerTl.from('.banner__inner', {
        y: 30,
        opacity: 0,
        duration: 1.0,
    }, 0); 

    bannerTl.from(
        '.banner__icon',
        {
            x: -40,
            opacity: 0,
            duration: 0.8,
        },
        0
    );

    bannerTl.from(
        '.banner__title',
        {
            x: -40,
            opacity: 0,
            duration: 0.8,
        },
        0.2
    );

    bannerTl.from(
        '.banner__descr',
        {
            y: 20,
            opacity: 0,
            duration: 0.8,
        },
        0.4
    );


    document.querySelectorAll('.aboutinfo').forEach((section) => {
        
        const innerSection = section.querySelector('.aboutinfo__inner');
        
        if (!innerSection) {
            return;
        }

        const aboutinfoItemTl = gsap.timeline({
            scrollTrigger: {
                trigger: section, 
                start: 'top 80%', 
                toggleActions: 'play none none none',
            },
            defaults: { ease: 'power2.out', duration: 0.7 } 
        });

        aboutinfoItemTl.from(innerSection.querySelector('.aboutinfo__top-image'), {
            y: 20,
            opacity: 0,
            duration: 0.8,
        });

        aboutinfoItemTl.from(
            innerSection.querySelector('.aboutinfo__top-title'),
            {
                y: 20,
                opacity: 0,
                duration: 0.8,
            },
            '-=0.5' 
        );

        aboutinfoItemTl.from(
            innerSection.querySelector('.aboutinfo__top-icon'),
            {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 0.8,
                ease: 'power2.inOut',
            },
            '-=0.4'
        );

        aboutinfoItemTl.from(
            innerSection.querySelector('.aboutinfo__name'),
            {
                y: 20,
                opacity: 0,
            },
            '-=0.3'
        );

        aboutinfoItemTl.from(
            innerSection.querySelectorAll('.aboutinfo__list li'),
            {
                y: 15,
                opacity: 0,
                stagger: 0.15,
                duration: 0.5,
            },
            '-=0.2'
        );

        aboutinfoItemTl.from(
            innerSection.querySelector('.aboutinfo__btn'),
            {
                y: 20,
                opacity: 0,
                ease: 'back.out(1.2)',
            },
            '-=0.3'
        );
    });
});


document.addEventListener('DOMContentLoaded', () => {
	const whoisitItems = document.querySelectorAll('.technology__item-content')
	const whoisitGroup1 = [whoisitItems[0], whoisitItems[2]]
	const whoisitGroup2 = [whoisitItems[1], whoisitItems[3]]
	let showGroup1 = true
	function toggleGroups() {
		if (showGroup1) {
			whoisitGroup1.forEach((el) => el.classList.add('active'))
			whoisitGroup2.forEach((el) => el.classList.remove('active'))
		} else {
			whoisitGroup2.forEach((el) => el.classList.add('active'))
			whoisitGroup1.forEach((el) => el.classList.remove('active'))
		}
		showGroup1 = !showGroup1
	}
	toggleGroups()
	setInterval(toggleGroups, 1500)

	const heroIcons = document.querySelector('.hero__icons')
	if (heroIcons) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animated')
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.9,
			}
		)
		observer.observe(heroIcons)
	}
})


document.addEventListener('DOMContentLoaded', () => {

    const breakpoint = 768;
    const mediaQueryLarge = window.matchMedia(`(min-width: ${breakpoint + 1}px)`);
    const mediaQuerySmall = window.matchMedia(`(max-width: ${breakpoint}px)`);

    function setupGroupToggle(selector, group1Indices, group2Indices, minElements) {
        const items = document.querySelectorAll(selector);
        
        if (items.length < minElements) return; 

        const group1 = group1Indices.map(index => items[index]).filter(el => el != null);
        const group2 = group2Indices.map(index => items[index]).filter(el => el != null);

        if (group1.length === 0 || group2.length === 0) return;
        
        let showGroup1 = true;
        let intervalId = null;

        function toggleGroups() {
            if (showGroup1) {
                group1.forEach((el) => el.classList.add('active'));
                group2.forEach((el) => el.classList.remove('active'));
            } else {
                group2.forEach((el) => el.classList.add('active'));
                group1.forEach((el) => el.classList.remove('active'));
            }
            showGroup1 = !showGroup1;
        }

        function handleMediaQueryChange(e) {
            if (e.matches) {
                if (intervalId === null) {
                    showGroup1 = true; 
                    toggleGroups(); 
                    intervalId = setInterval(toggleGroups, 1500);
                }
            } else {
                if (intervalId !== null) {
                    clearInterval(intervalId);
                    intervalId = null;
                    [...group1, ...group2].forEach((el) => el.classList.remove('active'));
                }
            }
        }
        
        mediaQueryLarge.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQueryLarge);
    }
    
    setupGroupToggle('.keycap__item-content', [0, 3, 5], [1, 2, 4], 6);
    setupGroupToggle('.enables__item-content', [0, 2, 4], [1, 3], 5);
    setupGroupToggle('.technology__item-content', [0, 2], [1, 3], 4);


    let keycapSlider = null;
    let enablesSlider = null;
    let technologySlider = null;

    function handleSliderInit(selector, paginationSelector, currentSlider) {
        const isMobile = mediaQuerySmall.matches;

        if (isMobile) {
            if (!currentSlider) {
                currentSlider = new Swiper(selector, {
                    loop: false,
                    spaceBetween: 17,
                    slidesPerView: 2,
                    allowTouchMove: true,
                    pagination: {
                        el: paginationSelector,
                        clickable: true,
                    },
                    ...(selector === '.technology__slider' ? {} : {})
                });
            }
        } else {
            if (currentSlider) {
                currentSlider.destroy(true, true);
                currentSlider = null;
            }
        }
        return currentSlider;
    }

    function updateSlidersOnResize() {
        keycapSlider = handleSliderInit('.keycap__slider', '.keycap__slider-pagination', keycapSlider);
        enablesSlider = handleSliderInit('.enables__slider', '.enables__slider-pagination', enablesSlider);
        technologySlider = handleSliderInit('.technology__slider', '.technology__slider-pagination', technologySlider);
    }
    
    mediaQuerySmall.addListener(updateSlidersOnResize);
    updateSlidersOnResize();

});

window.addEventListener('load', updateKeycapContentPlacement);
window.addEventListener('resize', updateKeycapContentPlacement);
function updateKeycapContentPlacement() {
    const innerContainer = document.querySelector('.keycap__inner');
    const swiperWrapper = document.querySelector('.keycap__slider .swiper-wrapper');
    const contentBlock = document.querySelector('.keycap__content');
    if (!innerContainer || !swiperWrapper || !contentBlock) {
        return;
    }
    const isMobileWidth = window.innerWidth < 769;
    if (isMobileWidth) {
        if (contentBlock.parentElement !== innerContainer) {
            innerContainer.prepend(contentBlock);
        }
    } else {
        const thirdPositionElement = swiperWrapper.children[2];

        if (contentBlock.parentElement !== swiperWrapper || contentBlock !== thirdPositionElement) {
            if (thirdPositionElement) {
                swiperWrapper.insertBefore(contentBlock, thirdPositionElement);
            } else {
                swiperWrapper.appendChild(contentBlock);
            }
        }
    }
}







document.addEventListener("DOMContentLoaded", () => {
  const popupButtons = document.querySelectorAll("[data-popup-open]");
  const popups = document.querySelectorAll(".popup");

  popupButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); 
        document.querySelector('.header').classList.remove('show-menu')
        const target = btn.getAttribute("data-popup-open");
        const popup = document.querySelector(`.popup[data-popup="${target}"]`);
        if (popup) {
            popup.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    });
  });

  popups.forEach(popup => {
    const inner = popup.querySelector(".popup__inner");
    const closeBtn = popup.querySelector(".popup__close");

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        popup.classList.remove("active");
        document.body.style.overflow = "";
    });

    popup.addEventListener("click", (e) => {
        if (!inner.contains(e.target)) {
            e.preventDefault(); 
            popup.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
  });
});


$(document).ready(function () {
    $('.faq__item-title').on('click', function () {
        let parent = $(this).closest('.faq__item');
        let content = parent.find('.faq__item-descr');
        if (parent.hasClass('active')) {
            parent.removeClass('active');
            content.stop(true, true).slideUp(300);
        } else {
            $('.faq__item.active').removeClass('active')
                .find('.faq__item-descr').slideUp(300);

            parent.addClass('active');
            content.stop(true, true).slideDown(300);
        }
    });
});

const selects = document.querySelectorAll(".custom-select");
selects.forEach((select) => {
  const trigger = select.querySelector(".custom-select-selected");
  const options = select.querySelectorAll(".custom-select-option");
  const span = trigger.querySelector("span");
  trigger.addEventListener("click", () => {
    selects.forEach((s) => s !== select && s.classList.remove("active"));
    select.classList.toggle("active");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
      span.textContent = option.textContent;
      select.classList.remove("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".popup__form");

  forms.forEach(form => {
    const inputs = form.querySelectorAll("input, textarea");
    const checkbox = form.querySelector('input[name="agreed"]');
    const customSelects = form.querySelectorAll(".custom-select[data-required]");
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        clearError(input);
      });
    });
    form.querySelectorAll('input[name="name"]').forEach(input => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
        clearError(input);
      });
    });

    form.querySelectorAll('input[name="phone"]').forEach(input => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 15);
        clearError(input);
      });
    });

    customSelects.forEach(select => {
      const selectedSpan = select.querySelector(".custom-select-selected span");
      const hiddenInput = select.querySelector('input[type="hidden"]');

      select.querySelectorAll(".custom-select-option").forEach(option => {
        option.addEventListener("click", () => {
          const value = option.textContent.trim();
          selectedSpan.textContent = value;
          if (hiddenInput) hiddenInput.value = value;
          select.classList.add("selected");
          clearError(select);
        });
      });
    });
    if (checkbox) {
      checkbox.addEventListener("change", () => {
        const block = checkbox.closest(".popup__form-agree");
        if (block) block.classList.toggle("error", !checkbox.checked);
      });
    }
    form.addEventListener("submit", e => {
      e.preventDefault();
      let isValid = true;
      form.querySelectorAll(".popup__form-error.active").forEach(el => el.classList.remove("active"));
      form.querySelectorAll(".popup__form-block.error").forEach(el => el.classList.remove("error"));
      if (checkbox?.closest(".popup__form-agree")) {
        checkbox.closest(".popup__form-agree").classList.remove("error");
      }

      inputs.forEach(input => {
        if (input.type === "checkbox") return;

        const value = input.value.trim();
        const block = input.closest(".popup__form-block") || input.closest(".popup__form-agree");
        const error = block?.querySelector(".popup__form-error");

        if (input.hasAttribute("required") && !value) {
          showError(block, error);
          isValid = false;
          return;
        }

        if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          showError(block, error);
          isValid = false;
        }

        if (input.type === "tel" && value && (value.length < 6 || value.length > 15)) {
          showError(block, error);
          isValid = false;
        }
      });
      customSelects.forEach(select => {
        const selectedText = select.querySelector(".custom-select-selected span").textContent.trim();
        const placeholder = select.querySelector(".custom-select-selected span").dataset.placeholder || "Service Requested";
        const block = select.closest(".popup__form-block");
        const error = block?.querySelector(".popup__form-error");

        if (selectedText === placeholder || !select.classList.contains("selected")) {
          showError(block, error);
          isValid = false;
        }
      });
      if (checkbox && !checkbox.checked) {
        checkbox.closest(".popup__form-agree").classList.add("error");
        isValid = false;
      }
      if (isValid) {
        alert("Форма успешно отправлена!");
        console.log("Form data:", Object.fromEntries(new FormData(form)));
      }
    });
  });
  function clearError(el) {
    const block = el.closest(".popup__form-block") || el.closest(".popup__form-agree");
    const error = block?.querySelector(".popup__form-error");
    if (error) error.classList.remove("active");
    if (block) block.classList.remove("error");
  }
  function showError(block, errorEl) {
    if (block) block.classList.add("error");
    if (errorEl) errorEl.classList.add("active");
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu ul');
    const closeButton = document.querySelector('.header__menu-close');
    if (burger) {
        burger.addEventListener('click', () => {
            header.classList.toggle('show-menu');
        });
    }
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            header.classList.remove('show-menu');
        });
    }
    document.addEventListener('click', (event) => {
        const isClickInsideHeader = header.contains(event.target);
        const isClickOnBurger = burger && burger.contains(event.target);
        if (header.classList.contains('show-menu') && !isClickInsideHeader) {
            header.classList.remove('show-menu');
        }
        if (menu && menu.contains(event.target) && event.target.tagName === 'A') {
            header.classList.remove('show-menu');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const selectTops = document.querySelectorAll('.buy__form-select-top');
    selectTops.forEach(selectTop => {
        selectTop.addEventListener('click', function() {
            const selectContainer = this.closest('.buy__form-select');
            if (selectContainer) {
                selectContainer.classList.toggle('active');
            }
        });
    });

    document.addEventListener('click', function(event) {
        selectTops.forEach(selectTop => {
            const selectContainer = selectTop.closest('.buy__form-select');
            if (selectContainer && !selectContainer.contains(event.target)) {
                 selectContainer.classList.remove('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.howinteg__select-btn');
    const contentBlocks = document.querySelectorAll('.howinteg__result');
    if (buttons.length !== contentBlocks.length) {
        return;
    }
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            contentBlocks.forEach(content => content.classList.remove('active'));
            contentBlocks[index].classList.add('active');
        });
    });
});



const solutionsItems = document.querySelectorAll('.solutions-item');

solutionsItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      const isClicked = item.classList.contains('solutions-item-clicked');
      
      solutionsItems.forEach(i => i.classList.remove('solutions-item-clicked'));

      if (!isClicked) {
        item.classList.add('solutions-item-clicked');
      }
    }
  });
});

(function() {
    let animationFrame;
    let userInteracting = false;
    let iconsBlock;
    let singleSetWidth;
    let scrollPosition = 0;
    let originalContent = '';
    let isScrolling = false;

    function startScroll() {
        if (!userInteracting) {
            scrollPosition += 0.3;
            if (scrollPosition >= singleSetWidth) scrollPosition -= singleSetWidth;    
            iconsBlock.scrollLeft = scrollPosition;
        }
        animationFrame = requestAnimationFrame(startScroll);
    }
    function pauseScroll() { 
        userInteracting = true; 
        cancelAnimationFrame(animationFrame); 
        animationFrame = null;
    }
    function resumeScroll() { 
        userInteracting = false; 
    
        if (iconsBlock) {
            scrollPosition = iconsBlock.scrollLeft; 
        }
        if (!animationFrame) {
            startScroll(); 
        }
    }
    function resetScroll() {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
        scrollPosition = 0;
        if (iconsBlock && originalContent) {
            iconsBlock.innerHTML = originalContent;
        }
        removeEvents();
        isScrolling = false;
    }

    function removeEvents() {
        if (!iconsBlock) return;
        iconsBlock.removeEventListener('touchstart', pauseScroll);
        iconsBlock.removeEventListener('touchend', resumeScroll);
        iconsBlock.removeEventListener('mouseenter', pauseScroll);
        iconsBlock.removeEventListener('mouseleave', resumeScroll);
    }

    function initScroll() {
        iconsBlock = document.querySelector('.hero__icons-block');
        if (!iconsBlock) return;

        if (!originalContent) originalContent = iconsBlock.innerHTML;

        resetScroll();

        if (window.innerWidth < 768) {
            iconsBlock.innerHTML = originalContent + originalContent;
            scrollPosition = iconsBlock.scrollLeft;
            singleSetWidth = iconsBlock.scrollWidth / 2;

            if (!isScrolling) {
                startScroll();
                isScrolling = true;
            }

            iconsBlock.addEventListener('touchstart', pauseScroll);
            iconsBlock.addEventListener('touchend', resumeScroll);
            iconsBlock.addEventListener('mouseenter', pauseScroll);
            iconsBlock.addEventListener('mouseleave', resumeScroll);
        }
    }

    document.addEventListener('DOMContentLoaded', initScroll);
    window.addEventListener('load', initScroll);
    window.addEventListener('resize', initScroll);
})();

