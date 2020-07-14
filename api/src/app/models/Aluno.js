import { Model, DataTypes } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'alunos'
      }
    );

    return this;
  }
}

export default Aluno;
