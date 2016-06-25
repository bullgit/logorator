'use strict';
var imgPath = 'http://res.cloudinary.com/cloudyvj/image/upload/';
var version = 'v1466799358';
var config = 'w_120,c_scale,q_auto:eco,dpr_auto';
document.getElementById('input').addEventListener('input', function (e, x) {
    var val = e.srcElement.value;
    var imgHolder = document.querySelector('.images');
    imgHolder.innerHTML = '';
    var imgName = val.split('');
    var imgNeeded = imgName.length;
    for (var i = 0; i < imgNeeded; i++) {
        var rand = Math.floor(Math.random() * 4) + 1;
        var img = document.createElement('div');
        img.classList.add('img');
        if (imgName[i] === ' ') {
            img.style.background = 'url(' + imgPath + config + '/' + version + '/spacer.png)no-repeat center center / 80%';
            img.classList.add('space');
        } else {
            img.style.background = 'url(' + imgPath + config + '/' + version + '/' + imgName[i] + '_' + rand + '.png)no-repeat center center / 80%';
        }
        img.style.webkitAnimationDelay = i * 50 + 'ms';
        img.style.animationDelay = i * 50 + 'ms';
        imgHolder.appendChild(img);
    };
});