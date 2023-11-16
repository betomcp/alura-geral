jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor.js')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe fornecedor', () => {
  test('O metodo validar retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'email@exe',
      categoria: 'brinquedos'
    })

    expect(fornecedor.validar()).toBe(true)
  })

  test('o método criar() foi executado com sucesso', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'email@exe',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(502)
    expect(fornecedor.dataCriacao).toBe('10/02/2022')
    expect(fornecedor.dataAtualizacao).toBe('12/11/1234')
    expect(fornecedor.versao).toBe(90)
  })
})
