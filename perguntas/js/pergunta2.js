/* Questão 2: Responda as perguntas abaixo:
  a) Eu quero retornar “hey amy” mas o código abaixo está retornando “hey
  arnold”, por que? */
function greet (person) {
 if (person == { name: 'amy' }) {
 return 'hey amy'
 } else {
 return 'hey arnold'
 }
}
greet({ name: 'amy' })
/* Resposta:
  A cada vez que você cria um novo objeto, o JavaScript reserva um espaço para esse objeto na memória.
  Alguns bytes da memória do seu computador são reservados para guardar as informações desse novo objeto criado.
  E a cada novo objeto criado, um novo espaço na memória é ocupado.
  O que eu quero dizer é que, sempre que você faz isso no seu código: {}; você está criando um novo objeto.
  Com isso, o resultado do exemplo acima deu false, porque são duas variáveis diferentes! Cada um foi criado em um espaço
  diferente da memória!
  Solução: ao invés de usar person == { name: 'amy' } vamos usar person.name == 'amy', pois persom.nome
  é um valor do tipo string sendo comparada com outra string, no caso, "amy". Segue o código abaixo: */
function greet (person) {
 if (person.name == 'amy') {
 return console.log('hey amy')
 } else {
 return console.log('hey arnold')
 }
}
greet({ name: 'amy' });

// B)Eu quero chamar a função bark() de Dog, porém eu recebo um erro. Por que?
function Dog (name) {
 this.name = name
}
Dog.bark = function () {
 console.log(this.name + ' says woof');
}
let fido = new Dog('fido')
fido.bark()
/* Resposta: O que o código está tentando fazer quando faz fido.bark() é executar uma função com outra função,
 desse modo, o código não vai funcionar.Para executar no es5 temos que colocar dog.prototype.bark. para
  executar do forma que está escrita,vamos usar es6, é necessário transformar
 Dog em uma classe com o método Bark. Segue abaixo o exemplo:  */
class Dog {
	constructor(name){
  	this.name = name
    }
   bark() {
    console.log(this.name + ' says woof');
	}
}
let fido = new Dog('fido');
fido.bark();
/* C) DESAFIO: Javascript é uma linguagem síncrona ou assíncrona? Explique para
  que serve “promises” em javascript e como podemos resolver-las (informe
  pelo menos duas formas)
  RESPOSTA: Sim, JavaScript usa comunicação assíncrona. Promise é um objeto usado para
  processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar
  disponível agora, no futuro ou nunca.
  Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
  Como a maioria das pessoas consomem promisses já criadas.
  Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar
  callbacks para uma função.
  Para resolver uma Promise podemos utilizar a função resolve, passando como parâmetro
  um valor que será acessível através de nossa Promise resolvida: */
  function request() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolvida");
        }, 5000);
    });
}

  /* Ou podemos usar o método then(), este possui dois argumentos, ambos são "call back functions",
   sendo uma para o sucesso e outra para o fracasso da promessa. */
  p.then(quandoRealizada, quandoRejeitada);

p.then(function(valor) {
   // sucesso
  }, function(motivo) {
  // rejeitada
});
  /* Bônus: Como podemos resolver um array de promises com javascript? Escreva
  um exemplo.
  Resposta: O método Promise.all(iterable), onde seja um objeto, como um Array ou String. Este método retorna
  uma única Promise que resolve quando todas as promises no argumento iterável forem
  resolvidas ou quando o iterável passado como argumento não contém promises.
  */

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
