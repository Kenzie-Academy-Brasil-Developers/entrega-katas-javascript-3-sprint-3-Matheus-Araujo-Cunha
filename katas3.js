const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const corpo = document.getElementsByTagName('body')[0]

function showResults(value, title){
    // criando header e adicionando no corpo
    let cabecalho = document.createElement('header');
    corpo.appendChild(cabecalho);

    //criando h2 e adicionando no header
    let tituloResultado = document.createElement('h2');
    tituloResultado.innerText = title;
    cabecalho.appendChild(tituloResultado);

    //criando paragrafo e adicionando no header
    let resultado =  document.createElement('p');
    resultado.innerText += '(' +  value  + ')';
    cabecalho.appendChild(resultado);
    return resultado
    
}



function kata1() {
    // 1 até 25
    const result = []
    for(let i = 1; i <= 25; i++ ){
       result.push(i);
    }
    return showResults(result, 'Kata 1')
    
}

kata1();


function kata2() {
    // 25 até 1
    const result = []
    for(let i = 25; i >= 1; i-- ){
       result.push(i);
    }
    return showResults(result, 'Kata 2')
}

kata2();




function kata3() {
    // -1 até -25
    const result = []
    for(let i = -1; i >= -25; i-- ){
       result.push(i);
    }
    return showResults( result, 'Kata 3')
}
kata3();


function kata4() {
    // -25 até -1
    const result = []
    for(let i = -25; i <= -1; i++ ){
       result.push(i);
    }
    return showResults (result , 'Kata 4')
}
kata4();


function kata5() {
    // 25 a -25
      const result = []
    for(let i = 26; i >= -26; i-- ){
        
        let impar = i % 2 !== 0;

        if (impar) {
            result.push(i);
        }
    }
    return showResults( result, 'Kata 5');
}
kata5();


function kata6() {
    // 3 até 100
    const result = []
    for(let i = 1; i < 100; i++ ){
       
        if(i % 3 === 0){
        result.push(i);
        }
       
    }
    return showResults (result, 'Kata 6');
}
kata6()


function kata7() {
    // 7 até 100
    const result = []
    for(let i = 7; i < 100; i++ ){
       
        if(i % 7 === 0){
        result.push(i);
        }
    }
    return showResults (result, 'Kata 7')
}
kata7()


function kata8() {
    // exibir numeros divisiveis por 3 e numeros divisiveis por 7  do 100 até 3;
    const result = []
    for(let i = 100; i >= 3; i-- ){
       

        let divResult = i % 3 === 0 || i % 7 === 0;

        if(divResult){
            result.push(i);
        }
    }
    return showResults (result, 'Kata 8')
}

kata8()


function kata9() {
    // implemente o código do kata 9 aqui
    const result = []
    for(let i = 5; i <= 100; i+=2 ){

        if (i % 5 === 0) {
            result.push(i);
        }
    }
    return showResults (result, 'Kata 9')
}
kata9()


function kata10() {
    return showResults ( sampleArray , 'Kata 10');
}
kata10()


function kata11() {
    // implemente o código do kata 11 aqui
    const result = []

    for ( let i = 0; i < sampleArray.length; i++){

        let numeroAtual = sampleArray[i];

        let par = numeroAtual % 2 === 0;
        
        if (par) {
            result.push(numeroAtual)
        }
    }
    return showResults (result, 'Kata 11')
}
kata11()


function kata12() {
    // implemente o código do kata 12 aqui
    const result = []
    for(let i = 0; i < sampleArray.length; i++ ){
      
        let currentNumber = sampleArray[i]
        let oddNumber = currentNumber % 2 !== 0;

      if (oddNumber) {
          
        result.push(currentNumber);
      }
        
    }
    return  showResults (result, 'Kata 12')
}
kata12()


function kata13() {
    // implemente o código do kata 13 aqui
    const result = []
    for(let i = 0; i < sampleArray.length; i++ ){
       
        let currentNumber = sampleArray[i];
        let divEight = currentNumber % 8 === 0;

        if (divEight) {
            result.push(currentNumber)
        }
    }
    return showResults(result, 'Kata 13');
}
kata13()


function kata14() {
    // implemente o código do kata 14 aqui
    const result = []
    for(let i = 0; i < sampleArray.length; i++ ){
       
        let currentNumber = sampleArray[i];
        let numberSquare = currentNumber * currentNumber;
        
            result.push(numberSquare)
    
    }
    return showResults (result, 'Kata 14');
}
kata14()

const number = [1, 2 ,3 ,4 , 5 ,6 ,7 , 8 ,9 , 10] 

function kata15() {
    // implemente o código do kata 15 aqui
    let twenty = []
    for ( let i = 1; i <= 20; i++){
        twenty.push(i);
    }
    

    let sum = 0;
    for(let j = 0; j < twenty.length; j++){
        sum += twenty[j];
    }
   
    
    return showResults(sum, 'Kata 15')
}
kata15()


function kata16() {
    // implemente o código do kata 16 aqui
  
    let result = 0;
    for(let i = 0; i < sampleArray.length; i++ ){
      
        let currentNumber = sampleArray[i]
      
        result += currentNumber;
    }
    return showResults(result, 'Kata 16');
}
kata16()


function kata17() {
    // implemente o código do kata 17 aqui
    let result = sampleArray[0]
    

    for(let i = 0; i < sampleArray.length; i++ ){

        // o result nao pode começar como array vazio (tendo um valor de inicio) e criar uma condicao onde ele irá conferir se o result é menor que o sampleArray
        
        let numAtual = sampleArray[i];
        
        if (result > numAtual ) {
            result = numAtual
        }
       
    }
    return showResults(result, 'Kata 17')
}
kata17()


function kata18() {
    // implemente o código do kata 18 aqui
    
    let result = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++ ){
     
        let currentNumber = sampleArray[i];

        if (result < currentNumber) {
            result = currentNumber
        }
    }
    return showResults(result, 'Kata 18');
}
kata18()


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}


// function teste(){
//     let result = [];
    
//     for(let i = 1; i <= 50; i++ ){
//       result.push(i)  
//     } 
//     return result
// }



// const é = document.createElement('p')
// é.innerText = teste();

// corpo.appendChild(é)



// console.log(teste(50))