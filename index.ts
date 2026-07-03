console.log("Olá Mundo!");

//Number

let idade: number = 16;
let altura: number = 1.81;

console.log("Idade:", idade);
console.log("Altura:", altura);

//Strings

let nome: string = "Miguel";
let saudacao: string = `Olá, ${nome}`; //Tamplate String

console.log(saudacao);

//Boolean

let aprovado: boolean = true;

console.log("Está aprovado?", aprovado);

//Null e Undefined
let resposta: null = null;
let valorIndefinido: undefined = undefined;

console.log(resposta);
console.log(valorIndefinido);

//Any --> Aceita todos os tipos de dados

let dado: any = "texto";
console.log("Valor atual:", dado);

dado = 10;
console.log("Valor Atualizado:", dado);

dado = true;
console.log("Valor atualizado novamente", dado);

//Unknown

let entrada: unknown = "Teste";
if(typeof entrada === "string"){
    console.log("A entrada é um texto e possui", entrada.length,
        "caracteres");
}

//Void --> Função que não retorna valor

function exibirMensagem(texto: string): void {
    console.log("Mensagem:", texto);
}

exibirMensagem("Bem-vindo ao TypeScript!");

//Inferência de Tipo --> o próprio TypeScript reconhece o valor e tipo 

let cidade = "Patos de Minas";
console.log(typeof(cidade));

let temperatura = 18;
console.log(typeof(temperatura));

//Arrays

let numeros: number[] = [10, 20, 30, 40, 50];
console.log("Númeoros:", numeros);

let nomes: Array<string> = ["Miguel", "Bernado", "Ana", 
"Vitor", "Lucas", "Arelly", "Sofia"];
console.log("Nomes:", nomes);
