//Configuração do DB

module.exports = {
  username: 'userpi',
  password: 'shunda2020',
  database: 'projeto_integrador',
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    timestamps: true, //update_at and created_at
    underscored: true, //Snake case
  }
}