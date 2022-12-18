
    //identificando os campos
   // var select = document.getElementById('lista');
   // var value = lista.options[lista.selectedIndex].value;

   var e = document.getElementById("lista");
   function onChange() {
       var value = e.value;
     
       console.log(value);
   }
   e.onchange = onChange;
   onChange();

function verificar (){

    if (e.value == 1){
        console.log ("tt");

    }else{
        console.log("se fodeu");
    }
}

















//movendo o botão para a direita
    function paradireita() {
        esquerda.hidden = true
        direita.hidden = false
    }
//movendo o botão para a  esquerda
    function paraesquerda() {
        esquerda.hidden = false
        direita.hidden = true
    }
    function login() {
        alert('obrigado '+ usuario.value)
    }
    
