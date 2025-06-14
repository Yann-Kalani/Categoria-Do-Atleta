let form = document.getElementById ("formulario");
const categoriaAdultoMasterMasculino = [
    {nome: "Galo", maxPeso: 57.5},
    {nome: "Pluma", maxPeso: 64.0},
    {nome: "Pena", maxPeso: 70.0},
    {nome: "Leve", maxPeso: 76.0},
    {nome: "Médio", maxPeso: 82.3},
    {nome: "Meio-Pesado", maxPeso: 88.3},
    {nome:"Pesado", maxPeso: 94.3},
    {nome:"Super-Pesado", maxPeso: 100.5},
    {nome:"Pesadíssimo",maxPeso: Infinity}
];
const categoriaAdultoMasterFeminino = [
    {nome: "Galo", maxPeso: 48.5},
    {nome: "Pluma", maxPeso: 53.5},
    {nome: "Pena", maxPeso: 58.5},
    {nome: "Leve", maxPeso: 64.0},
    {nome: "Médio", maxPeso: 69.0},
    {nome: "Meio-Pesado", maxPeso: 74.0},
    {nome:"Pesado", maxPeso: 79.3},
    {nome:"Super-Pesado", maxPeso: Infinity}
]
const categoriaJuvenilMasculino = [
    {nome: "Galo", maxPeso: 53.5},
    {nome: "Pluma", maxPeso: 58.5},
    {nome: "Pena", maxPeso: 64.0},
    {nome: "Leve", maxPeso: 69.0},
    {nome: "Médio", maxPeso: 74.0},
    {nome: "Meio-Pesado", maxPeso: 79.3},
    {nome:"Pesado", maxPeso: 84.3},
    {nome:"Super-Pesado", maxPeso: 89.3},
    {nome:"Pesadíssimo",maxPeso: Infinity}
]
const categoriaJuvenilFeminino = [
    {nome: "Galo", maxPeso: 44.3},
    {nome: "Pluma", maxPeso: 48.3},
    {nome: "Pena", maxPeso: 52.5},
    {nome: "Leve", maxPeso: 56.5},
    {nome: "Médio", maxPeso: 60.5},
    {nome: "Meio-Pesado", maxPeso: 65.0},
    {nome:"Pesado", maxPeso: 69.0},
    {nome:"Super-Pesado", maxPeso: Infinity},
]
const categoriaPreMirim1 = [
    {nome: "Galo", maxPeso: 12},
    {nome: "Pluma", maxPeso: 14.7},
    {nome: "Pena", maxPeso: 18},
    {nome: "Leve", maxPeso: 21},
    {nome: "Médio", maxPeso: 24},
    {nome: "Meio-Pesado", maxPeso: 27},
    {nome:"Pesado", maxPeso: 30},
    {nome:"Super-Pesado", maxPeso: 33},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const categoriaPreMirim2 = [
    {nome: "Galo", maxPeso: 14.7},
    {nome: "Pluma", maxPeso: 17.9},
    {nome: "Pena", maxPeso: 20},
    {nome: "Leve", maxPeso: 24},
    {nome: "Médio", maxPeso: 26},
    {nome: "Meio-Pesado", maxPeso: 29},
    {nome:"Pesado", maxPeso: 32},
    {nome:"Super-Pesado", maxPeso: 35},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const categoriaPreMirim3 = [
    {nome: "Galo", maxPeso: 17.9},
    {nome: "Pluma", maxPeso: 18.9},
    {nome: "Pena", maxPeso: 22},
    {nome: "Leve", maxPeso: 25},
    {nome: "Médio", maxPeso: 28},
    {nome: "Meio-Pesado", maxPeso: 31.2},
    {nome:"Pesado", maxPeso: 34.2},
    {nome:"Super-Pesado", maxPeso: 37.2},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const categoriaMirim1 = [
    {nome: "Galo", maxPeso: 18.2},
    {nome: "Pluma", maxPeso: 21},
    {nome: "Pena", maxPeso: 24},
    {nome: "Leve", maxPeso: 27},
    {nome: "Médio", maxPeso: 30.2},
    {nome: "Meio-Pesado", maxPeso: 33.2},
    {nome:"Pesado", maxPeso: 36.2},
    {nome:"Super-Pesado", maxPeso: 39.3},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const categoriaMirim2 = [
    {nome: "Galo", maxPeso: 21},
    {nome: "Pluma", maxPeso: 24},
    {nome: "Pena", maxPeso: 27},
    {nome: "Leve", maxPeso: 30.2},
    {nome: "Médio", maxPeso: 33.2},
    {nome: "Meio-Pesado", maxPeso: 36.2},
    {nome:"Pesado", maxPeso: 39.3},
    {nome:"Super-Pesado", maxPeso: 42.3},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const categoriaMirim3 = [
    {nome: "Galo", maxPeso: 24},
    {nome: "Pluma", maxPeso: 27},
    {nome: "Pena", maxPeso: 30.2},
    {nome: "Leve", maxPeso: 33.2},
    {nome: "Médio", maxPeso: 36.2},
    {nome: "Meio-Pesado", maxPeso: 39.3},
    {nome:"Pesado", maxPeso: 42.3},
    {nome:"Super-Pesado", maxPeso: 45.3},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const infantil1 = [
    {nome: "Galo", maxPeso: 27},
    {nome: "Pluma", maxPeso: 30.2},
    {nome: "Pena", maxPeso: 33.2},
    {nome: "Leve", maxPeso: 36.2},
    {nome: "Médio", maxPeso: 39.3},
    {nome: "Meio-Pesado", maxPeso: 42.3},
    {nome:"Pesado", maxPeso: 45.3},
    {nome:"Super-Pesado", maxPeso: 48.3},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const infantil2 = [
    {nome: "Galo", maxPeso: 30.2},
    {nome: "Pluma", maxPeso: 33.2},
    {nome: "Pena", maxPeso: 36.2},
    {nome: "Leve", maxPeso: 39.3},
    {nome: "Médio", maxPeso: 42.3},
    {nome: "Meio-Pesado", maxPeso: 45.3},
    {nome:"Pesado", maxPeso: 48.3},
    {nome:"Super-Pesado", maxPeso: 51.5},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const infantil3 = [
    {nome: "Galo", maxPeso: 32.2},
    {nome: "Pluma", maxPeso: 36.2},
    {nome: "Pena", maxPeso: 40.3},
    {nome: "Leve", maxPeso: 44.3},
    {nome: "Médio", maxPeso: 48.3},
    {nome: "Meio-Pesado", maxPeso: 52.5},
    {nome:"Pesado", maxPeso: 56.5},
    {nome:"Super-Pesado", maxPeso: 60.5},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const infantoJuvenil1 = [
    {nome: "Galo", maxPeso: 36.2},
    {nome: "Pluma", maxPeso: 40.3},
    {nome: "Pena", maxPeso: 44.3},
    {nome: "Leve", maxPeso: 48.3},
    {nome: "Médio", maxPeso: 52.5},
    {nome: "Meio-Pesado", maxPeso: 56.5},
    {nome:"Pesado", maxPeso: 60.5},
    {nome:"Super-Pesado", maxPeso: 65},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const infantoJuvenil2 = [
    {nome: "Galo", maxPeso: 40.3},
    {nome: "Pluma", maxPeso: 44.3},
    {nome: "Pena", maxPeso: 48.3},
    {nome: "Leve", maxPeso: 52.5},
    {nome: "Médio", maxPeso: 56.5},
    {nome: "Meio-Pesado", maxPeso: 60.5},
    {nome:"Pesado", maxPeso: 65},
    {nome:"Super-Pesado", maxPeso: 69},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]
const infantoJuvenil3 = [
    {nome: "Galo", maxPeso: 44.3},
    {nome: "Pluma", maxPeso: 48.3},
    {nome: "Pena", maxPeso: 52.5},
    {nome: "Leve", maxPeso: 56.5},
    {nome: "Médio", maxPeso: 60.5},
    {nome: "Meio-Pesado", maxPeso: 65},
    {nome:"Pesado", maxPeso: 69},
    {nome:"Super-Pesado", maxPeso: 73},
    {nome: "Pesadíssimo", maxPeso: Infinity}
]

form.addEventListener("submit", function (event){
    event.preventDefault()
let faixa = document.getElementById("faixa").value     
let peso = document.getElementById("peso").value 
let dataNascimento = document.getElementById("dataNascimento").value
let fsex = document.querySelector('input[name="radsex"]:checked').value   
peso = parseFloat (peso);
let anoNascimento = new Date(dataNascimento).getFullYear();
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
let categoriaIdade = ''
// separar as categorias de idade
if (idade ===4) {
    categoriaIdade = "pré-Mirim 1"
}
else if (idade === 5){
    categoriaIdade = "pré-Mirim 2"
}
else if (idade === 6){
    categoriaIdade = "pré-Mirim 3"
}
else if(idade === 7){
    categoriaIdade = "Mirim 1"
}
else if(idade === 8){
    categoriaIdade = "Mirim 2"
}
else if(idade === 9){
    categoriaIdade = "Mirim 3"
}
else if(idade ===10){ 
    categoriaIdade = "Infantil 1"
}
else if (idade === 11){
    categoriaIdade ="Infantil 2"
}
else if(idade === 12){
    categoriaIdade = "Infantil 3"
}
else if (idade === 13){
    categoriaIdade = "Infanto Juvenil 1"
}
else if (idade === 14){
    categoriaIdade = "Infanto Juvenil 2"
}
else if (idade===15){
    categoriaIdade = "Infanto Juvenil 3"
}
else if (idade===16){
    categoriaIdade = "Juvenil 1"
}
else if (idade===17){
    categoriaIdade = "Juvenil 2"
}
else if (idade >=18 && idade <=29){
    categoriaIdade = "Adulto"
}
else if (idade >=30 && idade <=35) {
    categoriaIdade = "Master 1"
}
else if (idade >=36 && idade <=40){
    categoriaIdade = "Master 2"
}
else if (idade >=41 && idade <=45){
    categoriaIdade = "Master 3"
}
else if (idade >=46 && idade <=50){
    categoriaIdade = "Master 4"
}
else if (idade >=51 && idade <=55){
    categoriaIdade = "master 5"
}
else if (idade >= 56 && idade <=60){
    categoriaIdade = "Master 6"
}
else if (idade >61){
    categoriaIdade = "Master 7"
}
// criar as categorias de peso para cada idade
categoriaPeso = ''
let tabelaCategoria = [] ;
if (categoriaIdade === "Adulto" || categoriaIdade.startsWith("Master")) {
    tabelaCategoria = fsex === "Masculino" ? categoriaAdultoMasterMasculino : categoriaAdultoMasterFeminino;
} else if (categoriaIdade === "Juvenil 1" || categoriaIdade === "Juvenil 2") {
    tabelaCategoria = fsex === "Masculino" ? categoriaJuvenilMasculino : categoriaJuvenilFeminino;
} else if (categoriaIdade === "pré-Mirim 1") {
    tabelaCategoria = categoriaPreMirim1;
} else if (categoriaIdade === "pré-Mirim 2") {
    tabelaCategoria = categoriaPreMirim2;
} else if (categoriaIdade === "pré-Mirim 3") {
    tabelaCategoria = categoriaPreMirim3;
} else if (categoriaIdade === "Mirim 1") {
    tabelaCategoria = categoriaMirim1;
} else if (categoriaIdade === "Mirim 2") {
    tabelaCategoria = categoriaMirim2;
} else if (categoriaIdade === "Mirim 3") {
    tabelaCategoria = categoriaMirim3;
} else if (categoriaIdade === "Infantil 1") {
    tabelaCategoria = infantil1;
} else if (categoriaIdade === "Infantil 2") {
    tabelaCategoria = infantil2;
} else if (categoriaIdade === "Ifantil 3") {
    tabelaCategoria = infantil3;
} else if (categoriaIdade === "Ifanto Juvenil 1") {
    tabelaCategoria = infantoJuvenil1;
} else if (categoriaIdade === "Ifanto Juvenil 2") {
    tabelaCategoria = infantoJuvenil2;
} else if (categoriaIdade === "Ifanto Juvenil 3") {
    tabelaCategoria = infantoJuvenil3;
}
for (let i=0; i < tabelaCategoria.length; i++){
    if (peso<=tabelaCategoria[i].maxPeso){
        categoriaPeso = tabelaCategoria[i].nome;
        break;
    }
}
// Esconde o formulário
document.getElementById("formBox").style.display = "none";
// Mostra o resultado na tela
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Sua categoria na CBJJ é: ${categoriaIdade}, ${fsex}, ${faixa} ${categoriaPeso}.`;
  resultado.style.display = "block";
  });
document.getElementById("btnAbrirFormularioCbjj").addEventListener("click",function()
{const formbox = document.getElementById("formBox");
    //Mostrar o formulario da CBJJ
    formbox.style.display="block";
    formbox.style.display="margin: 0 auto";
    //Rolar até o formulário
    formbox.scrollIntoView({ behavior: "smooth"});
    })

