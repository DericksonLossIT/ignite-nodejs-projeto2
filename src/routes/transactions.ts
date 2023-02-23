import { knex } from '../database'
import crypto from 'node:crypto'
import { FastifyInstance } from 'fastify'

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'transação de teste',
        amount: 1000,
      })
      .returning('*')

    return transactions
  })
}
