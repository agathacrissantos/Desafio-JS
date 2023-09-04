/*1*/
let dia = true
if (dia == true) {
    console.log("Está claro")
} else {
    console.log("Está de noite")
}

/*2*/
let contador = 0
for (let contador = 0; contador <= 20; contador += 2)
    console.log(contador);

/*3*/
function mensagem() {
    console.log("Oi classe!!")
}
mensagem()

/*4*/
function mostrarNome(nome) {
    console.log(`Meu nome é ${nome}`)
}
mostrarNome(`Agatha`)

/*5*/
function sobreMim(nome, idade, musica) {
    console.log(`Meu nome é ${nome},tenho ${idade} anos e meu estilo musical é ${musica}`)
}
sobreMim("Agatha", 33, "Gospel e Internacional")

/*6*/
function meusGostos(filme, musica) {
    console.log(`Gosto do filme ${filme} e da música ${musica}`)
}
meusGostos("A procura da felicidade", "Someone You Loved")

/*7*/
function triplo(num) {
    return num * 3
}
console.log(triplo(3))

/*8*/
let temSaldo = 100
if (temSaldo === 100) {
    console.log(true)
} else {
    console.log(false)
}

/*9*/
let comidasFavoritas = ["nhoque", "churrasco", "lasanha", "brigadeiro", "bolo"]
console.log(comidasFavoritas)

/*10*/
let animesDesenhos = ["onepiece", "dragonball", "minions", "frozen"]
animesDesenhos.unshift("naruto");
console.log(animesDesenhos)

/*11*/
let animais = ["gato", "cachorro", "girafa", "urso", "elefante"]
animais.pop();
console.log(animais)

/*12*/
let nomes = ["Agatha", "Juan", "Felipe", "Diego"]
nomes.push("Manu", "Tania");
console.log(nomes)

/*13*/
let cidades = ["Suzano", "São Paulo", "Rio de Janeiro", "Nova Iorque", "Madrid"]
cidades.shift();
console.log(cidades)

/*14*/
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
console.log(numbers.sort())

/*15*/
let maisSobreMim = {
    nome: "Agatha",
    idade: 33,
    naturalidade: "Suzano",
}
console.log(maisSobreMim)

/*16*/
maisSobreMim.signo = "Capricórnio"

/*17*/
delete maisSobreMim.naturalidade

/*18*/
console.log(maisSobreMim)

/*19*/
let cadastro = [
    {
        nome:"Agatha",
        idade:33,
        telefone:1199999-9999,
        amigos:["Paty","Ana","Suzy","Jéssica"]
    },
    {
        nome:"Juan",
        idade:9,
        telefone:1198888-8888,
        amigos:["Victor","Pedro","Aniely","Mel"]
    },
    {
        nome:"Felipe",
        idade:5,
        telefone:1197777-7777,
        amigos:["Tayla","João","Lorena","Bernardo"]
    },
    {
        nome:"Diego",
        idade:34,
        telefone:1196666-6666,
        amigos:["Mauro","Cesar","Lucas","Danilo"]
    },
    {
        nome:"Marcos",
        idade:22,
        telefone:1195555-5555,
        amigos:["Tania","Vitoria","Erick","Tiago"]
    },
]

/*20*/
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[1])
