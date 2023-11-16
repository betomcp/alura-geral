import {
  afterEach, beforeEach, describe, expect, it, jest,
} from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';

let server;
let idResposta;

beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('get em /editoras', () => {
  it('deve retornar uma lista de editoras', async () => {
    const resposta = await request(app)
      .get('/editoras')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].email).toBe('e@e.com');
  });
});

describe('post de uma editora', () => {
  it('deve adicionar uma nova editora', async () => {
    const resposta = await request(app)
      .post('/editoras')
      .send({
        nome: 'CDC',
        cidade: 'Sao paulo',
        email: 's@s.com',
      })
      .expect(201);
    idResposta = resposta.body.content.id;
  });

  it('deve nao adicionar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/editoras')
      .send({})
      .expect(400);
  });
});

describe('get em /editoras/:id', () => {
  it('pegar o recurso selecionado', async () => {
    await request(app)
      .get(`/editoras/${idResposta}`)
      .expect(200);
  });
});

describe('put em /editoras/:id', () => {
  it.each([
    ['nome', { nome: 'casa do codigo' }],
    ['cidade', { cidade: 'sp' }],
    ['email', { email: 'cdc@cdc.com' }],
  ])('deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };

    const spy = jest.spyOn(requisicao, 'request');

    await requisicao.request(app)
      .put(`/editoras/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('delete em /editoras', () => {
  it('deletar o recurso adicionado', async () => {
    await request(app)
      .delete(`/editoras/${idResposta}`);
  });
});
