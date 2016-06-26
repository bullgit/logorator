<<<<<<< HEAD
"use strict";var imgPath="http://res.cloudinary.com/cloudyvj/image/upload/",version="v1466799358",config="w_120,c_scale,q_auto:eco,dpr_auto";document.getElementById("input").addEventListener("input",function(e){var t=e.srcElement.value,l=document.querySelector(".images");l.innerHTML="";for(var n=t.split(""),o=n.length,i=0;o>i;i++){var a=Math.floor(4*Math.random())+1,s=document.createElement("div");s.classList.add("img")," "===n[i]?(s.style.background="url("+imgPath+config+"/"+version+"/spacer.png)no-repeat center center / 80%",s.classList.add("space")):s.style.background="url("+imgPath+config+"/"+version+"/"+n[i]+"_"+a+".png)no-repeat center center / 80%",s.style.webkitAnimationDelay=50*i+"ms",s.style.animationDelay=50*i+"ms",l.appendChild(s)}}),function(e,t,l,n){var o=document.createElement("a"),i=document.createElement("img");o.href=l,i.src=t,i.alt=n,o.style.position="fixed",o.style.bottom=0,o.style.left=0,o.style.backgroundColor="white",o.style.height=e,o.style.width=e,o.style.WebkitClipPath="polygon(0 0, 0% 100%, 100% 100%)",o.style.clipPath="polygon(0 0, 0% 100%, 100% 100%)",i.style.width="60%",i.style.height="60%",i.style.position="absolute",i.style.bottom=0,i.style.left=0,o.appendChild(i),document.documentElement.appendChild(o)}("180px","https://bullg.it/media/vectors/bullgit-logo.svg","https://bullg.it","bullgit logo");
=======
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
>>>>>>> cc1b8193a7617f846c14b6dc4336d81a431dc529
