function atjaunotIetvaru(which){
  document.getElementById("lapas_saturs").innerHTML = '<'+'object id="lapas" type="text/html" data="'+which.href+'"></'+'object>';
}

window.onload = function() {
  zimetuzcanva();
    var navLinks = document.querySelectorAll('.topnav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
function zimetuzcanva(){
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.strokeStyle = "green";
  ctx.fillRect(20, 20, 100, 100);  
}
function kascits(){
      var canvas = document.getElementById("zimejums");
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = "blue";
      ctx.strokeRect(30, 50, 100, 100);
}
function aplis(){
        var canvas = document.getElementById("zimejums"); 
  var konteksts = canvas.getContext("2d");
  konteksts.beginPath();
konteksts.arc(200, 200, 50, 0, 2 * Math.PI);
  konteksts. fillStyle = "red";
  konteksts. strokeStyle = "yelow";
  konteksts. lineWidth = 20;
  konteksts. fill();
      konteksts.stroke();
  
}

  function linija(){
    var canvas = document.getElementById("zimejums"); 
  var konteksts = canvas.getContext("2d");
  konteksts.beginPath();
   konteksts.moveTo(50, 300);
    konteksts.lineTo(250, 350);
    konteksts.loneWidth = 3;
    konteksts.strokeSyle = "green";
    konteksts.stroke();
  
}
function teksts(){
  var canvas = document.getElementById("zimejums"); 
var konteksts = canvas.getContext("2d");
konteksts.fonts = "100px Arial";
  konteksts.fillStyle = "blue";
  konteksts.fillText("Sveika pasaule!", 100, 300);
  konteksts.stroke();

}

function aprekins(){
  let vards=document.getElementById("vards").value;
  let pirmais = parseInt(document.getElementById("a").value);
  let otrais = parseInt(document.getElementById("b").value);
  if(!vards.match(/^\S[a-zA-Zā-žĀ-Ž]+$/)){
    alert("Lūdzu ievadiet vārdu!");
    return;
  }
  if(isNaN(pirmais) || isNaN(otrais)){
    alert("Lūdzu ievadiet skaitļus!");
    return;
  }
  if(!Number.isInteger(Number(pirmais)) || !Number.isInteger(Number(otrais))){
    alert("Ievādi veselo skaitli!");
    return;
  }
  let summa = pirmais * otrais;
  console.log("Tevi sauc: " + vards + " Atbilde ir: " + summa);
  document.getElementById("rezultats").innerHTML = "Tevi sauc: " + vards + "<br> Tu ievadiji a vertibu: " + pirmais + "<br> un otra vertiba: " + otrais + "<br> Atbilde ir: " + summa;
}
function myMap(){
   var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(55.872147, 26.523486), // Koordinātes, kur centrēt karti
    zoom: 10 // Mērogojuma līmenis
};
   var map = new google.maps.Map(mapCanvas, mapOptions);
  }
let age=32;
if(age<18){
  console.log("nav pilngadigs");}
else if(age>=18 && age<65){
  console.log("Pieaugušais");}
else{
  console.log("Pensionārs");}

for(let i=0; i<=10; i++){
  console.log(i);
  if(i==5){
  console.log("Atrasts");
}}