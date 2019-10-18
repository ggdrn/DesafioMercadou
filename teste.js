let aux = this.b.value.split("");
// Esse for serve para pegar os valores de entrada que importa: (),{},[]
for(let i=0; i < aux.length;i++){
  if(aux[i] == "(" || aux[i] == "[" || aux[i] == "{")
    this.b.aux.push(aux[i]);
  else if(aux[i] == ")" || aux[i] == "]" || aux[i] == "}")
    this.b.aux.push(aux[i]);
}
// vamos verificar se foi inserido algum valor válido para o balaceamento
if(this.b.aux == "" || this.b.aux == null)
  this.b.error = "Digite um dado válido para o balaceamento";
// Vamos passar para o aux da função para deixar o códifo limpo, devido as operações que vamos fazer abaixo.
aux = this.b.aux;
// Vamos verificar se um pâmetro está fechado e atende as regars para se manter balanceado
if((aux[0] == "(" && aux[aux.length-1] == ")") || (aux[0] == "[" && aux[aux.length-1] == "]") || (aux[0] == "{" && aux[aux.length-1] == "}") ){
  this.b.result = "O dados inserido: "+this.b.value+" estão balanceados";
  this.b.error = "";
}else{
  this.b.error = "O dados inserido: "+this.b.value+" estão desbalanceados";
}
