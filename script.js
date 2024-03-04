window.addEventListener("DOMContentLoaded", main);

function main() {

    let listname;
    let lists = [];




}

function criarListas(nome,tarefas){
    const name = document.getElementById("tarefaName").value
    const input = document.createElement("input")
    const divListas = document.createElement("div")
    const p = document.createElement("h1")
    const buttonsend = document.createElement("button")
    const buttondelete = document.createElement("button")
    const div_tarefas = document.getElementById("div_tarefas")

    const listul = document.createElement("ul");
    listul.style.maxWidth = "500px"

    input.setAttribute("placeholder", "Nome da Tarefa");
    input.setAttribute("id", "tarefa-valor")
    divListas.style.maxWidth = '300px';
    input.className = " col-12 form-control"
    buttonsend.className = "btn btn-primary col-12"
    buttonsend.innerText = "Adicionar Tarefas"
    buttondelete.className = "btn btn-danger col-12"
    buttondelete.innerText= "Deletar Tarefas"
    divListas.className = "card d-flex flex-row flex-wrap p-4 d-grid gap-3 align-items-center fs-3 m-auto mb-3"
    p.className = "col-12";
    p.innerHTML = name;

    divListas.append(p)
    divListas.append(input)
    divListas.append(buttonsend)
    divListas.append(buttondelete)
    divListas.append(listul)
    div_tarefas.append(divListas)


    buttonsend.onclick = () => {
        adicionarTarefas(listul)
    }

}

function adicionarTarefas(ul){
    console.log("deu certo")

    const tarefa_value = document.getElementById("tarefa-valor").value
    const li_tarefa = document.createElement("li")
    const divTarefasAdicionadas = document.createElement("div")
    const inputTarefa = document.createElement("input")
    const labelTarefa = document.createElement("label")
    tarefa_value.className = " fw-1"
    divTarefasAdicionadas.className = "container d-flex justify-content-center"
    inputTarefa.className = "form-check-input me-1"
    inputTarefa.setAttribute("type", "checkbox")
    labelTarefa.className = "form-check-label"
    li_tarefa.className = "list-group-item ms-2"
    li_tarefa.innerHTML = tarefa_value

    divTarefasAdicionadas.append(inputTarefa)
    divTarefasAdicionadas.append(labelTarefa)
    divTarefasAdicionadas.append(li_tarefa)
    ul.append(divTarefasAdicionadas)


}








