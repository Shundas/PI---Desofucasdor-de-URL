const knex = require("../database/index");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

module.exports = {
  //Criação do usuário com validação --OK
  async create(request, response, next) {
    try {
      const erros = validationResult(request);
      const { senha, name, email } = request.body;

      //Hash de Senha
      bcrypt.hash(senha, 10).then( async function(hash) {
        const results = {
          name,
          email,
          senha: hash,
          erros: erros.array(),
        };
  
        if (!erros.isEmpty()) {
          return response.json(results);
        } else {
            await knex("users").insert({
            name,
            email,
            senha: hash,
          });
          return response.json(results);
        }
      })
    } catch (error) {
      next(error);
    }
  },

  //Alteração do usuário com validação --OK
  async update(request, response, next) {
    try {
      const erros = validationResult(request);
      const { email, name } = request.body;
      const { id } = request.params;

      const results = {
        id,
        name,
        email,
        erros: erros.array(),
      };
      if (!erros.isEmpty()) {
        return response.status(422).json(results);
      } else {
        if (results.name === "") {
          await knex("users").update("email", email).where("id", id);
        } else if (results.email === "") {
          await knex("users").update("name", name).where("id", id);
        } else {
          await knex("users").update("email", email).where("id", id);
          await knex("users").update("name", name).where("id", id);
        }
        return response.json(results);
      }
    } catch (error) {
      next(error);
    }
  },

  // Delete de usuário com validação --OK
  async delete(request, response, next) {
    try {
      const { id } = request.params;
      const delete_id = await knex("users").where({ id }).del();

      if (!delete_id) {
        return response.status(400).json({ message: "Usuário não encontrado" });
      } else {
        return response.json({ msg: "Usuário deletado" });
      }
    } catch (error) {
      next(error);
    }
  },

  //Buscar todos usuários --OK
  async index(request, response) {
    const results = await knex.select("*").from("users").orderBy("id");
    return response.json(results);
  },

   //Não vamos utilizar
  //Buscar usuário específico --Verificar
  async show(request, response, next) {
    try {
      const { name } = request.query;
      const pesquisaUser = await knex("users").where(
        "name",
        "like",
        `%${name}%`
      );

      if (!pesquisaUser) {
        return response.json({ msg: "Usuário não encontrado" }); //verificar
      } else {
        return response.json(pesquisaUser);
      }
    } catch (error) {
      next(error);
    }
  },

    // buscando unico user -- pelo ID
  async unique(request, response, next) {
    try {
      const { id } = request.params;
      const pesquisaUserUnico = await knex("users").where("id", id).first();

      if (!pesquisaUserUnico) {
        return response.json({ msg: "Usuário não encontrado" }); //verificar
      } else {
        return response.json(pesquisaUserUnico);
      }
    } catch (error) {
      next(error);
    }
  },

  //Função de Login
  async login(request, response) {
    const secret = 'VKPB6QPziQ'

    const dados = request.body;
    
    const erros = validationResult(request);

    if(erros.isEmpty()) {
      const userName = await knex("users").select("name").where('email', dados["email"])
      const userEmail = await knex("users").select("email").where('email', dados["email"])
      const userSenha = await knex("users").select("senha").where("email", dados["email"])
      
      var [ { senha } ] = userSenha
      var [ { name } ] = userName
      var [ { email } ] = userEmail
      
      
      bcrypt.compare(dados["senha"], senha)
        .then(result => {
          if(result) {
            const token = jwt.sign({
              name: name,
              email: email
            }, secret);

            return response.json({
              token: token,
            })
          } else {
            return response.status(404).json({
              error: [{
                value: '',
                msg: 'Usuário e senha incorretos'
              }]
            })
          }
        })
    } else {
      return response.status(422).json(erros)
    }
  },
};
