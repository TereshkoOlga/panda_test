(function() {
    'use strict';

    window.onload = function() {

        function eventBinder() {
            document.querySelector('.js-show-popup').addEventListener("click", function(){
                showPopup();
            });
            document.querySelector('.js-close-popup').addEventListener("click", function(){
                hidePopup();
            });
            document.querySelector('.js-hamburger').addEventListener("click", function(){
                switchMobileMenu(this);
            });
        }

        function  showPopup(){
            document.querySelector('.js-popup-trial').style.display="block"
        }

        function  hidePopup(){
            document.querySelector('.js-popup-trial').style.display="none"
        }

        function clickTabs() {
            var setTabsLinks = document.querySelectorAll('.js-features-list li'),
                setTabsContent = document.querySelectorAll('.js-features-blocks .features-content');

            for (var i=0; i < setTabsLinks.length; i++) {
                setTabsLinks[i].onclick = function () {
                    for (var i=0; i < setTabsLinks.length; i++) {
                        setTabsLinks[i].classList.remove('active');
                    }
                    for (var i=0; i < setTabsContent.length; i++) {
                        setTabsContent[i].classList.remove('active-content');
                    }

                    var currentLink = this.getAttribute('data-tab');
                    this.classList.add("active");

                    document.querySelector('[data-content=' + currentLink + ']').classList.add("active-content");
                };
            }
        }

        function switchMobileMenu(self) {
            self.classList.toggle('open');
        }

        eventBinder();
        clickTabs();
    }

})();