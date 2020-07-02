"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.Admin ? this.Admin : false;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(params) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, params);
    _this.Admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idades = usuarios.map(function (users) {
  return users.idade;
});
console.log(idades); // Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var usersMaioresRocket = usuarios.filter(function (users) {
  return users.idade >= 18 && users.empresa === 'Rocketseat';
});
console.log(usersMaioresRocket); // Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var usersGoogle = usuarios.find(function (users) {
  return users.empresa === 'Google';
});
console.log(usersGoogle); // Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
// Resultado:
// [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]

var result = usuarios.map(function (users) {
  return _objectSpread(_objectSpread({}, users), {}, {
    idade: users.idade * 2
  });
}).filter(function (users) {
  return users.idade <= 50;
});
console.log(result); // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
})); // 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // 3.3
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

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
} // Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:
// return `${nome} tem ${idade} anos.`;


console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); // A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.

var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr2[0],
    y = arr2.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
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

var usuarioX = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuarioX), {}, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread(_objectSpread({}, usuarioX), {}, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuario2);
console.log(usuario3);
