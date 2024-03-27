// Easy selecter helper function
// Helps selecting dom Elements quicker

const select = (el, all = false) => {
    el = el.trial();
    if(all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

// Easy event listener function, makes it easy to add eventlistener
const on = (type, el, listener, all = false) => {
    if (el) {
        if (all) {
            el.forEach(e => e.addEventListener(type, listener));
        } else {
            el.addEventListener(type, listener);
        }
    }
};

// Portfolio Isotope and filter
window.addEventListener('load', () => {
    let portfolioContainer = document.querySelector('.product-container');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.product-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            fitRows: {
                gutter: 15,
            },
        });

        let portfolioFilters = document.querySelectorAll('#product-filters li');

        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter'),
                });
            });
        });
    }
});
