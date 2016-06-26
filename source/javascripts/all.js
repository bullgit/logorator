/*! bullgit logorator */
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

/*! bullgit badge.js v2*/
(function (size,image,url,alt) {
  var a = document.createElement('a');
  var img = document.createElement('img');
  a.href = url;
  img.src = image;
  img.alt = alt;

  a.style.position = 'fixed';
  a.style.bottom = 0;
  a.style.left = 0;
  a.style.backgroundColor = "white";
  a.style.height =  size;
  a.style.width = size;
  a.style.WebkitClipPath = "polygon(0 0, 0% 100%, 100% 100%)";
  a.style.clipPath = "polygon(0 0, 0% 100%, 100% 100%)";

  img.style.width = '60%';
  img.style.height = '60%';
  img.style.position = 'absolute';
  img.style.bottom = 0;
  img.style.left = 0;

  a.appendChild(img);
  document.documentElement.appendChild(a);

})("180px","https://bullg.it/media/vectors/bullgit-logo.svg","https://bullg.it","bullgit logo");
