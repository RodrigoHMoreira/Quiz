var total = 0;
var check = false;
var checkboxes = document.getElementsByTagName("input");


 function enviar(){
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
   document.getElementById("botao").disabled = true;
 };

function refazer(){
  document.getElementById("botao").disabled = false;
  total = 0;
  document.getElementById("visor").value = "";
};

function limpar(){
  for(var i=0, n=checkboxes.length;i<n;i++){
  checkboxes[i].checked = this.checked;
  };
};