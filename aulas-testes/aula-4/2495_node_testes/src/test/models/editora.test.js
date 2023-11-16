import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testando o modelo editora', () => {
  const objEditora = {
    nome: 'CDC',
    cidade: 'são paulo',
    email: 'c@c.com',
  };

  it('deve instanciaruma nova editora', () => {
    const editora = new Editora(objEditora);

    expect(editora).toEqual(
      expect.objectContaining(objEditora),
    );
  });

  it.skip('deve salvar editora no banco de dados', () => {
    const editora = new Editora(objEditora);

    editora.salvar().then((dados) => {
      expect(dados.nome).toBe('CDC');
    });
  });

  it.skip('deve salvar editora no banco de dados', async () => {
    const editora = new Editora(objEditora);

    const newEditora = await editora.salvar();
    const dados = await Editora.pegarPeloId(newEditora.id);

    expect(dados).toEqual(expect.objectContaining({
      id: expect.any(Number),
      ...objEditora,
      created_at: expect.any(String),
      updated_at: expect.any(String),
    }));
  });

  it('deve fazer uma chama simulada ao banco de dados', () => {
    const editora = new Editora(objEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'são paulo',
      email: 'c@c.com',
      created_at: '2022-10-10',
      updated_at: '2022-10-10',
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(expect.objectContaining({
      id: expect.any(Number),
      ...objEditora,
      created_at: expect.any(String),
      updated_at: expect.any(String),
    }));
  });
});
