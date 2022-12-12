
var imageArray = new Array(15);
for(let i = 0; i < imageArray.length; i++) {
    imageArray[i] = `./images/360/${i}.png`;
}
var slider = document.getElementById("viewing-angle");
var imageIndex = 0;
slider.oninput = function() {
    slider.style.animation = "none";
    imageIndex = slider.value;
    var nextImage = document.createElement("img");
    nextImage.setAttribute("class", "img-360");
    nextImage.src = imageArray[imageIndex];
    document.getElementsByClassName("slider-container")[0].replaceChild(nextImage, 
        document.getElementsByClassName("img-360")[0]);
}
