import express from 'express'
import { PrismaClient } from '@prisma/client';

var cors = require('cors')

const app = express();

app.use(express.json())

const prisma = new PrismaClient({
  log: ['query']
})

app.use(cors())

app.post('/produtos', async (request, response) => {
  const body: any  = request.body;

  const criarProduto = await prisma.produtos.create({

  data: { 
    descricao: body.descricao,
    preco: body.preco,
  },
   })

  return response.json(criarProduto)
});

/* Rota para Listar Codigo e Descrição Produtos */
app.get('/produtos', async (request, response) => {
  
    const produtos = await prisma.produtos.findMany({
    select: { 
      descricao: true,
      codigo: true,
    
    },
     })

    return response.json(produtos)
});

/* Rota para Listar todos campos de Produtos */
app.get('/produtos/:codigo/descricao', async (request, response) => {
  
  const codigo = request.params.codigo;
  const listarItemProdutos = await prisma.produtos.findMany({
    
    select: { 
      codigo: true,
      descricao: true,
      preco: true,
      data_cadastro: true
    
    },
    where: {
      codigo,
    }
    
  })
  
     return response.json( listarItemProdutos)


});

/* Rota para Atulizar Campo do Preco e descricao */
app.post('/produtos/:id/', async (request, response) => {
  const {id} = request.params;
  const body: any  = request.body;

  const atulizarProduto = await prisma.produtos.update({
    where: { 
      id: String(id) 
    },
    data: { 
      preco: body.preco,
      descricao: body.descricao,
    },
  })
  return response.json(atulizarProduto)
});

/* Rota para Deletar Produto pelo ID */
app.delete('/produtos/:id', async (request, response) => {
  const {id} = request.params;

  const deletaProdutos = await prisma.produtos.delete({
    where: {
      id: String(id)
    },
})})







app.listen(3334);