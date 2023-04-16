/*************  navegação das imagens do café - click  **************/

function initTabNav(){

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');

        function activeTab (index) {
            tabContent.forEach(section =>{
                section.classList.remove('ativo');
            }); 
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function(){
                activeTab(index);
            });
        });
    }
}

initTabNav();

/*************  accordion - FAQ  **************/

function initAccordion(){

    const accordinList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'

    if(accordinList.length){
        accordinList[0].classList.add(activeClass)
        accordinList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordinList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        });
    }
}

initAccordion();

/*************  Scroll suave  **************/

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior:'smooth',
            block: 'start'
        });

        /*
        Forma Alternativa

        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth",
        })
        */
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })

}

initScrollSuave();

/*************  Scroll Animação  **************/

function initAnimationScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    
    if(sections.length){
        let windowMetade = window.innerHeight * 0.6;
        function animaScroll(){
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible){
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }
        
        animaScroll();
        
        window.addEventListener('scroll', animaScroll);
        
    }

}

initAnimationScroll();


