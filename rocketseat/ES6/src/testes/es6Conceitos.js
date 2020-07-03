class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin() {
        return this.Admin ? this.Admin : false
    }
}

class Admin extends Usuario {
    constructor(params) {
        super(params)
        this.Admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map(users => users.idade)

console.log(idades)

// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usersMaioresRocket = usuarios.filter(users => users.idade >= 18 && users.empresa === 'Rocketseat')

console.log(usersMaioresRocket)

// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const usersGoogle = usuarios.find(users => users.empresa === 'Google')

console.log(usersGoogle)

// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
// Resultado:
// [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]

const result = usuarios.map(users => {
    return { ...users, idade: users.idade * 2 }
}).filter(users => users.idade <= 50)

console.log(result)

// 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });

const arr = [1, 2, 3, 4, 5]

console.log(arr.map(item => item + 10))

// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

const usuario = { nome: 'Diego', idade: 23 }

const mostraIdade = (usuario => usuario.idade)

console.log(mostraIdade(usuario))

// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = ((nome = 'Diego', idade = 18) => {
//     return { nome, idade }
// })

// console.log(mostraUsuario(nome, idade))
// console.log(mostraUsuario(nome));

// 3.4
// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     })
// }

const promise = () => new Promise((resolve, reject) => resolve())

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

const { nome, endereco: { cidade, estado } } = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo(usuario) {
    let { nome, idade } = usuario
    return `${nome} tem ${idade} anos.`
}

// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:
// return `${nome} tem ${idade} anos.`;

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.

const arr2 = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr2

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

const soma = ((...params) => params.reduce((total, next) => total + next))

console.log(soma(1, 2, 3, 4, 5, 6)) // 21
console.log(soma(1, 2)) // 3

// A partir do objeto e utilizando o operador spread:
// const usuario = {
//  nome: 'Diego',
//  idade: 23,
//  endereco: {
//  cidade: 'Rio do Sul',
//  uf: 'SC',
//  pais: 'Brasil',
//  }
// };
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuarioX = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
}

let usuario2 = { ...usuarioX, nome: 'Gabriel' }
let usuario3 = { ...usuarioX, endereco: { cidade: 'Lontras' } }


console.log(usuario2)
console.log(usuario3)

// Converta o seguinte trecho de código utilizando Template Literals:
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
const usuarioy = 'Diego'
const idade = 23
console.log(`O usuário ${usuarioy} possui ${idade} anos`)

// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nomey = 'Diego'
const usuarioObj = {
 nomey,
 idade,
 cidade: 'Rio do Sul',
}

console.log(usuarioObj)

import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)

            console.log(response.data)
        } catch (error) {
            console.warn('Usuário não existe')
        }
    }
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)

            console.log(response.data)
        } catch (error) {
            console.warn('Repositório não existe')
        }
    }
}

Api.getUserInfo('diego3g')
Api.getUserInfo('diego3g124123')

Api.getRepositories('rocketseat/rocketseat.com.br')
Api.getRepositories('rocketseat/dslkvmskv')

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay()
    console.log('1s')
    await delay()
    console.log('2s')
    await delay()
    console.log('3s')
}
umPorSegundo();