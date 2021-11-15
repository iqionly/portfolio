function about() {
    var element = document.getElementById('about');
    var headerOffset = window.screen.height/100*10;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}