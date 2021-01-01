/*
var nome = "Luan Rigaud";
var n1 = 9;
var n2 = 7;
var frase = "Gabriel é o melhor jogador de valorant da rua";
alert(nome + "tem" + idade + "anos");
alert(idade1 + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.tolowercase());
alert(frase.replace("Gabriel", "Luan"));
*/
/*
var lista = ["maça","pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));
*/
/*
var fruta = {nome: "Maça", cor: "verde"};
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var frutas = [{nome: "Maça", cor: "verde"}, {nome: "Uva", cor: "Roxa"},{nome: "Goiaba", cor: "verde/rosa"}];
console.log(frutas);
alert(frutas[2].cor);
*/
/*
var idade = prompt("Qual sua idade?");
if (idade < 18){
    alert("menor de idade");
}else{
    alert("maior de idade");
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count ++;
};
*/
/*
var count;
for(count = 0; count <= 5; count++){
alert(count);
};
*/
/*
var d = new Date();
alert(d);
alert(d.getMonth() + 1); getMonth começa a contar os meses de 0, para deixar certo sempre tem que ter o + 1
*/
/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
*/
/*
function setreplace(frase, nome, nome2){
    return frase.replace(nome, nome2);
    }
    alert(setreplace("gabriel é bom", "gabriel", "luan"));
*/
/*
var validar;
function validade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
validade(idade);
console.log(validar);
*/
/*
function botao(){
    alert("obrigado por apertar!")
}
*/
function botao(){
    document.getElementById("agradecimento").innerHTML = "obrigado! está é sua recompensa :D <b>CLIQUE AQUI!!</b>";
}
function redirecionar(){
    window.open("https://www.youtube.com/watch?v=xOgdaVoSuWg&list=RDxOgdaVoSuWg&start_radio=1"); //abre em janela diferente
    //window.location.href = "https://www.youtube.com/watch?v=xOgdaVoSuWg&list=RDxOgdaVoSuWg&start_radio=1"; abre na mesma janela 
}
function mousein(elemento){
    elemento.innerHTML = "já passou? obrigado!"
    //document.getElementById("mouse").innerHTML = "já passou? obrigado!"
    //alert("opa");
}
function mouseout(elemento){
    elemento.innerHTML = "passe o mouse aqui"
    //document.getElementById("mouse").innerHTML = "passe o mouse aqui"
}
function load(){
    alert("pagina carregada");
}
function change(elemento){
    console.log(elemento.value);
}