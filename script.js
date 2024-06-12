window.onload = function()
{
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