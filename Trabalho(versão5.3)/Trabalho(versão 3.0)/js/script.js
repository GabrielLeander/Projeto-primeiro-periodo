function validarFormulario() {
    const denuncia = document.getElementById('denuncia').value;
    if (denuncia.trim() === '') {
        alert('Por favor, descreva a sua denúncia.');
        return false;
    }
    
    return true;
}
function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");
    if(pontos.style.display === "none"){
       pontos.style.display="inline";
       maisTexto.style.display="none"
       btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
       maisTexto.style.display="inline"
       btnLeiaMais.innerHTML="Leia Menos";
    }

}
