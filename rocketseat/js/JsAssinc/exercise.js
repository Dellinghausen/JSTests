let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

buttonElement.onclick = pesquisarRepos

function pesquisarRepos() {
    listElement.innerHTML = ''
    let loadElement = document.createElement('li')
    let loadText = document.createTextNode('Carregando...')

    loadElement.appendChild(loadText)

    listElement.appendChild(loadElement)

    let user = inputElement.value
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then((response) => {
            let repos = response.data
            listElement.innerHTML = ''
            for (repo of repos) {
                let repoElement = document.createElement('li')
                let repoText = document.createTextNode(repo.name)

                repoElement.appendChild(repoText)

                listElement.appendChild(repoElement)
            }
        })
        .catch((error) => {
            listElement.innerHTML = ''
            if (error.response) {
                // Request made and server responded
                let errorElement = document.createElement('li')
                let errorText = document.createTextNode(error.response.data.message)
                console.log(error.response.data)

                errorElement.appendChild(errorText)

                listElement.appendChild(errorElement)
            } else if (error.request) {
                // The request was made but no response was received
                let errorElement = document.createElement('li')
                let errorText = document.createTextNode(error.request)

                errorElement.appendChild(errorText)

                listElement.appendChild(errorElement)
            } else {
                // Something happened in setting up the request that triggered an Error
                let errorElement = document.createElement('li')
                let errorText = document.createTextNode('Error', error.message)

                errorElement.appendChild(errorText)

                listElement.appendChild(errorElement)
            }
        })
}

// function checaIdade(idade) {
//     return new Promise((resolve, reject) => {
//         if (idade > 18) {
//             setTimeout(resolve("Maior que 18"), 2000)
//         } else {
//             setTimeout(reject("Menor que 18"), 2000)            
//         }
//     })
// }
// checaIdade(20)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })