import {Sequelize} from 'sequelize';
const {Model, DataTypes} = Sequelize;

export default (sequelize) => {
    class CounselingQuestion extends Model {
      static associate(model) {
        this.belongsTo(model.User, { foreignKey: "userId", targetKey: "id" })
        this.belongsTo(model.Category, { foreignKey: "categoryId ", targetKey: "id" })
        this.belongsTo(model.Emotion, { foreignKey: "emotionId ", targetKey: "id" })
        this.hasMany(model.CounselingComment, { foreignKey: "counselingQuestionId ", sourceKey: "id" })
      }
    }

    CounselingQuestion.init({
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'users',
        charset: 'utf8',
        timestamps: true,
        underscored: true,
      },
      );

  return CounselingQuestion;
}
