let loaded = false;
function scrolling() {
    let heroElement = document.getElementById("hero-text");
    if(window.scrollY > 90 && loaded == false) {
        heroElement.style.opacity = "1";
            $(document).ready(function() {
                $("#hero-text").animate({bottom: '2em'}, "slow");
                console.log($(window).width());
            });
            loaded = true;
        }
        
        if(window.scrollY < 90 && loaded == true) {
            heroElement.style.opacity = "0";
            $(document).ready(function() {
                $("#hero-text").animate({bottom: '-2em'}, "fast");
            });
            loaded = false;
        }
}