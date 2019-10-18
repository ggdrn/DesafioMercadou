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
    // Nessa questão, vamo usar uma variável auxiliar para guardar os valores refrentes ao esperados
    b: {
      value: null,
      error: "",
      result: [],
      aux: []
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
        return; // Usamos um return para interromper a função
      }

      // Inicair os valores como vazio
      this.b.result = [];
      this.b.aux = [];
      // Vamos usar uma variável auxiliar para deixar o código o limpo
      // o uso do split é para "quebrar" os caracteres que recebmos em um array.
      let aux = this.b.value.split("");
      // Vamos fazer um for coletar os valores válidos
      for(let i=0; i < aux.length;i++){
        if(aux[i] == "(" || aux[i] == "[" || aux[i] == "{")
          this.b.aux.push(aux[i]);
        else if(aux[i] == ")" || aux[i] == "]" || aux[i] == "}")
          this.b.aux.push(aux[i]);
      }
      // Agora, verificamos se foi inserido algum valor válido para o balaceamento
      if(this.b.aux == "" || this.b.aux == null){// se não, retornamos para o usário
        this.b.error = "Digite um dado válido para o balaceamento";
        return;
      }
      // A variável validate é responsável por informar se o dado irá está balanceado
      let validate = true;
      // Vamos usar um array para pegar o indice de cada dado válido para o balanceamento.
      // se não conter o dado esperado, o array valores negativos e comparar com seu par, que é referente
      // ao valor esperado ex: dado entrado foi ()[, no array vai ficar 0 1 2 -1 -1 -1. Se seu par comparado for
      // menor que 0, logo será -1, com isso, determinamos o balanceamento.
      let array = [];
      array[0] = this.b.aux.indexOf("(");
      array[1] = this.b.aux.indexOf(")");
      array[2] = this.b.aux.indexOf("[");
      array[3] = this.b.aux.indexOf("]");
      array[4] = this.b.aux.indexOf("{");
      array[5] = this.b.aux.indexOf("}");
      if (array[0] > array[1] && array[0] >= 0 && array[1] >= 0)
      	validate = false;
      else if ((array[0] >= 0 && array[1] < 0)||(array[1] >= 0 && array[0] < 0))
        validate = false;

      if (array[2] > array[3] && array[2] >= 0 && array[3] >= 0)
      	validate = false;
      else if ((array[2] >= 0 && array[3] < 0)||(array[3] >= 0 && array[2] < 0))
        validate = false;

      if (array[4] > array[5] && array[4] >= 0 && array[5] >= 0)
        validate = false;
      else if ((array[4] >= 0 && array[5] < 0)||(array[5] >= 0 && array[4] < 0))
        validate = false;

      if(validate){
        this.b.result = "O dado inserido: "+this.b.value+" está balanceado";
        this.b.error = "";
      }else
      	  this.b.error = "O dado inserido: "+this.b.value+" está desbalanceado";
      // No fim da operação, vamos zerar o input
      this.b.value = null;
    }
  }
})
