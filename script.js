

//function validar() {
    //console.log(document.getElementById('lista').value);
  //}

function validar(el){
    const option = el.value
if (option === 'val1'){

    entrar.style='background-color: green ; color: white;'
                entrar.hidden=false
                esquerda.hidden=true
                direita.hidden=true
                console.log('entrar');


}else{
    entrar.hidden=true
                esquerda.hidden=false
                direita.hidden=true
   

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
        alert('obrigado ');
    }
    
