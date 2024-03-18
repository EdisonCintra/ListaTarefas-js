function addLista() {
    const input = document.getElementById("valorLista");
    const listaNome = input.value.trim();

    const validationMessageDiv = document.getElementById("nomeListaValidationMessage");

    if (listaNome) {
        if (isListNameUnique(listaNome)){
            const container = document.getElementById("containerLista");
            const div = document.createElement("div");
            div.className = "lista container border border-primary p-2 fw-bolder justify-content-start mb-3 col-12 col-sm-6 gap-2 d-flex flex-column";

            const taskName = document.createElement("p");
            taskName.innerHTML = listaNome;
            taskName.className = "text-center fs-3 text-break";

            const containerButtons = document.createElement("div");
            const btnAdd = document.createElement("button");
            const inputValorTarefa = document.createElement("input");
            inputValorTarefa.className = "form-control";

            btnAdd.className = "btn btn-primary col-6";
            btnAdd.innerHTML = "Adicionar Tarefa";
            btnAdd.onclick = () => {
                addTarefa(div, inputValorTarefa, listaNome);
            };

            const btnDel = document.createElement("button");
            btnDel.className = "btn btn-danger col-6";
            btnDel.innerHTML = "Deletar Lista";
            btnDel.onclick = () => {
                div.remove();
                removeListFromLocalStorage(listaNome);
            };

            containerButtons.className = "d-flex justify-content-around gap-1";
            containerButtons.append(btnAdd, btnDel);

            div.append(taskName);
            div.append(inputValorTarefa);
            div.append(containerButtons);

            container.appendChild(div);

            input.value = "";

            validationMessageDiv.style.display = "none";

            saveListToLocalStorage(listaNome);
        } else {
            validationMessageDiv.innerText = "Já existe uma lista com este nome";
            validationMessageDiv.style.display = "block";
        }
    }else {
        validationMessageDiv.innerText = "Por favor, adicione um nome para a lista.";
        validationMessageDiv.style.display = "block";
    }

}

function addTarefa(div, inputValorTarefa, listaNome) {
    const valorInput = inputValorTarefa.value.trim();
    const divValidation = div.querySelector('.invalid-feedback');

    if (valorInput) {
        if (isTaskNameUnique(listaNome, valorInput)) {
            const labelTarefa = document.createElement("div");
            const input = document.createElement("input");
            const p = document.createElement("p");
            const buttonDel = document.createElement("button");

            buttonDel.className = "btn-close";
            labelTarefa.className = "border-2 border border-dark d-flex flex-row justify-content-center justify-content-evenly align-items-center p-2 ";
            input.className = "form-check-input p-3";
            input.setAttribute("type", "checkbox");
            p.className = "text-break fs-1 mt-2 text-break";
            p.innerHTML = valorInput;

            input.addEventListener('change', function() {
                if (this.checked) {
                    p.style.textDecoration = "line-through";
                } else {
                    p.style.textDecoration = "none";
                }
            });

            buttonDel.onclick = () => {
                labelTarefa.remove();
                removeTaskFromLocalStorage(listaNome, valorInput);
            };

            labelTarefa.appendChild(input);
            labelTarefa.appendChild(p);
            labelTarefa.appendChild(buttonDel);

            div.appendChild(labelTarefa);
            inputValorTarefa.value = "";

            if (divValidation) {
                divValidation.remove();
            }

            saveTaskToLocalStorage(listaNome, valorInput);
        } else {
            if (!divValidation) {
                const divValidation = document.createElement("div");
                divValidation.innerText = "Já existe uma tarefa com esse nome nesta lista.";
                divValidation.style.display = "block";
                divValidation.className = "invalid-feedback text-center";
                div.append(divValidation);
            }
        }
    } else {
        if (!divValidation) {
            const divValidation = document.createElement("div");
            divValidation.innerText = "Por favor, insira um valor para a tarefa.";
            divValidation.style.display = "block";
            divValidation.className = "invalid-feedback text-center";
            div.append(divValidation);
        }
    }
}


