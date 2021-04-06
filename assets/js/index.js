document.addEventListener('DOMContentLoaded', function() {

    const parallaxElems = document.querySelectorAll('.parallax');
    const collapsibleElems = document.querySelectorAll('.collapsible');
    var sideNavElems = document.querySelectorAll('.sidenav');
    

    M.Collapsible.init(collapsibleElems);
    M.Parallax.init(parallaxElems);
    M.Sidenav.init(sideNavElems);

});