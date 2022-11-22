let rbtn = document.getElementById("red");
let blbtn = document.getElementById("blue");
let bbtn = document.getElementById("black");
let bike = document.getElementById("bike");

rbtn.onclick = function(){
    bike.style.backgroundImage = "url(img/BMW1.png)";
}

blbtn.onclick = function(){
    bike.style.backgroundImage = "url(img/BMW2.png)";
}

bbtn.onclick = function(){
    bike.style.backgroundImage = "url(img/BMW3.png)";
}