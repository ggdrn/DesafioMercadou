new Vue({
  el:"#app",
  data: {
    // o objeto 'a', refere as variáveis usadas para resolver a pergunta 1, A
    a: {
      value: null,
      error: "",
      result: []
    },
    // o objeto 'b', refere as variáveis usadas para resolver a pergunta 1, B
    b: {
      value: null,
      error: "",
      result: []
    },
    // o objeto 'c', refere as variáveis usadas para resolver a pergunta 1, C
    c: {
      value: null,
      error: "",
      result: []
    }
  },
  methods: {
    // O código feito aqui é referente Questão 1, letra A
    primo(value){
     // Primeiro, vamos verificar se o numero digitado é "1", pois este numero
     // não é primo
     if(value!=1){
      for (let i = 2; i < value; i++)
        if (value % i == 0) return false;
      return value !== 1;
      }
  },
  verificaPrimo(){
    // Vamos iniciar a variável que vai receber o resultado como um objeto vazio, para zerar o resultado.
    this.a.result = [];
    // verifica se é nulo
    if(this.a.value == null){
      this.a.error = "Digite algum valor";
    }
    // verifica se é um numero
    else if(!isNaN(this.a.value)){
      // verifica se é primo
      for(let i=1;i<= this.a.value ;i++){
        if (this.primo(i)) {
          this.a.result.push(i);
          this.a.error = "";
        }
      }
    }
    else this.a.error = "Insira um valor válido";
    // Ao final do processo, vamos adicionar null ao valor do campo input, para limpar a entrada
    this.a.value = null;
    },
    // O código feito até aqui é referente Questão 1, letra B
    balaceamento(){
      if(this.b.value == null){
        this.b.error = "Digite algum valor";
      }
      this.b.result = [];
      let aux = this.b.value.split("");
      for(let i=0;i<= aux.length;i++){
        if(aux[i] == "(")
          if(aux[i+1] == "[")
            if(aux[i+2] == "{")
              this.b.result = "Balanceado";

      }
    }
  }
})
