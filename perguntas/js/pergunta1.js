new Vue({
  el:"#app",
  data: {
    value: null,
    error: "",
    result: []
  },
  methods: {
    // O código feito aqui é referente Questão 1, letra A
    primo(num){
     // Primeiro, vamos verificar se o numero digitado é "1", pois este numero
     // não é primo primo
     if(num!=1){
      for (let i = 2; i < num; i++)
        if (num % i == 0) return false;
      return num !== 1;
      }
  },
  verificaPrimo(){
    // Vamos iniciar a variável que vai receber o resultado como um objeto vazio, para zerar o resultado.
    this.result = [];
    // verifica se é número
    if(this.value == null){
      this.error = "Digite algum valor";
    }
    else if(!isNaN(this.value)){
      // verifica se é primo
      for(let i=1;i<= this.value ;i++){
        if (this.primo(i)) {
          this.result.push(i);
          this.error = "";
        }
      }
    }
    else this.error = "Insira um valor válido";
  // Ao final do processo, vamos adicionar null ao valor do campo input
  this.value = null;
}
}
})
