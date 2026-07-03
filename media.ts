//Algoritmo de média

let notas: number[] = [10, 8.6, 7, 5, 9, 8, 4.5, 7.6, 6.7, 8.9];
let somaNotas = 0;

for(const nota of notas){
    somaNotas += nota;
    console.log("Somando nota:", nota, "Total Parcial:", somaNotas);
}

const media = somaNotas / notas.length;
console.log("Média Final:", media.toFixed(2));
