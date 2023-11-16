import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho ', () => {
    it('deve iniciar vazio', () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();
    })

    it('deve ter itens', () => {
        const item = new Item('banana', 2, 5);
        const item2 = new Item('pera', 4, 10);
        const carrinho = new Carrinho();

        carrinho.adiciona(item)
        carrinho.adiciona(item2)

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2)
    });

    it('deve ter a propriedade total na inicialização', () => {
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty('total')
    });

    it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {

        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }

        expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');

        /* expect(() => {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }).toThrowError('Carrinho de compras vazio') */

    })

    it('deve adicionar o frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);

        expect(carrinho.frete).toBe(10);
    });

    it('deve finalizar a compra', () => {
        const carrinho = new Carrinho();
        const item = new Item('batata', 5, 3);
        const item2 = new Item('pera', 7, 10);

        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toStrictEqual({subtotal: 85, frete: 10, total: 95});

    });

    it('deve calcular total', () => {
        const carrinho = new Carrinho();
        const item = new Item('batata', 5, 3);
        const item2 = new Item('pera', 7, 10);

        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);

        expect(carrinho.calculaTotal()).toBe(95);
    })
});