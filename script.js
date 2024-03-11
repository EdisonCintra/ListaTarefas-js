window.addEventListener("DOMContentLoaded", main);

function main() {

    let banco = [

    ];

    const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? []
    const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))

    const criarItem = (tarefa, status, indice) => {
        const item = document.createElement('label');
        item.style.maxWidth = '400px';
        item.className="border-2  border border-dark d-flex gap-4 p-2 ";
        item.innerHTML = `
        <input class="form-check-input p-3 mb-1" type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <button type="button" class="btn-close" data-indice=${indice} aria-label="Close"></button>
    `;

        document.getElementById('todoList').appendChild(item);
    }


    const limparTarefas = () => {
        const todoList = document.getElementById('todoList')

        while (todoList.firstChild){
            todoList.removeChild(todoList.lastChild)
        }
    }
    const atualizarTela = () => {
        limparTarefas()
        const banco = getBanco()
        banco.forEach( (item,indice ) => criarItem(item.tarefa, item.status, indice))
    }


    const inserirItem = (evento) => {
        const tecla = evento.key;
        const valor = evento.target.value
        if (tecla === "Enter"){
            const banco = getBanco()
            banco.push ({'tarefa' : valor, 'status' : ''})
            setBanco(banco)
            atualizarTela();
            evento.target.value = ''
        }
    }

    const removerItem = (indice) => {
        const banco = getBanco()
        banco.splice(indice, 1)
        setBanco(banco)
        atualizarTela()
    }

    const atualizarItem = (indice) =>{
        const banco = getBanco()
        banco[indice].status = banco[indice].status === '' ? 'checked' :  ''
        setBanco(banco)
        atualizarTela()

    }

    const clickItem = (evento) => {
        const elemento = evento.target

        if(elemento.type === "button"){
            const indice = elemento.dataset.indice
            removerItem(indice)
        }else if(elemento.type === "checkbox"){
            const indice = elemento.dataset.indice
            atualizarItem(indice)
        }
    }

    document.getElementById("valorTarefa").addEventListener('keypress', inserirItem)
    document.getElementById("todoList").addEventListener('click', clickItem)



    atualizarTela()


}




