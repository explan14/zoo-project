function changeImage(slideNumber) {
    var imgElement = document.getElementById('myImg');
    switch(slideNumber) {
        case 1: {
            imgElement.src = 'img_2228.jpg'
            break;
        }
        case 2: {
            imgElement.src = "img_1491_0.jpg"
            break;
        }
        case 3: {
            imgElement.src = "img_cat.jpg"
            break;
        }
    }
}