function saveListToLocalStorage(listaNome) {
    let lists = JSON.parse(localStorage.getItem('lists') || '[]');
    lists.push(listaNome);
    localStorage.setItem('lists', JSON.stringify(lists));
}

function saveTaskToLocalStorage(listaNome, valorInput) {
    let tasks = JSON.parse(localStorage.getItem(listaNome) || '[]');
    tasks.push({ name: valorInput });
    localStorage.setItem(listaNome, JSON.stringify(tasks));
}


function exibirTudoSalvoNaTela() {
    const container = document.getElementById("containerLista");
    container.innerHTML = "";

    const lists = JSON.parse(localStorage.getItem('lists') || '[]');

    lists.forEach(listaNome => {
        const tasks = JSON.parse(localStorage.getItem(listaNome) || '[]');

        const div = document.createElement("div");
        div.className = "lista container border border-primary p-2 fw-bolder justify-content-start mb-3 col-12 col-sm-6 gap-2 d-flex flex-column";

        const taskName = document.createElement("p");
        taskName.innerHTML = listaNome;
        taskName.className = "text-center fs-3 text-break";

        const inputValorTarefa = document.createElement("input");
        inputValorTarefa.className = "form-control";

        const containerButtons = document.createElement("div");
        containerButtons.className = "d-flex justify-content-around gap-1";

        const btnAdd = document.createElement("button");
        btnAdd.className = "btn btn-primary col-6";
        btnAdd.innerHTML = "Adicionar Tarefa";
        btnAdd.onclick = () => {
            addTarefa(div, inputValorTarefa, listaNome);
        };

        const btnDel = document.createElement("button");
        btnDel.className = "btn btn-danger col-6";
        btnDel.innerHTML = "Deletar Lista";
        btnDel.onclick = () => {
            div.remove();
            removeListFromLocalStorage(listaNome);
        };

        containerButtons.append(btnAdd, btnDel);
        div.appendChild(taskName);
        div.append(inputValorTarefa);
        div.appendChild(containerButtons);

        tasks.forEach(task => {
            const labelTarefa = document.createElement("div");
            const input = document.createElement("input");
            const p = document.createElement("p");
            const buttonDel = document.createElement("button");

            buttonDel.className = "btn-close";
            labelTarefa.className = "border-2 border border-dark d-flex flex-row justify-content-center justify-content-evenly align-items-center p-2 ";
            input.className = "form-check-input p-3";
            input.setAttribute("type", "checkbox");
            p.className = "text-break fs-1 mt-2 text-break";
            p.innerHTML = task.name;

            input.addEventListener('change', function() {
                // Verifica se o checkbox está marcado
                if (this.checked) {
                    p.style.textDecoration = "line-through";
                } else {
                    p.style.textDecoration = "none";
                }
            });

            buttonDel.onclick = () => {
                labelTarefa.remove();
                removeTaskFromLocalStorage(listaNome, task.name);
            };

            labelTarefa.appendChild(input);
            labelTarefa.appendChild(p);
            labelTarefa.appendChild(buttonDel);

            div.appendChild(labelTarefa);
        });

        container.appendChild(div);
    });
}


function removeTaskFromLocalStorage(listaNome, taskName) {
    let tasks = JSON.parse(localStorage.getItem(listaNome) || '[]');
    tasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem(listaNome, JSON.stringify(tasks));
}

function removeListFromLocalStorage(listaNome) {
    localStorage.removeItem(listaNome);
    let lists = JSON.parse(localStorage.getItem('lists') || '[]');
    lists = lists.filter(list => list !== listaNome);
    localStorage.setItem('lists', JSON.stringify(lists));
}

function removeAllListsFromLocalStorage() {
    localStorage.clear();
    exibirTudoSalvoNaTela()
}

function isListNameUnique(listaNome) {
    const lists = JSON.parse(localStorage.getItem('lists') || '[]');
    return !lists.includes(listaNome);
}

function isTaskNameUnique(listaNome, taskName) {
    const tasks = JSON.parse(localStorage.getItem(listaNome) || '[]');
    return !tasks.some(task => task.name === taskName);
}

document.addEventListener("DOMContentLoaded", function() {
    exibirTudoSalvoNaTela();
});
