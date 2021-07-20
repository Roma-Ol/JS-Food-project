"use strict";

// Starting 2 load js after all the DOM tree loaded.
document.addEventListener('DOMContentLoaded', ()=>{

    // Variables we need.
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    // Hide all the unnecessary tabs.
    function hideTabContent() {
        tabsContent.forEach( item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    };

    // Show 1 necessary tab.
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    };
    hideTabContent();
    showTabContent();

    // Click event.
    tabsParent.addEventListener('click', (event) => {
        if (event.target && event.target.matches('div.tabheader__item')) {
             tabs.forEach((item, i) => {
                 if (event.target == item) {
                     hideTabContent();
                     showTabContent(i);
                 }
             })
        }
    });













});