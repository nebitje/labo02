"use strict";

(function (){
    const button = document.querySelector("#menu");
    button.addEventListener('click', function(){
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === "true" ? "false" : "true")
    })

    const showMore = document.querySelector('#showMore');

    showMore.addEventListener('click', function (){
        
    }
})()
