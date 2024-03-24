"use strict";

(function () {

    const button = document.querySelector("#menu");

    button.addEventListener('click', function () {
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === "true" ? "false" : "true")
        console.log(this)
    })

    const showMore = document.querySelector('#showMore');

    showMore.addEventListener('click', function () {
        this.parentElement.classList.toggle('limited');
        console.log(this)
    })

})()
