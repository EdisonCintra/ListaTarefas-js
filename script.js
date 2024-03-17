window.addEventListener("DOMContentLoaded", main);

function main() {
}

function addTarefa(lista, inputValorTarefa) {
    const valorInput = inputValorTarefa.value;
    const divValidation = lista.querySelector('.invalid-feedback');

    if (valorInput) {
        const labelTarefa = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        const buttonDel = document.createElement("button");

        buttonDel.className = "btn-close";
        labelTarefa.className = "border-2 border border-dark d-flex flex-row justify-content-center justify-content-evenly  align-items-center p-2 ";
        input.className = "form-check-input p-3";
        input.setAttribute("type", "checkbox");
        p.className = "text-break fs-1 mt-2";
        p.innerHTML = valorInput;

        labelTarefa.append(input);
        labelTarefa.append(p);
        labelTarefa.append(buttonDel);

        buttonDel.onclick = () => {
            labelTarefa.remove();
        };

        lista.append(labelTarefa);
        inputValorTarefa.value = "";

        if (divValidation) {
            divValidation.remove();
        }



        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]" )
        values.push({
            name : valorInput
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))






    } else {
        if (!divValidation) {
            const divValidation = document.createElement("div");
            divValidation.innerText = "Por favor, insira um valor para a tarefa.";
            divValidation.style.display = "block";
            divValidation.className = "invalid-feedback text-center";
            lista.append(divValidation);
        }
    }
}


function addLista() {
    const input = document.getElementById("valorLista");
    const listaNome = input.value.trim();

    const validationMessageDiv = document.getElementById("nomeListaValidationMessage");

    if (listaNome) {
        const div = document.createElement("div");
        div.className = "container border border-primary p-2 fw-bolder justify-content-start " +
                        "mb-3 col-12 col-sm-6 gap-2 d-flex flex-column";

        const taskName = document.createElement("p");
        taskName.innerHTML = listaNome;
        taskName.className = "text-center fs-3";

        const containerButtons = document.createElement("div");
        const btnAdd = document.createElement("button");
        const inputValorTarefa = document.createElement("input");
        inputValorTarefa.className = "form-control";

        btnAdd.className = "btn btn-primary col-6";
        btnAdd.innerHTML = "Adicionar Tarefa";
        btnAdd.onclick = () => {
            addTarefa(div, inputValorTarefa);
        };

        const btnDel = document.createElement("button");
        btnDel.className = "btn btn-danger col-6";
        btnDel.innerHTML = "Deletar Lista";
        btnDel.onclick = () => {
            div.remove();
        };

        containerButtons.className = "d-flex justify-content-around gap-1";
        containerButtons.append(btnAdd, btnDel);

        const container = document.getElementById("containerLista");

        div.append(taskName);
        div.append(inputValorTarefa);
        div.append(containerButtons);
        container.append(div);

        input.value = "";

        validationMessageDiv.style.display = "none";
    } else {
        validationMessageDiv.style.display = "block";
    }
}




function deletarTodasListas(){
    let listas = document.getElementById("containerLista");
    while (listas.firstChild) {
        listas.removeChild(listas.firstChild);
    }
}

const localStorageKey = 'to-do-list'

