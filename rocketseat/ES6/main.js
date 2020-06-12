class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
    }
}

class TodoList extends List {
    constructor() {
        super()
        this.usuario = 'Teste'
    }

    mostrarUsuario() {
        console.log(this)
    }

}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = () => {
    MinhaLista.add('Novo todo')
    MinhaLista.mostrarUsuario()
}