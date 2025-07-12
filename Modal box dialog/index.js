var modal = document.getElementById("Modal");
var button = document.getElementById("btn");
var closeBtn = document.getElementsByClassName("close")[0];


button.onclick = function(){
    modal.style.display = "flex";
}


closeBtn.onclick = function(){
    modal.style.display = "none"
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}