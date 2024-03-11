window.addEventListener("DOMContentLoaded", main);

function main() {


    let banco = [];




}


const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.className="border-2  border border-dark d-flex gap-4 p-2 ";
    item.innerHTML = `
        <input class="form-check-input p-3 mb-1" type="checkbox" ${status} >
        <div>${tarefa}</div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;

    document.getElementById('todoList').appendChild(item);
}







