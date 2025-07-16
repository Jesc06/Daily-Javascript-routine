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


//Method kapag yung button ay nasa loob ng loop sa madaling sabi madami at dumadami pa



    var modal = document.getElementById("Modal");
    var modalBackground = document.getElementById("ModalBg");
    var buttons = document.querySelectorAll(".ButtonRegister");
    var Close = document.getElementsByClassName("Close")[0];



       buttons.forEach(function(button){
           button.onclick = function(){
                modal.style.display = "flex";
                modalBackground.style.display = "flex";
           };
       });
    

      Close.onclick = function(){
        modal.style.display = "none";
        modalBackground.style.display = "none";
    }




