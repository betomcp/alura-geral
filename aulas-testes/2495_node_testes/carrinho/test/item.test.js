import {
    describe, expect, it,
} from '@jest/globals';
import Item from '../item.js';

describe('teste dos itens', () => {
    it('deve ter tres campos: nome, valor e quantidade', () => {
        const item = new Item('batata', 2.5, 10);

        expect(item.nome).toBe('batata');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });

    it('deve ter o preço calculado de acordo com a qtd: ', () => {
        const item = new Item('batata', 0.5, 10);

        expect(item.pegaValorTotalItem()).toBeCloseTo(5);
    });
});

describe('Inicializando itens', () => {
    it.each([
        ['uva', 3.67, 6],
        ['laranja', 7.37, 7],
        ['pera', 8.91, 5]
    ])('Deve adicionar frutas no carrinho', (nome, valor, qtd) => {
        const item = new Item(nome, valor, qtd);

        expect(item.nome).toBe(nome)
        expect(item.valor).toBe(valor)
        expect(item.quantidade).toBe(qtd)

    })
})
