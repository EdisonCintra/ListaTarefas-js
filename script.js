function validar(){
    const nome = document.getElementById("tarefa");


    if (nome.value === ""){
        mostrarModal();

    }

}

function mostrarModal(){ // TA OKAY
    const modal = document.getElementById("modalID");
    modal.style.display = 'block';
}

function fecharModal(){
    const modal = document.getElementById("modalID");
    modal.style.display='none';

}



const buttonEnviar = document.getElementById("buttonEnviar");


//event
buttonEnviar.addEventListener("click", ()=>{
    validar();
})

