// //numero de 6 a 9

// function resultado(a){
//     if (a>9 || a<6){
//         console.log("nao e possivel usar este numero")
//     }else{
//         let gerados=[a]
//         for (let i=0; i<a; i++){
//             if (gerados[i]!=gerados[i+1]){
//                 gerados[i]=Math.floor(Math.random())*60
//             }
//         }console.log(gerados)
//     }
// } 
// resultado(8)

 function gerarNumeroMega(qtdNumeros){
    if (qtdNumeros<6 || qtdNumeros>9){
        console.log("apenas numeros de 6 a 9 ")
        return []
    }
    const numeros = []
    while(numeros.length < qtdNumeros){
        const numeroAleatorio = Math.floor(Math.random() * 60)+1
        if (!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio)
        }
    }
    return numeros
 }
 const numeroSorteado = gerarNumeroMega(6)
 console.log(numeroSorteado)
 
