/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
  n = 5

  *****
  *****
  *****
  *****
  *****
*/

function exercise1(){
  let n = 5
  let asterisc = '*'
  let line = ''
  for (let index = 0; index < n; index += 1) {
    line  = line + asterisc
  }
  for (let index = 0; index < n; index += 1) {
    console.log(line);
    }
  }

exercise1();

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
  n = 5

  *
  **
  ***
  ****
  *****
*/

function exercise2() {
  let n = 5;
  let asterisc = '*'
  let line= ''
  for (let index= 0; index <= n; index += 1){
    console.log(line)
    line = line + asterisc
  }
}

exercise2();

/* 3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
*/ 

function exercise3() {
  let n = 5;
  let asterisc = '*';
  let line= '';
  let column= n;
  for (let index= 0; index < n; index += 1){
   for (let index2= 0; index2 <= n; index2 += 1) {
     if (index2 < column){
       line = line + ' ';
     } else {
       line = line + asterisc
     }
   }
   console.log(line);
   line=''
   column -= 1
  }
}

exercise3() 

/* 4- Depois, faça uma pirâmide com n asteriscos de base:
  n = 5

    *
   ***
  ***** */

function exercise4() {
  let base = 5;
  let asterisc = '*';
  let line = '';
  let middle = (base + 1) / 2;
  let left = middle;
  let right = middle;
  for (let index= 0; index <= middle; index += 1){
    for (let index2= 0; index2 <= base; index2 += 1){
      if (index2 > left && index2 < right){
        line = line + asterisc;
      } else {
        line = line + ' ';
      }
    }
    console.log(line);
    line = '';
    right += 1;
    left -= 1;
  }
}

exercise4();