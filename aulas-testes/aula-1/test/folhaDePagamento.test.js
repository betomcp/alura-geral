// import test from 'node:test';
// import { describe } from 'node:test';
import { somaHorasExtras, calculaDescontos } from '..';
// it e teste é a mesma coisa
describe('Testes da folha de pagamento!', () => {
  it('deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('deve descontar o valor do salário', () => {
    const esperado = 2500;
    const retornado = calculaDescontos(3000, 500);

    expect(retornado).toBe(esperado);
  });
});
