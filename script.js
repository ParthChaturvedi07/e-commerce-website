// Toggle reset Buttonn
function toggleResetBtn(){
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active');
}

// Switch left,middle and Right Part of Banner
function switchBanner(name){
    const Banner = document.querySelector('#banner');
        if(!Banner.classList.contains(name)){
            Banner.className = 'banner';
            Banner.classList.add(name);
            //whenever we switch the banner the button should toggle
            toggleResetBtn();
        }
        return;
    }

// Reset Button
function resetBanner(){
    const banner  =  document.querySelector('#banner');
    banner.className = 'banner';
    toggleResetBtn();
}

// Toggle .header-scrolled classs to #header when page is scrolled

const selectHeader = document.querySelector('#header');
const backToTop = document.querySelector('.back-to-top');
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled');
            backToTop.classList.add('active');
        } else {
            selectHeader.classList.remove('header-scrolled');
            backToTop.classList.remove('active');
        }
    };
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);
}

// Back to top of the page

function scrollToTop(){
    window.scrollToTop(0, 0);
}

// Function to scroll to a specific section
// const scrollToSection = (about) => {
//     const section = document.getElementById('about');
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// };

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

document.querySelector('.nav-about').addEventListener('click', () => {
    scrollToSection('about');
});

document.querySelector('.nav-shopping').addEventListener('click', () => {
    scrollToSection('products');
});

document.querySelector('.nav-contact').addEventListener('click', () => {
    scrollToSection('contact');
});
