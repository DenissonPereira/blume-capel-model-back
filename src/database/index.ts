import knex from 'knex';

const dataBaseDados = {
    host: "127.0.0.1",
    user: "root",
    password: "123456Ok!",
    database: "blume_capel_model",
}

export const databaseConnection = knex({
    client: "mysql2",
    connection: dataBaseDados,
  });