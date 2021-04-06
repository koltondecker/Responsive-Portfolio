document.addEventListener('DOMContentLoaded', function() {

    const parallaxElems = document.querySelectorAll('.parallax');
    const collapsibleElems = document.querySelectorAll('.collapsible');

    M.Collapsible.init(collapsibleElems);
    M.Parallax.init(parallaxElems);


});