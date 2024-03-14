window.addEventListener("DOMContentLoaded", main);

function main() {
}

//revisar ID!!!
function addTarefa() {
    const input = document.getElementById("valorTarefa")
    let valorInput = input.value;
    if (valorInput !== "") {
        const item = document.createElement('label');
        item.setAttribute("id", "item")
        item.className="border-2 border text-center justify-content-center border-dark d-flex align-items-center gap-4 p-2 ";
        item.innerHTML = `
            <input class="form-check-input p-3 mb-1 mt-3" type="checkbox">
            <div class="text-break">${valorInput}</div>
            <button type="button" class="btn-close" aria-label="Close" onclick="deletarTarefa()"></button>
        `;
        document.getElementById('todoList').appendChild(item);
        input.value = "";
        input.focus();
    }
}


//revisar ID!!!
function addLista() {
    const div = document.createElement("div")
    const input = document.getElementById("valorLista")
    div.style.maxWidth = "600px";
    div.innerHTML = `<div class="container border border-primary p-2 fw-bolder fs-1  justify-content-start
    mb-3 col-12 gap-2 d-flex flex-column" id='todoList'>
    <p class="mx-4 text-center">${input.value}</p>
    <input type="text" class="form-control" id="valorTarefa" aria-label="First name">
    <div class="d-flex flex-row justify-content-center d-grid gap-3">
        <button class="btn btn-primary col-5" onclick="addTarefa()">Adicionar Tarefa</button>
        <button class="btn btn-danger col-5" id="dell" onclick="deletarLista()">Deletar Lista</button>
    </div>
    </div>`
    document.getElementById("containerLista").appendChild(div)
    input.value = "";
    input.focus();
}


//revisar!!!
function deletarLista() {
    let tarefa = document.getElementById("todoList");
    tarefa.remove();
}

//revisar!!!
function deletarTarefa(botao) {
    let tarefa = document.getElementById("item")
    tarefa.remove();
}

function deletarTodasListas(){
    let listas = document.getElementById("containerLista");
    while (listas.firstChild) {
        listas.removeChild(listas.firstChild);
    }
}