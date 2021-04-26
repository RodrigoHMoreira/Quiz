var total = 0;
var check = false;
var checkboxes = document.getElementsByTagName("input");


 function finish(){
   if(document.getElementById("Nicolau Maquiavel").checked){
     total = total + 10
   }if(document.getElementById("Pablo Picasso").checked){
     total = total + 10
   }if(document.getElementById("Ludwig van Beethoven").checked){
     total = total + 10
   }else{
      total = total
     };
   document.getElementById("visor").value = total
   document.getElementById("buttonFinish").disabled = true;
 };

function remake(){
  document.getElementById("buttonFinish").disabled = false;
  total = 0;
  document.getElementById("visor").value = "";
};

function clean(){
  for(var i=0, n=checkboxes.length;i<n;i++){
  checkboxes[i].checked = this.checked;
  };
};