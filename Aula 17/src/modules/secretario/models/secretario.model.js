const sequelize = require('../../../config/configDb');
const { DataTypes } = require('sequelize');

const SecretarioModel = sequelize.define('SecretarioModel',{
      matricula: {
        type: DataTypes.CHAR(5),
        primaryKey: true,
        validate:{
            isIn:{
                args:/^[a-zA-Z]\d{4}$/,
                msg: "A matrícula deve começar com uma letra seguida de quatro números."
            }
        }
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            isAlpha: true,
            msg: "é permitido apenas letras!"
        }
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate:{
            isEmail:{
                args:/^[a-zA-Z0-9._%+-]+@rn\.senac\.br$/,
                msg:'E-mail inválido! O e-mail deve pertencer ao domínio rn.senac.br'
            }
        }
      },
      senha: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate:{
            len:{
                args: [8,12],
                msg: 'A senha deve ter no mínimo 8 e no máximo 12 caracteres.'
            },
            is:{
                args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                msg: 'A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.'
            }
        }
      }
},  
    {
        tableName: 'secretario',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
  );

  module.exports = SecretarioModel