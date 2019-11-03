//menu up
window.onload = function(){
    var menuClick = $('.menuClick');
    menuClick.on('click', function(event) {
        event.preventDefault()
        $('.menu-dropdown').slideToggle();
    });
}