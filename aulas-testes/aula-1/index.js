import assert from 'node:assert/strict';

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, desconstos) => salario - desconstos;

export {
  somaHorasExtras,
  calculaDescontos,
};

// #######################################################

// // const verifiqueSe = (valor) => {
// //   const assercoes = {
// //     ehExatamenteIgualA(esperado) {
// //       if (valor !== esperado) {
// //         throw new Error();
// //       }
// //     },
// //   };

// //   return assercoes;
// // };

// const verifiqueSe = (valor) => {
//   const assercoes = {
//     ehExatamenteIgualA(esperado) {
//       assert.strictEqual(valor, esperado, 'valores diferentes');
//     },
//   };

//   return assercoes;
// };

// const teste = (titulo, funcaoDeDeste) => {
//   try {
//     funcaoDeDeste();
//     // console.log(`${titulo} PASSOU`);
//   } catch (error) {
//     // console.log(`${error} NÃO PASSOU`);
//   }

//   // if (esperado === retornado) {
//   //     console.log(`${titulo} passou`);
//   // } else {
//   //     console.error(`${titulo} não passou!!`);
//   // }
// };

// teste('SomaHoraExtra', () => {
//   const esperado = 2200;
//   const retornado = somaHorasExtras(2000, 200);

//   verifiqueSe(retornado).ehExatamenteIgualA(esperado);
// });

// teste('calculaDescontos', () => {
//   const esperado = 1900;
//   const retornado = calculaDescontos(2000, 1030);
//   verifiqueSe(esperado).ehExatamenteIgualA(retornado);
// });

// // eslint-disable-next-line max-len, max-len, max-len
// // console.log(`Hora extra: ${somaHorasExtras(2000, 20)}, Descontos: ${calculaDescontos(2000, 100)}`);
